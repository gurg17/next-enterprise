import { type ReactNode } from "react"
import { ThemeProvider } from "@/providers/theme-provider"
import "./globals.css"

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className="scrollbar-thin scrollbar-thumb-[#7c7c7c54] scrollbar-track-transparent mr-[calc(-1*(100vw-100%))] h-full overflow-x-hidden"
      >
        <head />
        <body className="mr-[calc(-1*(100vw-100%))]">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
