import type { ExtractAudio } from "@/models/audio";
import { defineStore } from "pinia";
import extracts from '../assets/extracts.json';
import { supabase } from '../supabase'
import { ref, watch } from "vue";

export const useAudioStore = defineStore("audio", () => {


  const audio = ref<HTMLAudioElement>();

  const currentStep = ref(1);

  const isPlaying = ref(false);

  const baseAudios = ref<ExtractAudio[]>(extracts as ExtractAudio[]);

  const filteredAudios = ref<ExtractAudio[]>(extracts as ExtractAudio[]);

  const title = ref<ExtractAudio>();

  const categories = ref<string[]>([]);

  const timbers = ref<string[]>([]);

  const interpretations = ref<string[]>([]);

  const audioIndex = ref<number>(-1);


  async function registerListen(name: string) {
    const { data } = await supabase.from('audio').select('listen').eq('name', name).single()
    await supabase
      .from('audio')
      .update({
        listen: data?.listen + 1,
      })
      .eq('name', name)
      .single()
  }

  function setAudioFile(audioPath: string) {
    if (audio.value) {
      audio.value.pause();
    }
    registerListen(audioPath)
    audio.value = new Audio('audio/' + audioPath);
    isPlaying.value = true;
    audio.value.play();
  }

  function changeStep(newState: number) {
    currentStep.value = newState;
  }

  function nextStep() {
    currentStep.value++;
  }

  function previousAudio() {
    if (audioIndex.value === 0) {
      audioIndex.value = filteredAudios.value.length - 1
      return
    }
    audioIndex.value--;

  }
  function nextAudio() {
    if (audioIndex.value === filteredAudios.value.length - 1) {
      audioIndex.value = 0
      return
    }
    audioIndex.value++;
  }

  function chooseAudio(index: number) {
    audioIndex.value = index;
  }



  function updateCategory(category: string) {
    if (categories.value.includes(category)) {
      categories.value = categories.value.filter((c) => c !== category);
      return;
    }
    categories.value = [...categories.value, category];
  }

  function updateTimber(timber: string) {
    if (timbers.value.includes(timber)) {
      timbers.value = timbers.value.filter((t) => t !== timber);
      return;

    }
    timbers.value = [...timbers.value, timber];
  }

  function updateInterpretation(interpretation: string) {
    if (interpretations.value.includes(interpretation)) {
      interpretations.value = interpretations.value.filter(
        (i) => i !== interpretation
      );
      return;
    }
    interpretations.value = [...interpretations.value, interpretation];
  }

  function play() {
    if (!audio.value) return
    isPlaying.value = true;
    audio.value.play();
  }

  function pause() {
    if (!audio.value) return
    isPlaying.value = false;
    audio.value.pause();
  }
  watch([categories, timbers, interpretations], () => {
    let tempCategories: ExtractAudio[] = [];
    for (let category of categories.value) {
      tempCategories = [...tempCategories, ...baseAudios.value.filter((audio) =>
        audio.categories.includes(category)
      )];
    }
    let baseTimbers = tempCategories.length == 0 ? baseAudios.value : tempCategories
    let tempTimbers: ExtractAudio[] = []
    console.log(baseTimbers)
    for (let timber of timbers.value) {
      console.log('hey')
      tempTimbers = [...tempTimbers, ...baseTimbers.filter((audio) =>
        audio.timbers.includes(timber)
      )]
    }
    let baseInterpretation = tempTimbers.length === 0 ? baseTimbers : tempTimbers
    let tempInterpretation: ExtractAudio[] = []
    console.log(baseInterpretation)
    console.log(tempInterpretation)
    for (let interpretation of interpretations.value) {
      tempInterpretation = [...tempInterpretation, ...baseInterpretation.filter((audio) =>
        audio.interpretation.includes(interpretation)
      )];
    }
    tempInterpretation = tempInterpretation.length === 0 ? baseInterpretation : tempInterpretation
    filteredAudios.value = [...new Set(tempInterpretation)];
  }

  )
  watch(filteredAudios, () => {
    audioIndex.value = 0
    audio.value?.addEventListener('ended', () => {
      audioIndex.value++
    })
  })

  watch(audioIndex, () => {
    title.value = filteredAudios.value[audioIndex.value];
  })

  watch(title, () => {
    if (!title.value) return
    setAudioFile(title.value.url)
  })

  return {
    setAudioFile,
    play,
    pause,
    audio,
    currentStep,
    changeStep,
    nextStep,
    updateCategory,
    categories,
    timbers,
    interpretations,
    updateTimber,
    updateInterpretation,
    baseAudios,
    filteredAudios,
    title,
    audioIndex,
    nextAudio,
    previousAudio,
    chooseAudio,
    isPlaying
  }

});
