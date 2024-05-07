import type { Metadata } from "next";
import "@css";
import { Preferences } from "@capacitor/preferences";

export const metadata: Metadata = {
  title: "Agglomération de Haguenau",
  description: "Application WEB de la Communuaté d'Agglomération de Haguenau",
};

const ThemeWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const getTheme = async () => {
    const ret = await Preferences.get({ key: "theme" });
    const theme = JSON.parse(ret.value!);
    console.log("t ouuu", theme);
  };

  if (typeof window !== `undefined` && "Proxy" in window) {
    getTheme();
  }

  return <div>{children}</div>;
};

export default ThemeWrapper;
