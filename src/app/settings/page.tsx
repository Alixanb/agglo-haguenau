import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { BasicHeader, Main, Section, SubSection } from "@/components/layout/";
import { Bell, Newspaper, SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <Main active="settings">
      <BasicHeader>
        <LeadingButton accent="slate" size="fit">
          <SettingsIcon />
        </LeadingButton>
        Paramètres
      </BasicHeader>
    </Main>
  );
};

export default Settings;
