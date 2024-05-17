"use client";

import { BasicHeader, Main, Section } from "@/components/layout/";
import { H2 } from "@/components/typos";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { Grid } from "@/components/widgets/Grid";
import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";

const Agenda = () => {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState<Event[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

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
          {/*  <AgendaCard
               key={index}
               title={product.title}
               date={product.date}
               period={product.period}
               href={product.href}
               tag={product.tag}
               src={product.src}
             /> */}
        </Grid>
      </Section>
    </Main>
  );
};

export default Agenda;
