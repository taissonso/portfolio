import './globals.css';
import { Metadata } from "next";
import Providers from "@/contexts/Providers";
import Footer from "@/components/footer";
import GTMHead from "@/config/tracking/gtm-head";
import GTMBody from "@/config/tracking/gtm-body";



const basePath = '/portfolio';

export const metadata: Metadata = {
  title: "Taisson Oliveira - Desenvolvedor Front-end",
  description: "Web Developer | FrontEnd | Desenvolvedor Front-end | Front-end Developer | React | Next.js | JavaScript | TypeScript | HTML | CSS | UI/UX",
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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
        <GTMHead />
      </head>
      <body className="transition-theme" suppressHydrationWarning>
        <GTMBody />
        <Providers>
          <main >
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
