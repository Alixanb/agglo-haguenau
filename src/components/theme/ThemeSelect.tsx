"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LeadingButton, leadingButtonVariants } from "../ui/LeadingButton";
import { Skeleton } from "../ui/skeleton";
import { getThemeTranslation, themeTraduction } from "./theme.utils";

export const setAutomaticThemeColor = () => {};

export const unsetAutomaticThemeColor = () => {};

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
    <div
      className={cn(
        "text-start text-primary text-sm h-fit font-medium text-ellipsis overflow-hidden whitespace-nowrap",
        leadingButtonVariants()
      )}
    >
      <LeadingButton size="fit" accent="primary">
        {getThemeTranslation(theme)?.icon}
      </LeadingButton>
      Thème:
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
                <div>{item.translation}</div>
              </SelectItem>
            ))}
          </SelectContent>
        </div>
      </Select>
    </div>
  );
}
