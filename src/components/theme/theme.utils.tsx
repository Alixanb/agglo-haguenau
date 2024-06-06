import { CircleX, Computer, Moon, Sun } from "lucide-react";

export type Theme = "light" | "dark" | "system";

export const themeTraduction: {
  value: Theme;
  translation: string;
  icon: React.ReactNode;
}[] = [
  { value: "light", translation: "Mode clair", icon: <Sun /> },
  { value: "dark", translation: "Mode sombre", icon: <Moon /> },
  {
    value: "system",
    translation: "Dépendamment du système",
    icon: <Computer />,
  },
];

export const getThemeTranslation = (theme: string | undefined) => {
  const res = themeTraduction.find((item) => item.value === theme);
  return res ? res : { translation: "Thème non trouvé", icon: <CircleX /> };
};

const colorEquivalentToTheme = {
  dark: "#000000",
  light: "#FFFFFF",
  system: undefined,
};

export const getThemeColorEquivalent = (theme: string | undefined) => {
  if (!theme) {
    return undefined;
  }
  return colorEquivalentToTheme[theme];
};
