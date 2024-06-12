"use client";

import { Main, Section, SubSection } from "@/components/layout";
import { H1, P } from "@/components/typos";
import { Button } from "@/components/ui/button";
import { Grid } from "@/components/widgets/Grid";
import { RotateCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Main>
      <Section>
        <SubSection className="my-8">
          <H1>Ohoh !</H1>
          <P>
            Malheureusement il semble que la page que vous essayez
            d&apos;acceder presente une erreur.
          </P>
        </SubSection>
        <Grid cols="2">
          <Button className="flex gap-2" onClick={() => reset()}>
            <RotateCw className="size-4" />
            Reessayer
          </Button>
          <Link href="/">
            <Button variant="outline">Retour au menu</Button>
          </Link>
        </Grid>
      </Section>
    </Main>
  );
}
