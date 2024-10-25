import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Taisson Oliveira - Desenvolvedor Web",
  description: "Criando meu portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
