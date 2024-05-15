import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { BasicHeader, Main, Section, SubSection } from "@/components/layout/";
import { Bell, Newspaper } from "lucide-react";

const News = () => {
  return (
    <Main active="news">
      <BasicHeader>
        <LeadingButton accent="blue" size="fit">
          <Newspaper />
        </LeadingButton>
        Actualités
      </BasicHeader>
    </Main>
  );
};

export default News;
