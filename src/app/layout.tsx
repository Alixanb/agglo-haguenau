import Providers from "@/components/core/Providers";
import { cn } from "@/lib/utils";
import "@css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Agglomération de Haguenau",
  description: "Application WEB de la Communuaté d'Agglomération de Haguenau",
};

export const viewport: Viewport = {
  themeColor: { color: "black" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(inter.className, "bg-background fill-green-400")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
