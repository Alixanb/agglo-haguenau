"use client";

import AuthForm from "@/components/admin/AuthForm";
import { DotLoader } from "@/components/core/Loader";
import { checkPasswordValidity, getHashFromString } from "@/lib/auth";
import { LayoutParams } from "@/types/next";
import { useEffect, useState } from "react";

const checkRawPassword = async (password: string) => {
  return await checkPasswordValidity(await getHashFromString(password));
};

const LayoutPage = (props: LayoutParams<{}>) => {
  const [password, setPassword] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const handleAuthSubmit = async (submittedPassword: string) => {
    if (await checkRawPassword(submittedPassword)) {
      setPassword(await getHashFromString(submittedPassword));

      localStorage.setItem(
        "credentials_hash",
        await getHashFromString(submittedPassword)
      );
    } else {
      alert("Mot de passe incorrect, merci de réessayer.");
    }
  };

  const [returnObject, setReturnObject] = useState<React.ReactNode>(
    <AuthForm onSubmit={handleAuthSubmit} />
  );

  useEffect(() => {
    const getLocalPasswordValidity = async () => {
      const storedPassword = localStorage.getItem("credentials_hash");

      if (!storedPassword) {
        setLoading(false);
        return;
      }

      if (await checkPasswordValidity(storedPassword)) {
        setPassword(storedPassword);
      } else {
        alert(
          "Mot de passe enregistré en cache incorrecte, merci de réessayer."
        );
      }
      setLoading(false);
    };

    const getReturnObject = async () => {
      if (!password) {
        return;
      }

      if (await checkPasswordValidity(password)) {
        setReturnObject(<>{props.children}</>);
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
