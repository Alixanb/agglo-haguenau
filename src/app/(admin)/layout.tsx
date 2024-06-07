"use client";

import AuthForm from "@/components/admin/AuthForm";
import { DotLoader } from "@/components/core/Loader";
import { checkPasswordValidity } from "@/lib/auth";
import { LayoutParams } from "@/types/next";
import { useEffect, useState } from "react";

const LayoutPage = (props: LayoutParams<{}>) => {
  const [password, setPassword] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const handleAuthSubmit = async (pass: string) => {
    if (await checkPasswordValidity(pass)) {
      setPassword(pass);
      localStorage.setItem("adminPassword", pass);
    } else {
      alert("Mot de passe incorrect, merci de réessayer.");
    }
  };

  const [returnObject, setReturnObject] = useState<React.ReactNode>(
    <AuthForm onSubmit={handleAuthSubmit} />
  );

  useEffect(() => {
    const getLocalPasswordValidity = async () => {
      const storedPassword = localStorage.getItem("adminPassword");

      if (!storedPassword) {
        setLoading(false);
        return;
      }

      if (await checkPasswordValidity(storedPassword)) {
        setPassword(storedPassword);
      }
      setLoading(false);
    };

    const getReturnObject = async () => {
      if (await checkPasswordValidity(password)) {
        setReturnObject(<>{props.children}</>);
        return;
      }
    };

    getLocalPasswordValidity();
    getReturnObject();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center flex-col items-center">
        <DotLoader />
      </div>
    );
  }

  return <>{returnObject}</>;
};

export default LayoutPage;
