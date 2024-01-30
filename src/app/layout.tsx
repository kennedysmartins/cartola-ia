import type { Metadata } from "next"
import { ThemeProvider } from "@/contexts/ThemeProvider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cartola IA",
  description: "As melhores análises do Cartola",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
