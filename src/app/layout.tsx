import Header from "@/components/header";
import { Metadata } from "next";
import Script from "next/script";
import FontLoader from "@/components/FontLoader";
import '../styles/globals.css';
import '../styles/colors.css';
import '../styles/fonts.css';

// Detecção de ambiente para caminhos base
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

// Metadados estáticos
export const metadata: Metadata = {
  title: "Taisson Oliveira - Desenvolvedor Web",
  description: "Criando meu portfólio | WebDeveloper | FrontEnd",
  alternates: {
    canonical: "https://taissonso.github.io/portfolio/",
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico` },
      { url: `${basePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${basePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: `${basePath}/apple-touch-icon.png` },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <FontLoader />
      </head>
      <body className="bg-primary-light dark:bg-primary-dark font-manrope">
        {/* Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B254J6KLR1"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B254J6KLR1');
            `,
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
