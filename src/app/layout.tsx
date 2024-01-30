import { inter, lexendDeca } from "@/app/fonts";
import GlobalDrawer from "@/app/shared/drawer-views/container";
import GlobalModal from "@/app/shared/modal-views/container";
import { ThemeProvider } from "@/app/shared/theme-provider";
import { AuthSessionProvider } from "@/lib/Authentication/context/AuthSessionContext";
import AuthRedirection from "@/lib/Authentication/hoc/AuthRedirection";
import { siteConfig } from "@/config/site.config";
import cn from "@/utils/class-names";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/app/shared/react-query-provider";
import "@/app/globals.css";
const NextProgress = dynamic(() => import("@/components/next-progress"), {
  ssr: false,
});


export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  viewport: { width: "device-width", initialScale: 1 },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      // required this one for next-themes, remove it if you are not using next-theme
      suppressHydrationWarning
    >
      <body
        // to prevent any warning that is caused by third party extensions like Grammarly
        suppressHydrationWarning
        className={cn(inter.variable, lexendDeca.variable, "font-inter")}
      >
        <ThemeProvider>
          <ReactQueryProvider>
            <AuthSessionProvider>
              <AuthRedirection>
                <NextProgress />
                {children}
                <Toaster />
                <GlobalDrawer />
                <GlobalModal />
              </AuthRedirection>
            </AuthSessionProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
