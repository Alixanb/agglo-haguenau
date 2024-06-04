import "@css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agglomération de Haguenau",
  description: "Application WEB de la Communuaté d'Agglomération de Haguenau",
};

const ThemeWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div>{children}</div>;
};

export default ThemeWrapper;
