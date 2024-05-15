import NewsLetter from "@/components/features/newsletter/NewsLetter";
import { BasicHeader, Main } from "@/components/layout/";
import { ThemeSelect } from "@/components/theme/ThemeSelect";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <Main active="settings">
      <BasicHeader>
        <LeadingButton accent="slate" size="fit">
          <SettingsIcon />
        </LeadingButton>
        Paramètres
      </BasicHeader>
      <ThemeSelect />
      <NewsLetter />
    </Main>
  );
};

export default Settings;
