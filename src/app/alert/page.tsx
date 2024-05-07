import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { BasicHeader, Main, Section, SubSection } from "@/components/layout/";
import { Bell } from "lucide-react";

const Alert = () => {
  return (
    <Main active="alert">
      <BasicHeader>
        <LeadingButton accent="red" size="fit">
          <Bell />
        </LeadingButton>
        Alertes
      </BasicHeader>
    </Main>
  );
};

export default Alert;
