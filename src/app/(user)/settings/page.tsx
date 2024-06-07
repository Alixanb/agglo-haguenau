"use client";

import NewsLetter from "@/components/features/newsletter/NewsLetter";
import { BasicHeader, Main, SubSection } from "@/components/layout/";
import { ThemeSelect } from "@/components/theme/ThemeSelect";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { SettingsIcon, Shield, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Settings = () => {
  const router = useRouter();

  const deleteCacheDate = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Main active="settings">
      <BasicHeader>
        <LeadingButton accent="slate" size="fit">
          <SettingsIcon />
        </LeadingButton>
        Paramètres
      </BasicHeader>
      <SubSection>
        <ThemeSelect />
        <Link href="/dashboard">
          <LeadingButton accent="purple" src="/dashboard">
            <Shield />
            Espace administrateur
          </LeadingButton>
        </Link>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <LeadingButton accent="red">
              <Trash2 />
              Supprimer mes données
            </LeadingButton>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Supprimer mes données en cache ?
              </AlertDialogTitle>{" "}
              <AlertDialogDescription>
                Etes vous sur de vouloir supprimer vos données mise en cache ?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Annuler</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  deleteCacheDate();
                }}
              >
                Confirmer
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SubSection>
      <NewsLetter />
    </Main>
  );
};

export default Settings;
