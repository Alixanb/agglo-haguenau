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
  deleteIntersectingProducts,
  extractActualProductsAction,
  getProductsAction,
  getProductsNotDeprecatedAction,
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

  useEffect(() => {
    const now = new Date();

    const fetchData = async () => {
      setLoading(true);
      const products = await getProductsAction();

      if (!products) {
        toast.error("Aucun évenement trouvé");
        return;
      }

      setActualProducts(extractActualProductsAction(products, now));
      setComingProducts(
        deleteIntersectingProducts(
          getProductsNotDeprecatedAction(products, now),
          actualProducts
        )
      );

      console.log(comingProducts);
      setProducts(products);
      setLoading(false);
    };
    fetchData();
  });

  return (
    <Main active="agenda">
      <BasicHeader>
        <LeadingButton accent="green" size="fit">
          <CalendarDays />
        </LeadingButton>
        Agenda
      </BasicHeader>
      {products && (
        <>
          <Section>
            <H2>En ce moment</H2>
            <Grid cols="1" size="sm">
              {actualProducts ? (
                actualProducts.map((product, i) => {
                  const tags: string[] = [];
                  let src = undefined;
                  product.criteres.map((critere) => {
                    critere.id === 1900421 ? (src = critere.valeur) : null;
                  });

                  return (
                    <AgendaCard
                      key={product.id}
                      title={product.nom}
                      date={[product.date_debut, product.date_fin]}
                      period={[
                        product.horaires[0].heures[0].heure_debut,
                        product.horaires[0].heures[0].heure_fin,
                      ]}
                      href={
                        "https://www.haguenau.fr/fr/calendrier-des-evenements/" +
                        product.id
                      }
                      place={product.coordonnees.libelle_commune}
                      src={src}
                    />
                  );
                })
              ) : (
                <Spinner />
              )}
            </Grid>
          </Section>
          <Section>
            <H2>À venir</H2>
            <Grid cols="1" size="sm">
              {comingProducts ? (
                comingProducts.map((product, i) => {
                  const tags: string[] = [];
                  let src = undefined;
                  product.criteres.map((critere) => {
                    critere.id === 1900421 ? (src = critere.valeur) : null;
                  });

                  return (
                    <AgendaCard
                      key={product.id}
                      title={product.nom}
                      date={[product.date_debut, product.date_fin]}
                      period={[
                        product.horaires[0].heures[0].heure_debut,
                        product.horaires[0].heures[0].heure_fin,
                      ]}
                      href={
                        "https://www.haguenau.fr/fr/calendrier-des-evenements/" +
                        product.id
                      }
                      place={product.coordonnees.libelle_commune}
                      src={src}
                    />
                  );
                })
              ) : (
                <Spinner />
              )}
            </Grid>
          </Section>
        </>
      )}
    </Main>
  );
};

export default Agenda;
