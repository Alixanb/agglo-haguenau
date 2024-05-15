import { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "../theme/ThemeProvider";
import ThemeWrapper from "../theme/ThemeWrapper";

const Providers = (props: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      <ThemeWrapper>{props.children}</ThemeWrapper>
    </ThemeProvider>
  );
};

export default Providers;
