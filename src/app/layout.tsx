// import { Metadata } from "next";
// import Script from "next/script";

// // Metadados estáticos
// export const metadata: Metadata = {
//   title: "Taisson Oliveira - Desenvolvedor Web",
//   description: "Criando meu portfólio | WebDeveloper | FrontEnd",
//   alternates: {
//     canonical: "https://taissonso.github.io/portfolio/",
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="pt-BR">
//       <body>
//         {/* Google Analytics Scripts */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-B254J6KLR1"
//           strategy="afterInteractive"
//         />
//         <Script
//           id="google-analytics"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-B254J6KLR1');
//             `,
//           }}
//         />
//         {children}
//       </body>
//     </html>
//   );
// }


import Header from "@/components/header/header";
import { Metadata } from "next";
import Script from "next/script";

// Metadados estáticos
export const metadata: Metadata = {
  title: "Taisson Oliveira - Desenvolvedor Web",
  description: "Criando meu portfólio | WebDeveloper | FrontEnd",
  alternates: {
    canonical: "https://taissonso.github.io/portfolio/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
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
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
