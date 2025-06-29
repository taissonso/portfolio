'use client';

import React, { useState, useEffect } from 'react';

export default function FontLoader() {
  // Estado inicial para evitar erros de hidratação
  const [fontPaths, setFontPaths] = useState({
    base: '',
    isGitHub: false,
    detection: 'initial' // estado de detecção para debug
  });

  // Detectar ambiente após montagem do componente
  useEffect(() => {
    // Verificações múltiplas para maior confiabilidade
    const isGitHubPages =
      window.location.hostname.includes('github.io') ||
      window.location.hostname.includes('taissonso.github.io') ||
      window.location.href.includes('taissonso.github.io/portfolio');

    const basePath = isGitHubPages ? '/portfolio' : '';

    console.log('Environment detection:', {
      hostname: window.location.hostname,
      url: window.location.href,
      isGitHubPages,
      basePath
    });

    setFontPaths({
      base: basePath,
      isGitHub: isGitHubPages,
      detection: 'completed'
    });
  }, []);

  return (
    <style jsx global>{`
      /* Debug info em comentário para referência */
      /* Environment: ${fontPaths.detection}, isGitHub: ${fontPaths.isGitHub}, basePath: ${fontPaths.base} */
      
      @font-face {
        font-family: "Manrope";
        src: url("${fontPaths.base}/fonts/Manrope/Manrope-Regular.woff2") format("woff2"),
             /* Fallbacks para garantir compatibilidade */
             url("/fonts/Manrope/Manrope-Regular.woff2") format("woff2"),
             url("/portfolio/fonts/Manrope/Manrope-Regular.woff2") format("woff2");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Manrope";
        src: url("${fontPaths.base}/fonts/Manrope/Manrope-Bold.woff2") format("woff2"),
             url("/fonts/Manrope/Manrope-Bold.woff2") format("woff2"),
             url("/portfolio/fonts/Manrope/Manrope-Bold.woff2") format("woff2");
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Manrope";
        src: url("${fontPaths.base}/fonts/Manrope/Manrope-ExtraLight.woff2") format("woff2"),
             url("/fonts/Manrope/Manrope-ExtraLight.woff2") format("woff2"),
             url("/portfolio/fonts/Manrope/Manrope-ExtraLight.woff2") format("woff2");
        font-weight: 200;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Manrope";
        src: url("${fontPaths.base}/fonts/Manrope/Manrope-ExtraBold.woff2") format("woff2"),
             url("/fonts/Manrope/Manrope-ExtraBold.woff2") format("woff2"),
             url("/portfolio/fonts/Manrope/Manrope-ExtraBold.woff2") format("woff2");
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Manrope";
        src: url("${fontPaths.base}/fonts/Manrope/Manrope-Light.woff2") format("woff2"),
             url("/fonts/Manrope/Manrope-Light.woff2") format("woff2"),
             url("/portfolio/fonts/Manrope/Manrope-Light.woff2") format("woff2");
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Manrope";
        src: url("${fontPaths.base}/fonts/Manrope/Manrope-SemiBold.woff2") format("woff2"),
             url("/fonts/Manrope/Manrope-SemiBold.woff2") format("woff2"),
             url("/portfolio/fonts/Manrope/Manrope-SemiBold.woff2") format("woff2");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Manrope";
        src: url("${fontPaths.base}/fonts/Manrope/Manrope-Medium.woff2") format("woff2"),
             url("/fonts/Manrope/Manrope-Medium.woff2") format("woff2"),
             url("/portfolio/fonts/Manrope/Manrope-Medium.woff2") format("woff2");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
      
      :root {
        --font-primary: 'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
      
      .font-manrope {
        font-family: var(--font-primary);
      }
    `}</style>
  );
}