import { defineStore } from 'pinia'

interface LanguageState {
  lang: string;
}

export const useLanguageStore = defineStore('language', {
  state: (): LanguageState => ({ lang: '' }),
  getters: {
    getLanguage: (state) => state.lang,
  },
  actions: {
    setLanguage(value: string) {
      this.lang = value;
    },
  },
})