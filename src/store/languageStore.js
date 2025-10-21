import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  language: "en", // default English
  setLanguage: (lang) => {
    set({ language: lang });
    sessionStorage.setItem("language", lang);
  },
  initializeLanguage: () => {
    const savedLang = sessionStorage.getItem("language");
    if (savedLang) {
      set({ language: savedLang });
    }
  },
}));
