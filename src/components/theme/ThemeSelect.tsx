"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { LeadingButton } from "../ui/LeadingButton";

interface ThemeTradProps {
  light: string;
  dark: string;
  system: string;
}

type Theme = "light" | "dark" | "system";

const themeTraduction: {
  value: Theme;
  translation: string;
  Icon?: React.ReactNode;
}[] = [
  { value: "light", translation: "Mode clair", Icon: <Sun /> },
  { value: "dark", translation: "Mode sombre", Icon: <Moon /> },
  {
    value: "system",
    translation: "Dépendamment du système",
    Icon: <Computer />,
  },
];

const getThemeTranslation = (theme: string | undefined) => {
  return themeTraduction.find((item) => item.value === theme);
};

import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

export function ThemeSelect() {
  const { theme, setTheme } = useTheme();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!theme) {
      setTheme("light");
    }
    setInitialized(true);
  }, [theme, setTheme]);

  if (!initialized) {
    return <Skeleton className="w-full h-12" />;
  }

  return (
    <div className="p-1 border border-border rounded flex gap-2">
      <LeadingButton size="fit">
        {getThemeTranslation(theme)?.Icon}
      </LeadingButton>
      <Select
        onValueChange={(value) => {
          setTheme(value);
        }}
      >
        <SelectTrigger className="w-full border-none">
          <SelectValue
            placeholder={
              getThemeTranslation(theme)?.translation && "Thème non trouvé"
            }
          />
        </SelectTrigger>
        <SelectContent>
          {themeTraduction.map((item, i) => (
            <SelectItem value={item.value} key={item.value}>
              {item.translation}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
