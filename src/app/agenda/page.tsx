import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { BasicHeader, Main, Section, SubSection } from "@/components/layout/";
import { CalendarDays } from "lucide-react";

const Agenda = () => {
  return (
    <Main active="agenda">
      <BasicHeader>
        <LeadingButton accent="green" size="fit">
          <CalendarDays />
        </LeadingButton>
        Agenda
      </BasicHeader>
    </Main>
  );
};

export default Agenda;
