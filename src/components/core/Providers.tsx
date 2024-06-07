import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import ThemeWrapper from "../theme/ThemeWrapper";
import { Toaster } from "../ui/toaster";
import PopupProvider from "./PopupProvider";

const Providers = (props: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <PopupProvider />
      <Toaster />

      <ThemeWrapper>{props.children}</ThemeWrapper>
    </ThemeProvider>
  );
};

export default Providers;
