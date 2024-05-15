import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { BasicHeader, Main, Section, SubSection } from "@/components/layout/";
import { CalendarDays } from "lucide-react";
import AgendaCard from "@/components/ui/Agenda";
import { H2 } from "@/components/typos";
import { Grid } from "@/components/widgets/Grid";

const Agenda = () => {
  return (
    <Main active="agenda">
      <BasicHeader>
        <LeadingButton accent="green" size="fit">
          <CalendarDays />
        </LeadingButton>
        Agenda
      </BasicHeader>
      <Section>
        <H2>En ce moment</H2>
        <Grid cols="1" size="sm">
          <AgendaCard
            title="Le chemin des cîmes"
            date={["15/06"]}
            period={["16H00", "18H00"]}
            href="#"
            tag="spéctacle"
            src="https://placehold.co/401x400"
          />
          <AgendaCard
            title="Le chemin des cîmes"
            date={["15/06"]}
            period={["16H00", "18H00"]}
            href="#"
            tag="spéctacle"
            src="https://placehold.co/401x400"
          />
        </Grid>
      </Section>
    </Main>
  );
};

export default Agenda;
