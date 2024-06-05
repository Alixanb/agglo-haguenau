"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircleX, Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LeadingButton, leadingButtonVariants } from "../ui/LeadingButton";
import { Skeleton } from "../ui/skeleton";

type Theme = "light" | "dark" | "system";

const themeTraduction: {
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

const getThemeTranslation = (theme: string | undefined) => {
  const res = themeTraduction.find((item) => item.value === theme);
  return res ? res : { translation: "Thème non trouvé", icon: <CircleX /> };
};

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
    <div className={leadingButtonVariants()}>
      <LeadingButton size="fit" accent="yellow">
        {getThemeTranslation(theme)?.icon}
      </LeadingButton>
      <Select
        onValueChange={(value) => {
          setTheme(value);
        }}
        defaultValue={theme}
      >
        <SelectTrigger className="bg-transparent w-full border-none pl-0">
          <SelectValue placeholder={getThemeTranslation(theme)?.translation} />
        </SelectTrigger>
        <div onClick={(e) => e.stopPropagation()}>
          <SelectContent
            ref={(ref) => {
              if (!ref) return;
              ref.ontouchstart = (e) => e.preventDefault();
            }}
          >
            {themeTraduction.map((item, i) => (
              <SelectItem value={item.value} key={item.value}>
                {item.translation}
              </SelectItem>
            ))}
          </SelectContent>
        </div>
      </Select>
    </div>
  );
}
