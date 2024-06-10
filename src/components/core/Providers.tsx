import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import ThemeWrapper from "../theme/ThemeWrapper";
import { Toaster } from "../ui/toaster";
import PopupProvider from "./PopupProvider";
import ServiceWorkerProvider from "./ServiceWorkerProvider";

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
      <ServiceWorkerProvider>
        <ThemeWrapper>{props.children}</ThemeWrapper>
      </ServiceWorkerProvider>
    </ThemeProvider>
  );
};

export default Providers;
