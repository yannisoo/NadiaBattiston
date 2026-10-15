import { FILTER_GROUPS, type ExtractAudio, type FilterGroup } from "@/models/audio";
import type { Group } from "@/models/group";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import extracts from "../assets/extracts.json";
import filters from "../assets/filters.json";

const labels = new Map(
  FILTER_GROUPS.flatMap((group) =>
    (filters[group] as Group[]).map((filter) => [`${group}:${filter.value}`, filter.name])
  )
);

export function filterLabel(group: FilterGroup, value: string) {
  return labels.get(`${group}:${value}`);
}

export const useAudioStore = defineStore("audio", () => {
  const baseAudios = extracts as ExtractAudio[];

  const activeGroup = ref<FilterGroup>("categories");

  const selected = reactive<Record<FilterGroup, string[]>>({
    categories: [],
    timbers: [],
    interpretation: [],
  });

  const current = ref<ExtractAudio>();

  const isPlaying = ref(false);

  const currentTime = ref(0);

  const duration = ref(0);

  // Kept out of the reactive state: only the derived values above are rendered
  let audio: HTMLAudioElement | undefined;

  // OR inside a group, AND between groups
  const filteredAudios = computed(() =>
    baseAudios.filter((extract) =>
      FILTER_GROUPS.every(
        (group) =>
          selected[group].length === 0 ||
          selected[group].some((value) => extract[group].includes(value))
      )
    )
  );

  const hasFilters = computed(() => FILTER_GROUPS.some((group) => selected[group].length > 0));

  async function registerListen(name: string) {
    try {
      const { supabase } = await import("../supabase");
      const { data } = await supabase.from("audio").select("listen").eq("name", name).single();
      await supabase
        .from("audio")
        .update({
          listen: data?.listen + 1,
        })
        .eq("name", name)
        .single();
    } catch {
      // Listen statistics must never break playback
    }
  }

  function select(extract: ExtractAudio) {
    if (current.value?.url === extract.url) {
      toggle();
      return;
    }
    audio?.pause();
    current.value = extract;
    currentTime.value = 0;
    duration.value = 0;

    const element = new Audio("/audio/" + extract.url);
    const isCurrent = () => element === audio;
    element.addEventListener("loadedmetadata", () => isCurrent() && (duration.value = element.duration));
    element.addEventListener("timeupdate", () => isCurrent() && (currentTime.value = element.currentTime));
    element.addEventListener("play", () => isCurrent() && (isPlaying.value = true));
    element.addEventListener("pause", () => isCurrent() && (isPlaying.value = false));
    element.addEventListener("ended", () => isCurrent() && nextAudio());
    audio = element;

    registerListen(extract.url);
    play();
  }

  function play() {
    audio?.play().catch(() => (isPlaying.value = false));
  }

  function pause() {
    audio?.pause();
  }

  function toggle() {
    if (!audio) {
      const first = filteredAudios.value[0];
      if (first) select(first);
      return;
    }
    if (isPlaying.value) {
      pause();
    } else {
      play();
    }
  }

  function seek(time: number) {
    if (audio) audio.currentTime = time;
  }

  function step(offset: number) {
    const list = filteredAudios.value;
    if (list.length === 0) return;
    const index = list.findIndex((extract) => extract.url === current.value?.url);
    const nextIndex = index === -1 ? 0 : (index + offset + list.length) % list.length;
    select(list[nextIndex]);
  }

  function nextAudio() {
    step(1);
  }

  function previousAudio() {
    step(-1);
  }

  function download() {
    if (!current.value) return;
    const link = document.createElement("a");
    link.href = "/audio/" + current.value.url;
    link.download = "Nadia_Battiston_" + current.value.url;
    link.click();
  }

  function toggleFilter(group: FilterGroup, value: string) {
    const values = selected[group];
    selected[group] = values.includes(value)
      ? values.filter((v) => v !== value)
      : [...values, value];
  }

  function resetFilters() {
    for (const group of FILTER_GROUPS) selected[group] = [];
  }

  function showCategories(categories: string[]) {
    resetFilters();
    selected.categories = categories;
    activeGroup.value = "categories";
  }

  return {
    baseAudios,
    filteredAudios,
    activeGroup,
    selected,
    hasFilters,
    current,
    isPlaying,
    currentTime,
    duration,
    select,
    play,
    pause,
    toggle,
    seek,
    nextAudio,
    previousAudio,
    download,
    toggleFilter,
    resetFilters,
    showCategories,
  };
});
