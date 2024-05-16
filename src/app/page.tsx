import NewsLetter from "@/components/features/newsletter/NewsLetter";
import Sortir from "@/components/features/sortir/SortirBanner";
import { BannerHeader, Main, Section, SubSection } from "@/components/layout/";
import { H2 } from "@/components/typos";
import { Button } from "@/components/ui/button";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { ArticleBanner } from "@/components/widgets/Article";
import { Grid, GridSpan } from "@/components/widgets/Grid";
import {
  BusFront,
  FileSearch,
  Globe,
  Library,
  Megaphone,
  Router,
  SquareParking,
  TrafficCone,
  Trash2,
  TriangleAlert,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <BannerHeader src="/img/haguenau-banner.jpg" title="Haguenau" />
      <Main active="home" isRoot>
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
            <Button variant="outline" className="gap-2 w-full">
              <Globe size={16} /> Voir sur le web
            </Button>
          </SubSection>
        </Section>
        <NewsLetter />
        <Sortir />
      </Main>
    </>
  );
}
