// 'use client';

// import React, { useState, useEffect } from 'react';

// export default function FontLoader() {
//   const [fontPath, setFontPath] = useState('');
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     // Esperar até que o componente seja montado para detecção precisa
//     setMounted(true);

//     // Detecção específica para GitHub Pages
//     const isGitHubPages =
//       window.location.hostname.includes('github.io');

//     // Definir caminho base correto
//     const basePath = isGitHubPages ? '/portfolio' : '';
//     setFontPath(basePath);

//     console.log('Font path detection:', {
//       hostname: window.location.hostname,
//       isGitHubPages,
//       basePath
//     });
//   }, []);

//   // Se não estiver montado, não renderize nada para evitar problemas de hidratação
//   if (!mounted) return null;

//   return (
//     <style jsx global>{`
//       @font-face {
//         font-family: "Manrope";
//         src: url("${fontPath}/fonts/Manrope/Manrope-Regular.woff2") format("woff2");
//         font-weight: normal;
//         font-style: normal;
//         font-display: swap;
//       }
      
//       @font-face {
//         font-family: "Manrope";
//         src: url("${fontPath}/fonts/Manrope/Manrope-Bold.woff2") format("woff2");
//         font-weight: bold;
//         font-style: normal;
//         font-display: swap;
//       }
      
//       @font-face {
//         font-family: "Manrope";
//         src: url("${fontPath}/fonts/Manrope/Manrope-ExtraLight.woff2") format("woff2");
//         font-weight: 200;
//         font-style: normal;
//         font-display: swap;
//       }
      
//       @font-face {
//         font-family: "Manrope";
//         src: url("${fontPath}/fonts/Manrope/Manrope-ExtraBold.woff2") format("woff2");
//         font-weight: 800;
//         font-style: normal;
//         font-display: swap;
//       }
      
//       @font-face {
//         font-family: "Manrope";
//         src: url("${fontPath}/fonts/Manrope/Manrope-Light.woff2") format("woff2");
//         font-weight: 300;
//         font-style: normal;
//         font-display: swap;
//       }
      
//       @font-face {
//         font-family: "Manrope";
//         src: url("${fontPath}/fonts/Manrope/Manrope-SemiBold.woff2") format("woff2");
//         font-weight: 600;
//         font-style: normal;
//         font-display: swap;
//       }
      
//       @font-face {
//         font-family: "Manrope";
//         src: url("${fontPath}/fonts/Manrope/Manrope-Medium.woff2") format("woff2");
//         font-weight: 500;
//         font-style: normal;
//         font-display: swap;
//       }
      
//       :root {
//         --font-primary: 'Manrope', sans-serif;
//       }
      
//       .font-manrope {
//         font-family: var(--font-primary);
//       }
//     `}</style>
//   );
// }