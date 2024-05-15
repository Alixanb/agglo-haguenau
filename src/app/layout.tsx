import Providers from "@/components/core/Providers";
import { cn } from "@/lib/utils";
import "@css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Agglomération de Haguenau",
  description: "Application WEB de la Communuaté d'Agglomération de Haguenau",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(inter.className, "bg-background")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
