import Image from "next/image";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import ElemGrid from "@/components/widgets/ArticleGrid";
import ArticleCard from "@/components/widgets/Article";
import { H1, P, Small } from "@/components/typos";
import { LeadingButton } from "@/components/ui/LeadingButton";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={cn(" ", inter.className)}>
      <div className="flex flex-col ">
        <Small className="text-slate-400">Bienvenue, vous ête sur</Small>
        <H1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Agglomération
        </H1>
      </div>
      <div>
        {/* <ElemGrid>
          <Article title="Test" tags={["test"]}>
            <Image
              src="https://placehold.co/400x400"
              alt="Article de test"
              layout="fill"
              objectFit="cover"
            />
          </Article>   
          <Article title="Test d'un gtitre trop longgggg" tags={["test"]}>
            <Image
              src="https://placehold.co/400x400"
              alt="Article de test"
              layout="fill"
              objectFit="cover"
            />
          </Article>
        </ElemGrid> */}
        <div className="flex gap-16 self-stretch">
          <div className="p-1 pr-4 flex-grow"></div>
        </div>
      </div>
    </main>
  );
}
