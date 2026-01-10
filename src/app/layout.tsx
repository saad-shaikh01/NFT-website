import "@/styles/globals.css";
import { cn, generateMetadata } from "@/functions";
import { inter, satoshi } from "@/constants"; // Keeping existing constants imports but not using them if they conflict
import { ThemeProvider } from "@/components/global/theme-provider";
import "@fontsource/readex-pro";

// We can define the font variable for Tailwind if needed, but since we imported @fontsource/readex-pro and set it in tailwind config, it should work.
// However, to be safe and follow Next.js font optimization if possible, we could use next/font/google.
// But for now, let's stick to the plan and just ensure globals.css is loaded.

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
          "min-h-screen bg-background text-foreground antialiased font-body overflow-x-hidden !scrollbar-hide max-w-[1920px] mx-auto",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
