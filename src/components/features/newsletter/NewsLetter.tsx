import { Section, SubSection } from "@/components/layout";
import { H2 } from "@/components/typos";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import newsletterImage from "./newsletter.jpg";

const NewsLetter = () => {
  return (
    <Section>
      <H2>Suivre ma ville</H2>
      <SubSection>
        <div className="relative w-full h-32">
          <Image
            src={newsletterImage}
            alt="La newsletter de la ville c'est l'e-ebdo"
            layout="fill"
            objectFit="cover"
            className="absolute w-full h-full rounded-md"
          />
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit" variant="outline">
            Subscribe
          </Button>
        </div>
      </SubSection>
      <div className="flex gap-2">
        <LeadingButton accent="pink" size="fit">
          <Instagram />
        </LeadingButton>
        <LeadingButton accentClass="bg-blue-600 stroke-white" size="fit">
          <Facebook />
        </LeadingButton>
        <LeadingButton accent="sky" size="fit">
          <Linkedin />
        </LeadingButton>
      </div>
    </Section>
  );
};

export default NewsLetter;
