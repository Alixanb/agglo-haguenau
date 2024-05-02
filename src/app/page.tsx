import Image from "next/image";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import ElemGrid from "@/components/widgets/ArticleGrid";
import ArticleCard from "@/components/widgets/Article";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={cn(" ", inter.className)}>
      <div className="flex flex-col ">
        <p
          className={cn(
            "text-sm font-medium leading-none slate text-slate-400 ",
            inter.className
          )}
        >
          Bienvenue, vous ête sur
        </p>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Agglomération
        </h1>
      </div>
      <div>
        {/* <ElemGrid>
          <ArticleCard title="Test" tags={["test"]}>
            <Image
              src="https://placehold.co/400x400"
              alt="Article de test"
              layout="fill"
              objectFit="cover"
            />
          </ArticleCard>
          <ArticleCard title="Test d'un gtitre trop longgggg" tags={["test"]}>
            <Image
              src="https://placehold.co/400x400"
              alt="Article de test"
              layout="fill"
              objectFit="cover"
            />
          </ArticleCard>
        </ElemGrid> */}
        <div className="flex gap-16 self-stretch">
          <div className="p-1 pr-4 flex-grow"></div>
        </div>
      </div>
    </main>
  );
}
