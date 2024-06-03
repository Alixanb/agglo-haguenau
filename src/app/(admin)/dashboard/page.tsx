"use client";

import AuthForm from "@/components/admin/AuthForm";
import { Main } from "@/components/layout";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllNotificationAction } from "./notification.action";

const RootPage = () => {
  const [password, setPassword] = useState("");
  const [notifications, setNotificiations] =
    useState<Prisma.PromiseReturnType<typeof getAllNotificationAction>>();
  const router = useRouter();

  const handleAuthSubmit = (pass: string) => {
    if (pass === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      setPassword(pass);
    } else {
      alert("Mot de passe incorrect, merci de réessayer");
    }
  };

  useEffect(() => {
    if (!password) {
      return;
    }

    const fetchNotifications = async () => {
      setNotificiations(await getAllNotificationAction());
    };

    fetchNotifications();
  }, [password]);

  if (password !== process.env.NEXT_PUBLIC_ADMIN_PASS && false) {
    return <AuthForm onSubmit={handleAuthSubmit} />;
  }

  return <Main>Secure Content Here</Main>;
};

export default RootPage;
