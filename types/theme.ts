export type themeId = "light" | "dark" | "glass" | "glass-dark";

export type backgroundIdType = "gradient-1" | "gradient-2" | "gradient-3" | "gradient-4";

export type BackgroundType ={
  name: backgroundIdType,
  class: string
}

export type Theme = {
  id: themeId;
  name: string;
  preview: string;
  textColor: string;
};

