import { Section, SubSection } from "@/components/layout";
import { H2 } from "@/components/typos";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Image from "next/image";
import sortirImage from "./sortir.png";

const Sortir = () => {
  return (
    <Section>
      <H2>Sortir à Haguenau</H2>
      <SubSection className="items-start">
        <div className="relative w-full h-24 bg-[#CD0046] rounded-md">
          <Image
            src={sortirImage}
            alt="La newsletter de la ville c'est l'e-ebdo"
            layout="fill"
            objectFit="cover"
            className="absolute w-full h-full "
          />
        </div>
        <Button variant="outline" className="gap-2 w-full">
          <Globe size={16} /> Voir sur le web
        </Button>
      </SubSection>
    </Section>
  );
};

export default Sortir;
