'use client';

import React, { useEffect, useState } from 'react';

export default function FontLoader() {
  const [basePath, setBasePath] = useState('');

  useEffect(() => {
    // Detectar ambiente no cliente
    const isGitHubPages = window.location.hostname.includes('github.io');
    setBasePath(isGitHubPages ? '/portfolio' : '');
  }, []);

  return (
    <style jsx global>{`
      @font-face {
        font-family: "Manrope";
        src: url("${basePath}/fonts/Manrope/Manrope-Bold.woff2") format("woff2"),
            url("${basePath}/fonts/Manrope/Manrope-Bold.woff") format("woff");
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Manrope";
        src: url("${basePath}/fonts/Manrope/Manrope-ExtraLight.woff2") format("woff2"),
            url("${basePath}/fonts/Manrope/Manrope-ExtraLight.woff") format("woff");
        font-weight: 200;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Manrope";
        src: url("${basePath}/fonts/Manrope/Manrope-ExtraBold.woff2") format("woff2"),
            url("${basePath}/fonts/Manrope/Manrope-ExtraBold.woff") format("woff");
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Manrope";
        src: url("${basePath}/fonts/Manrope/Manrope-Light.woff2") format("woff2"),
            url("${basePath}/fonts/Manrope/Manrope-Light.woff") format("woff");
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Manrope";
        src: url("${basePath}/fonts/Manrope/Manrope-SemiBold.woff2") format("woff2"),
            url("${basePath}/fonts/Manrope/Manrope-SemiBold.woff") format("woff");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Manrope";
        src: url("${basePath}/fonts/Manrope/Manrope-Regular.woff2") format("woff2"),
            url("${basePath}/fonts/Manrope/Manrope-Regular.woff") format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: "Manrope";
        src: url("${basePath}/fonts/Manrope/Manrope-Medium.woff2") format("woff2"),
            url("${basePath}/fonts/Manrope/Manrope-Medium.woff") format("woff");
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