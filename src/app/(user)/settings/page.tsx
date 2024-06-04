import NewsLetter from "@/components/features/newsletter/NewsLetter";
import { BasicHeader, Main, SubSection } from "@/components/layout/";
import { ThemeSelect } from "@/components/theme/ThemeSelect";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { SettingsIcon, Shield } from "lucide-react";
import Link from "next/link";

const Settings = () => {
  return (
    <Main active="settings">
      <BasicHeader>
        <LeadingButton accent="slate" size="fit">
          <SettingsIcon />
        </LeadingButton>
        Paramètres
      </BasicHeader>
      <SubSection>
        <ThemeSelect />
        <Link href="/dashboard">
          <LeadingButton accent="purple" src="/dashboard">
            <Shield />
            Espace administrateur
          </LeadingButton>
        </Link>
      </SubSection>
      <NewsLetter />
    </Main>
  );
};

export default Settings;
