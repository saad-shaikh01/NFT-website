import "@/styles/globals.css";
import { cn, generateMetadata } from "@/functions";
import { inter, satoshi } from "@/constants";
import { ThemeProvider } from "@/components/global/theme-provider";


export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen dark:bg-background dark:text-foreground antialiased font-sans overflow-x-hidden !scrollbar-hide max-w-[1920px] mx-auto",
          // inter.variable,
          // satoshi.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
         
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
