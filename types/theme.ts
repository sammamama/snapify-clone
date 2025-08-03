export type themeId = "light" | "dark" | "glass" | "glass-dark";

export type BackgroundType ={
  name: string,
  class: string
}

export type Theme = {
  id: themeId;
  name: string;
  themeHref: string;
  preview: string;
  textColor: string;
};

export type languageType = {
    name: string;
    placeholder?: string;
  };