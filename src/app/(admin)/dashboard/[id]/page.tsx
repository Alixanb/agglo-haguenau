import BreadcrumbFactory from "@/components/core/BreadcrumbFactory";
import { Main, Section, SubSection } from "@/components/layout";
import { H1, P } from "@/components/typos";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Grid } from "@/components/widgets/Grid";
import { formatDate } from "@/lib/notification/action";
import { truncate } from "@/lib/utils";
import { Edit, Globe, Rocket } from "lucide-react";
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
        <Grid cols="2">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="default" className="flex gap-2 w-full">
                <Rocket className="size-4" />
                Simuler l&apos;alerte
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>{notification.title}</DrawerTitle>
                  <DrawerDescription>{`Du ${formatDate(
                    notification.dateFrom
                  )} au ${formatDate(notification.dateTo)}`}</DrawerDescription>
                </DrawerHeader>
                <P className="grid gap-1.5 p-4 text-center sm:text-left">
                  {notification.text}
                </P>
                <DrawerFooter>
                  <div className="flex flex-col gap-2">
                    <Link href={notification.link}>
                      <Button className="flex gap-2 w-full">
                        Visualiser sur le web
                        <Globe className="size-4 " />
                      </Button>
                    </Link>
                  </div>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>

          <Link href={`/dashboard/${notification.id}/edit`}>
            <Button variant="outline" className="flex gap-2 w-full ">
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
