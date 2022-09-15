import { defineStore } from "pinia";

export const useStepperInfo = defineStore({
  id: "stepper",
  state: () => ({
    steps: 0,
    categories: [] as string[],
    timbers: [] as string[],
    ages: [] as string[],
    interpretations: [] as string[],
  }),
  getters: {
    currentStep: (state) => state.steps,
  },
  actions: {
    changeStep(newState: number) {
      this.steps = newState;
    },
    nextStep() {
      this.steps++;
    },
    addCategory(category: string) {
      if (!this.categories.includes(category)) {
        this.categories.push(category);
      }
    },
    removeCategory(category: string) {
      this.categories = this.categories.filter((item) => item !== category);
    },
    addTimber(timber: string) {
      if (!this.timbers.includes(timber)) {
        this.timbers.push(timber);
      }
    },
    removeTimber(timber: string) {
      this.timbers = this.timbers.filter((item) => item !== timber);
    },
    addAge(age: string) {
      if (!this.ages.includes(age)) {
        this.ages.push(age);
      }
    },
    removeAge(age: string) {
      this.ages = this.ages.filter((item) => item !== age);
    },
    addInterpretation(interpretation: string) {
      if (!this.interpretations.includes(interpretation)) {
        this.interpretations.push(interpretation);
      }
    },
    removeInterpretation(interpretation: string) {
      this.interpretations = this.interpretations.filter(
        (item) => item !== interpretation
      );
    },
  },
});
