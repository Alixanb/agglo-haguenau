import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import ThemeWrapper from "../theme/ThemeWrapper";
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
      <Toaster
        toastOptions={{
          className: "bg-card border border-border text-primary fill-green-400",
          style: { marginBottom: "5rem", fill: "green !important" },
          classNames: {
            toast: "bg-blue-400",
            title: "text-primary",
            description: "text-muted-foreground",
          },
        }}
      />
      <ThemeWrapper>{props.children}</ThemeWrapper>
    </ThemeProvider>
  );
};

export default Providers;
