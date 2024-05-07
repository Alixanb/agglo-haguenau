import Image from "next/image";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import ElemGrid from "@/components/widgets/Grid";
import { H1, H2, H3, P, Small } from "@/components/typos";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { Article, ArticleBanner } from "@/components/widgets/Article";
import { Main, Section, SubSection } from "@/components/layout/";
import { Button } from "@/components/ui/button";
import Grid from "@/components/widgets/Grid";
import { HomeIcon } from "lucide-react";

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
        <H2>Actualités</H2>
        <ArticleBanner
          title="Inscription au marché"
          src="https://placehold.co/400x400"
          href="./"
        />
        <ElemGrid>
          <Article
            title="Inscription au Rendez-vous de la Jeunesse"
            src="https://placehold.co/400x400"
            tags={["This", "tag"]}
            href="./"
          ></Article>
          <Article
            title="Inscription au Rendez-vous de la Jeunesse"
            src="https://placehold.co/400x400"
            tags={["This", "tag"]}
            href="./"
          ></Article>
        </ElemGrid>
        <Button variant={"outline"}>Voir dans l&apos;agenda</Button>
      </Section>
    </Main>
  );
}
