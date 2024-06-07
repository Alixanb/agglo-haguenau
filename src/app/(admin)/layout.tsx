"use client";

import AuthForm from "@/components/admin/AuthForm";
import { DotLoader } from "@/components/core/Loader";
import { LayoutParams } from "@/types/next";
import { useEffect, useState } from "react";

const LayoutPage = (props: LayoutParams<{}>) => {
  const [password, setPassword] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

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
    setLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center flex-col items-center">
        <DotLoader />
      </div>
    );
  }

  if (password !== process.env.NEXT_PUBLIC_ADMIN_PASS) {
    return <AuthForm onSubmit={handleAuthSubmit} />;
  }

  return <div>{props.children}</div>;
};

export default LayoutPage;
