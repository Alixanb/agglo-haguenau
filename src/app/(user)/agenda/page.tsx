"use client";

import { Spinner } from "@/components/core/Loader";
import { BasicHeader, Main, Section } from "@/components/layout/";
import { H2 } from "@/components/typos";
import AgendaCard from "@/components/ui/Agenda";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { Grid } from "@/components/widgets/Grid";
import { Product } from "@/types/entity";
import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  extractActualProductsAction,
  getProductsAction,
} from "./products.action";

const Agenda = () => {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[] | undefined>(undefined);
  const [actualProducts, setActualProducts] = useState<Product[] | undefined>(
    undefined
  );
  const [comingProducts, setComingProducts] = useState<Product[] | undefined>(
    undefined
  );

  const fetchData = async () => {
    setLoading(true);
    const products = await getProductsAction();
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if (!products) {
      toast.error("Aucun évenement trouvé");
      return;
    }

    setActualProducts(extractActualProductsAction(products, now));
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Main active="agenda">
      <BasicHeader>
        <LeadingButton accent="green" size="fit">
          <CalendarDays />
        </LeadingButton>
        Agenda
      </BasicHeader>
      <Section>
        <H2>En ce moment</H2>
        <Grid cols="1" size="sm">
          {false ? (
            actualProducts.map((product, i) => {
              const tags: string[] = [];
              product.criteres.map((critere) => tags.push(critere.nom));

              const src = "";
              return (
                <AgendaCard
                  key={product.id}
                  title={product.nom}
                  date={[product.date_debut, product.date_fin]}
                  period={[
                    product.horaires[0].heures[0].heure_debut,
                    product.horaires[0].heures[0].heure_fin,
                  ]}
                  href={"#"}
                  place={product.coordonnees.libelle_commune}
                  src={"test"}
                />
              );
            })
          ) : (
            <Spinner />
          )}
        </Grid>
      </Section>
    </Main>
  );
};

export default Agenda;
