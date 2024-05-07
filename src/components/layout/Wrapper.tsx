import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import ThemeWrapper from "../misc/ThemeWrapper";

// Import des polices des Google Fonts
const inter = Inter({ subsets: ["latin"] });

export default function Wrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="bg-background">
        <ThemeWrapper>
          <div className={cn("m-5 mt-16 mb-8 ", inter.className)}>
            {children}
          </div>
        </ThemeWrapper>
      </body>
    </html>
  );
}
