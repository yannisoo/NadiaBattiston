export type FilterGroup = "categories" | "timbers" | "interpretation";

export const FILTER_GROUPS: FilterGroup[] = ["categories", "timbers", "interpretation"];

export interface ExtractAudio {
    name: string;
    image: string;
    url: string;
    categories: string[];
    timbers: string[];
    interpretation: string[];
}

// WebP cover generated from `image` by scripts/optimize-images.mjs
export function coverUrl(image: string) {
    return `/images/extraits/${image.replace(/\.[^.]+$/, "")}.webp`;
}
