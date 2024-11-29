"use client";
import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Google Tag Manager (section HEAD)
    const headScript = document.createElement("script");
    headScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PVCWMCFC');`;

    // Google Tag Manager (section BODY)
    const bodyIframe = document.createElement("noscript");
    bodyIframe.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PVCWMCFC"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

    // Append scripts to the head and body
    document.head.appendChild(headScript);
    document.body.appendChild(bodyIframe);

    return () => {
      // Clean up on unmount
      document.head.removeChild(headScript);
      document.body.removeChild(bodyIframe);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
