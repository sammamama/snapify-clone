import { create } from "zustand";
import { backgroundIdType, themeId } from "@/types/theme";

interface ThemeState {
  themeId: themeId;
  setThemeId: (id: themeId) => void;
}

interface BackgroundState {
  backgroundId: backgroundIdType;
  backgroundClass: string;
  setBackgroundId: (id: backgroundIdType) => void;
  setBackgroundClass: (bgClass: string) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  themeId: "light",
  setThemeId: (id) => set({ themeId: id }),
}));

export const useBackgroundStore = create<BackgroundState>((set) => ({
  backgroundId: "gradient-1",
  backgroundClass: "bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600",
  setBackgroundId: (id) => set({ backgroundId: id }),
  setBackgroundClass: (bgClass) => set({backgroundClass: bgClass})
}));
