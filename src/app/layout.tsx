import Wrapper from "@/components/base/Wrapper";
import type { Metadata } from "next";
import "@css";

export const metadata: Metadata = {
  title: "Agglomération de Haguenau",
  description: "Application WEB de la Communuaté d'Agglomération de Haguenau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Wrapper>{children}</Wrapper>;
}
