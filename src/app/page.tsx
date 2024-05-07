import Image from "next/image";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { H1, H2, H3, P, Small } from "@/components/typos";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { Article, ArticleBanner } from "@/components/widgets/Article";
import { Main, Section, SubSection } from "@/components/layout/";
import { Button } from "@/components/ui/button";
import { Grid, GridSpan } from "@/components/widgets/Grid";
import {
  Activity,
  ArrowUpRight,
  BusFront,
  CalendarDays,
  ExternalLink,
  FileSearch,
  Guitar,
  Library,
  Megaphone,
  Paintbrush,
  Palette,
  Router,
  Shapes,
  ShoppingBag,
  Speech,
  SquareParking,
  Theater,
  TrafficCone,
  Trash2,
  Trees,
  TriangleAlert,
  Users,
} from "lucide-react";
import NewsLetter from "@/components/misc/newsletter/NewsLetter";

export default function Home() {
  return (
    <Main active="home">
      <div className="flex flex-col ">
        <Small className="text-slate-400">Bienvenue, vous ête sur</Small>
        <H1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Haguenau
        </H1>
      </div>
      <Section>
        <H2>Accès rapides</H2>
        <SubSection>
          <Grid size="sm">
            <GridSpan>
              <LeadingButton link="out" accent="blue">
                <Router />
                Mes services en ligne
              </LeadingButton>
            </GridSpan>
            <LeadingButton accent="orange">
              <TrafficCone />
              Info travaux
            </LeadingButton>
            <LeadingButton accent="green">
              <Trash2 />
              Info dechets
            </LeadingButton>
            <LeadingButton accent="blue">
              <SquareParking />
              Parkings
            </LeadingButton>
            <LeadingButton accent="red">
              <BusFront />
              RITMO
            </LeadingButton>
            <GridSpan>
              <LeadingButton link="out" accent="red">
                <TriangleAlert />
                Créer un signalement
              </LeadingButton>
            </GridSpan>
            <LeadingButton accent="yellow">
              <Megaphone />
              Alertes
            </LeadingButton>
            <LeadingButton accent="slate">
              <Users />
              Espace Famille
            </LeadingButton>
            <GridSpan>
              <LeadingButton link="out" accent="sky">
                <Library />
                TILT - Bibilothèques
              </LeadingButton>
            </GridSpan>
            <GridSpan>
              <LeadingButton link="out" accent="purple">
                <FileSearch />
                Consultation citoyennes
              </LeadingButton>
            </GridSpan>
          </Grid>
        </SubSection>
        <SubSection>
          <ArticleBanner
            title="Inscription au marché"
            src="https://www.haguenau.fr/img/frontOffice/slideAcceuil/1920px_1128px-1711126160_c094c8ad087961b5e0b5.jpg"
            href="./"
          />
          <Button>
            <span className="pr-2">Voir tout</span>
            <ArrowUpRight size={16} />
          </Button>
        </SubSection>
      </Section>
      <Section>
        <H2>Évenements</H2>
        <Grid size="sm">
          <Article
            title="Balade ludique à Bischwiller"
            href="./"
            variant="outline"
            tags={["Jusqu'au 22/05", "12H00 à 16H00"]}
          />
          <Article
            title="Balade ludique à Bischwiller"
            href="./"
            variant="outline"
            tags={["Jusqu'au 22/05", "12H00 à 16H00"]}
          />
          <Article
            title="Balade ludique à Bischwiller"
            href="./"
            variant="outline"
            tags={["Jusqu'au 22/05", "12H00 à 16H00"]}
          />
          <Article
            title="Balade ludique à Bischwiller"
            href="./"
            variant="outline"
            tags={["Jusqu'au 22/05", "12H00 à 16H00"]}
          />
        </Grid>
      </Section>
      <NewsLetter />
      <Section>
        <H2>Sortir à Haguenau</H2>
        <SubSection>
          <Grid size="sm">
            <LeadingButton accent="blue">
              <Palette />
              Expositions
            </LeadingButton>
            <LeadingButton accent="yellow">
              <Shapes />
              Jeune publique
            </LeadingButton>
            <LeadingButton accent="purple">
              <Theater />
              Spectacle
            </LeadingButton>
            <LeadingButton accent="red">
              <Guitar />
              Concert
            </LeadingButton>
            <LeadingButton accent="orange">
              <Activity />
              Sport
            </LeadingButton>
            <LeadingButton accent="lime">
              <Paintbrush />
              Ateliers
            </LeadingButton>
            <LeadingButton accent="pink">
              <Speech />
              Rencontre
            </LeadingButton>
            <LeadingButton accent="sky">
              <ShoppingBag />
              Marché
            </LeadingButton>
            <LeadingButton accent="green">
              <Trees />
              Forêt
            </LeadingButton>
          </Grid>
        </SubSection>
        <Button variant="outline">
          <CalendarDays size={16} />
          <span className="pl-2">Voir dans agenda</span>
        </Button>
      </Section>
    </Main>
  );
}
