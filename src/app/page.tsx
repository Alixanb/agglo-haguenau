import Image from "next/image";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { H1, H2, H3, P, Small } from "@/components/typos";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { Article, ArticleBanner } from "@/components/widgets/Article";
import { Main, Section, SubSection } from "@/components/layout/";
import { Button } from "@/components/ui/button";
import { Grid } from "@/components/widgets/Grid";
import {
  BusFront,
  HomeIcon,
  Megaphone,
  Router,
  SquareParking,
  TrafficCone,
  Trash2,
  TriangleAlert,
  Users,
} from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Main className={cn(" ", inter.className)}>
      <div className="flex flex-col ">
        <Small className="text-slate-400">Bienvenue, vous ête sur</Small>
        <H1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Agglomération
        </H1>
      </div>
      <Section>
        <H2>Accès rapides</H2>
        <SubSection>
          <LeadingButton link="out" accent="blue">
            <Router />
            Mes services en ligne
          </LeadingButton>
          <Grid size="sm">
            <LeadingButton accent="orange">
              <TrafficCone />
              Info travaux
            </LeadingButton>
            <LeadingButton accent="green">
              <Trash2 />
              Info dechets
            </LeadingButton>
          </Grid>
          <Grid size="sm">
            <LeadingButton accent="blue">
              <SquareParking />
              Parkings
            </LeadingButton>
            <LeadingButton accent="red">
              <BusFront />
              RITMO
            </LeadingButton>
          </Grid>
          <LeadingButton link="out" accent="red">
            <TriangleAlert />
            Créer un signalement
          </LeadingButton>
          <Grid size="sm">
            <LeadingButton accent="yellow">
              <Megaphone />
              Alertes
            </LeadingButton>
            <LeadingButton accent="slate">
              <Users />
              Espace Famille
            </LeadingButton>
          </Grid>
        </SubSection>
        <Button variant={"outline"}>Voir dans l&apos;agenda</Button>
      </Section>
      <ArticleBanner
        title="Inscription au marché"
        src="https://www.haguenau.fr/img/frontOffice/slideAcceuil/1920px_1128px-1711126160_c094c8ad087961b5e0b5.jpg"
        href="./"
      />
    </Main>
  );
}
