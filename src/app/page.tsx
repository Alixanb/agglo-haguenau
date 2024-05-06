import Image from "next/image";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import ElemGrid from "@/components/widgets/Grid";
import { H1, H2, H3, P, Small } from "@/components/typos";
import { LeadingButton } from "@/components/ui/LeadingButton";
import { BasicHeader } from "@/components/layout/Header";
import { Article } from "@/components/widgets/Article";
import { Main, Section, SubSection } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import Grid from "@/components/widgets/Grid";
import { Modal } from "@/components/widgets/Popup";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Main className={cn(" ", inter.className)}>
      <Modal
        title="Popup de test"
        period="Du Lundi 06/05 au Mardi 14/05"
        text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        src="https://placehold.co/400x400"
        href="test"
      ></Modal>
      <div className="flex flex-col ">
        <Small className="text-slate-400">Bienvenue, vous ête sur</Small>
        <H1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Agglomération
        </H1>
      </div>
      <Section>
        <H2>Actualités</H2>
        <ElemGrid>
          <Article
            title="Inscription au Rendez-vous de la Jeunesse"
            src="https://placehold.co/400x400"
            tags={["This", "tag"]}
          ></Article>
          <Article
            title="Inscription au Rendez-vous de la Jeunesse"
            src="https://placehold.co/400x400"
            tags={["This", "tag"]}
          ></Article>
          <Article
            title="Inscription au Rendez-vous de la Jeunesse"
            src="https://placehold.co/400x400"
            tags={["This", "tag"]}
          ></Article>
          <Article
            title="Inscription au Rendez-vous de la Jeunesse"
            src="https://placehold.co/400x400"
            tags={["This", "tag"]}
          ></Article>
        </ElemGrid>
        <Button variant={"outline"}>Voir dans l&apos;agenda</Button>
      </Section>
      <Section>
        <SubSection>
          <H2>Les services de l&apos;agglo</H2>
          <LeadingButton size="full" button="red">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M137.02-140q-10.17 0-18.27-4.97t-12.59-13.11q-4.68-8.08-5.15-17.5-.47-9.42 5.08-18.66l342.43-591.52q5.56-9.24 13.9-13.66 8.35-4.42 17.58-4.42 9.23 0 17.58 4.42 8.34 4.42 13.9 13.66l342.43 591.52q5.55 9.24 5.08 18.66-.47 9.42-5.15 17.5-4.49 8.14-12.59 13.11-8.1 4.97-18.27 4.97H137.02ZM178-200h604L480-720 178-200Zm302-47.69q13.73 0 23.02-9.29t9.29-23.02q0-13.73-9.29-23.02T480-312.31q-13.73 0-23.02 9.29T447.69-280q0 13.73 9.29 23.02t23.02 9.29Zm.01-104.62q12.76 0 21.37-8.62 8.62-8.63 8.62-21.38v-140q0-12.75-8.63-21.37-8.63-8.63-21.38-8.63-12.76 0-21.37 8.63-8.62 8.62-8.62 21.37v140q0 12.75 8.63 21.38 8.63 8.62 21.38 8.62ZM480-460Z" />
            </svg>
            Créer un signalement
          </LeadingButton>
        </SubSection>
        <SubSection>
          <H3>Ritmo</H3>
          <Grid>
            <LeadingButton button="orange" size="full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M510-492.15V-650q0-12.75-8.63-21.38-8.63-8.62-21.38-8.62-12.76 0-21.37 8.62Q450-662.75 450-650v167.08q0 7.06 2.62 13.68 2.61 6.62 8.23 12.24l137 137q8.3 8.31 20.88 8.5 12.58.19 21.27-8.5t8.69-21.08q0-12.38-8.69-21.07l-130-130ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100ZM480-480Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
              </svg>
              Horaires
            </LeadingButton>
            <LeadingButton button="orange" size="full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M510-492.15V-650q0-12.75-8.63-21.38-8.63-8.62-21.38-8.62-12.76 0-21.37 8.62Q450-662.75 450-650v167.08q0 7.06 2.62 13.68 2.61 6.62 8.23 12.24l137 137q8.3 8.31 20.88 8.5 12.58.19 21.27-8.5t8.69-21.08q0-12.38-8.69-21.07l-130-130ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100ZM480-480Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
              </svg>
              Plans
            </LeadingButton>
          </Grid>
        </SubSection>
        <SubSection>
          <H3>TILT - Bibliothèques</H3>
          <Grid>
            <LeadingButton button="blue" size="full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M510-492.15V-650q0-12.75-8.63-21.38-8.63-8.62-21.38-8.62-12.76 0-21.37 8.62Q450-662.75 450-650v167.08q0 7.06 2.62 13.68 2.61 6.62 8.23 12.24l137 137q8.3 8.31 20.88 8.5 12.58.19 21.27-8.5t8.69-21.08q0-12.38-8.69-21.07l-130-130ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100ZM480-480Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
              </svg>
              Horaires
            </LeadingButton>
            <LeadingButton button="blue" size="full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M510-492.15V-650q0-12.75-8.63-21.38-8.63-8.62-21.38-8.62-12.76 0-21.37 8.62Q450-662.75 450-650v167.08q0 7.06 2.62 13.68 2.61 6.62 8.23 12.24l137 137q8.3 8.31 20.88 8.5 12.58.19 21.27-8.5t8.69-21.08q0-12.38-8.69-21.07l-130-130ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100ZM480-480Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
              </svg>
              Plans
            </LeadingButton>
          </Grid>
        </SubSection>
        <SubSection>
          <H3>Mes services</H3>
          <Grid>
            <LeadingButton button="slate" size="full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M510-492.15V-650q0-12.75-8.63-21.38-8.63-8.62-21.38-8.62-12.76 0-21.37 8.62Q450-662.75 450-650v167.08q0 7.06 2.62 13.68 2.61 6.62 8.23 12.24l137 137q8.3 8.31 20.88 8.5 12.58.19 21.27-8.5t8.69-21.08q0-12.38-8.69-21.07l-130-130ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100ZM480-480Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
              </svg>
              Commerces
            </LeadingButton>
            <LeadingButton button="slate" size="full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M510-492.15V-650q0-12.75-8.63-21.38-8.63-8.62-21.38-8.62-12.76 0-21.37 8.62Q450-662.75 450-650v167.08q0 7.06 2.62 13.68 2.61 6.62 8.23 12.24l137 137q8.3 8.31 20.88 8.5 12.58.19 21.27-8.5t8.69-21.08q0-12.38-8.69-21.07l-130-130ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100ZM480-480Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
              </svg>
              Cultures
            </LeadingButton>
          </Grid>
        </SubSection>
        <SubSection>
          <H3>Espace Famille</H3>
          <Grid>
            <LeadingButton button="dark" variant="dark" size="full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M510-492.15V-650q0-12.75-8.63-21.38-8.63-8.62-21.38-8.62-12.76 0-21.37 8.62Q450-662.75 450-650v167.08q0 7.06 2.62 13.68 2.61 6.62 8.23 12.24l137 137q8.3 8.31 20.88 8.5 12.58.19 21.27-8.5t8.69-21.08q0-12.38-8.69-21.07l-130-130ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100ZM480-480Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
              </svg>
              Transports
            </LeadingButton>
            <LeadingButton button="dark" variant="dark" size="full" link="out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M510-492.15V-650q0-12.75-8.63-21.38-8.63-8.62-21.38-8.62-12.76 0-21.37 8.62Q450-662.75 450-650v167.08q0 7.06 2.62 13.68 2.61 6.62 8.23 12.24l137 137q8.3 8.31 20.88 8.5 12.58.19 21.27-8.5t8.69-21.08q0-12.38-8.69-21.07l-130-130ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100ZM480-480Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
              </svg>
              Écoles
            </LeadingButton>
          </Grid>
        </SubSection>
      </Section>
    </Main>
  );
}
