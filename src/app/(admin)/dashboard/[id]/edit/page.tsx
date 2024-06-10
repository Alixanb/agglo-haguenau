import BreadcrumbFactory from "@/components/core/BreadcrumbFactory";
import { Spinner } from "@/components/core/Loader";
import { Main, Section } from "@/components/layout";
import { H1 } from "@/components/typos";
import { Button } from "@/components/ui/button";
import { truncate } from "@/lib/utils";
import { Eye } from "lucide-react";
import Link from "next/link";
import NotificationForm from "../../NotificationForm";
import { getUniqueNotificationOrThrow } from "../../notification.action";
("@/components/layout");

const RootPage = async ({ params }: { params: { id: string } }) => {
  const notification = await getUniqueNotificationOrThrow(params.id);

  const breadcrumbItems = [
    { label: "Dashboard", link: "/dashboard" },
    {
      label: truncate(notification.title, 13),
      link: `/dashboard/${notification.id}`,
    },
    { label: "Modifier" },
  ];

  return (
    <Main>
      <Section>
        <BreadcrumbFactory items={breadcrumbItems} />
        <H1>Modifier l&apos;alerte &quot;{notification.title}&quot;</H1>
        <Link href={`/dashboard/${notification.id}`}>
          <Button variant="outline" className="flex gap-2">
            <Eye className="size-4" />
            Visualiser l&apos;alerte
          </Button>
        </Link>
      </Section>
      {notification ? (
        <NotificationForm defaultValues={notification} />
      ) : (
        <span className="my-32">
          <Spinner />
        </span>
      )}
    </Main>
  );
};

export default RootPage;
