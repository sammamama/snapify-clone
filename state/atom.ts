import { create } from "zustand";
import { persist } from "zustand/middleware";

import { themeId, languageType } from "@/types/theme";
import React from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { IconType } from "react-icons/lib";

interface ThemeState {
  themeId: themeId;
  classname: string;
  themeHref: string;
  setThemeId: (id: themeId, setClassname: string, setThemeHref: string) => void;
}

interface BackgroundState {
  name: string;
  backgroundId: string;
  backgroundClass: string;
  setBackgroundId: (id: string, bgName: string, bgClass: string) => void;
}

interface LanguageState {
  name: string;
  code: string;
  placeholder? :string;
  setLanguage: (name: string, code: string) => void;
  setCode: (code: string) => void;
}

interface FontState {
  fontSize: number;
  setFontSize: (size: number) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      themeId: "glass",
      classname: "bg-black/20 backdrop-blur border-white/20",
      themeHref:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/1c-light.min.css",
      setThemeId: (id, setClassname, setThemeHref) =>
        set({ themeId: id, classname: setClassname, themeHref: setThemeHref }),
    }),
    {
      name: "theme-storage",
    }
  )
);

export const useBackgroundStore = create<BackgroundState>()(
  persist(
    (set) => ({
      name: "Purple Dream",
      backgroundId: "gradient-1",
      backgroundClass:
        "bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600",
      setBackgroundId: (id, bgName, bgClass) =>
        set({ backgroundId: id, name: bgName, backgroundClass: bgClass }),
    }),
    {
      name: "bg-storage",
    }
  )
);

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      name: "js",
      code: `//The ultimate productivity app

function doNothing() {
  console.log("Shhh... I'm being productive...");
}

setInterval(doNothing, 1000);
`,
      setLanguage: (chName, chCode) => set({ name: chName, code: chCode }),
      setCode: (newCode: string) => set({ code: newCode }),
    }),
    {
      name: "lang-storage",
    }
  )
);

export const useFontStore = create<FontState>()(
  persist(
    (set) => ({
      fontSize: 12,
      setFontSize: (size: number) => set({ fontSize: size }),
    }),
    {
      name: "font-storage",
    }
  )
);
