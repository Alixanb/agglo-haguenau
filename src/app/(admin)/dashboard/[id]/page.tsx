import BreadcrumbFactory from "@/components/core/BreadcrumbFactory";
import { Main, Section, SubSection } from "@/components/layout";
import { H1, P, Small } from "@/components/typos";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Grid } from "@/components/widgets/Grid";
import { formatDate } from "@/lib/notification/action";
import { truncate } from "@/lib/utils";
import { Edit, Rocket } from "lucide-react";
import Link from "next/link";
import { getUniqueNotificationOrThrow } from "../notification.action";

const RootPage = async ({ params }: { params: { id: string } }) => {
  const notification = await getUniqueNotificationOrThrow(params.id);

  const breadcrumbItems = [
    { label: "Dashboard", link: "/dashboard" },
    {
      label: truncate(notification.title, 21),
    },
  ];

  return (
    <Main>
      <Section>
        <BreadcrumbFactory items={breadcrumbItems} />
        <H1>{notification.title}</H1>
        <Small>Modifié le 12/07/08</Small>
        <Grid cols="2">
          <Button variant="secondary" className="flex gap-2 w-fit">
            <Rocket className="size-4" />
            Simuler l&apos;alerte
          </Button>
          <Link href={`/dashboard/${notification.id}/edit`}>
            <Button variant="outline" className="flex gap-2 w-fit ">
              <Edit className="size-4" />
              Modifier l&apos;alerte
            </Button>
          </Link>
        </Grid>
      </Section>
      <Section>
        <SubSection>
          <Label>Titre</Label>
          <P>{notification.title}</P>
        </SubSection>
        <SubSection>
          <Label>Descirption</Label>
          <P>{notification.text}</P>
        </SubSection>
      </Section>
      <Grid cols="2">
        <SubSection>
          <Label>Date de début</Label>
          <P>{formatDate(notification.dateFrom)}</P>
        </SubSection>
        <SubSection>
          <Label>Date de fin</Label>
          <P>{formatDate(notification.dateTo)}</P>
        </SubSection>
      </Grid>
      <Section>
        <SubSection>
          <Label>Lien</Label>
          <P>{notification.link}</P>
        </SubSection>
        <Grid cols="2">
          <SubSection>
            <Label>Créé le</Label>
            <P>{formatDate(notification.createdAt)}</P>
          </SubSection>
          <SubSection>
            <Label>Modifié le</Label>
            <P>{formatDate(notification.updatedAt)}</P>
          </SubSection>
        </Grid>
      </Section>
    </Main>
  );
};

export default RootPage;
