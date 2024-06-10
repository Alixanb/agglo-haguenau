"use client";

import BreadcrumbFactory from "@/components/core/BreadcrumbFactory";
import { Main, Section } from "@/components/layout";
import { H1 } from "@/components/typos";
import NotificationForm from "../NotificationForm";

const RootPage = () => {
  const breadcrumbItems = [
    { label: "Dashboard", link: "/dashboard" },
    {
      label: "Nouvelle alerte",
    },
  ];

  return (
    <Main>
      <Section>
        <BreadcrumbFactory items={breadcrumbItems} />
        <H1>Créer une notification</H1>
      </Section>
      <NotificationForm />
    </Main>
  );
};

export default RootPage;
