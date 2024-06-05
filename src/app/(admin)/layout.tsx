"use client";

import AuthForm from "@/components/admin/AuthForm";
import { LayoutParams } from "@/types/next";
import { useEffect, useState } from "react";

const LayoutPage = (props: LayoutParams<{}>) => {
  const [password, setPassword] = useState<string | null>(null);

  const handleAuthSubmit = (pass: string) => {
    if (pass === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      setPassword(pass);
      localStorage.setItem("adminPassword", pass);
    } else {
      alert("Mot de passe incorrect, merci de réessayer.");
    }
  };

  useEffect(() => {
    const storedPassword = localStorage.getItem("adminPassword");
    if (storedPassword === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      setPassword(storedPassword);
    }
  }, []);

  if (password !== process.env.NEXT_PUBLIC_ADMIN_PASS) {
    return <AuthForm onSubmit={handleAuthSubmit} />;
  }

  return <div>{props.children}</div>;
};

export default LayoutPage;
