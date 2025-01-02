// "use client";
// import { useEffect } from "react";

// const GoogleAnalytics = () => {
//   useEffect(() => {

//     const headScript = document.createElement("script");
//     headScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//     })(window,document,'script','dataLayer','GTM-PVCWMCFC');`;

//     const bodyIframe = document.createElement("noscript");
//     bodyIframe.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PVCWMCFC"
//       height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

//     document.head.appendChild(headScript);
//     document.body.appendChild(bodyIframe);

//     return () => {

//       document.head.removeChild(headScript);
//       document.body.removeChild(bodyIframe);
//     };
//   }, []);

//   return null;
// };

// export default GoogleAnalytics;
"use client";
import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Add GTM Script to Head
    const headScript = document.createElement("script");
    headScript.type = "text/javascript";
    headScript.async = true;
    headScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PVCWMCFC');
    `;

    // Add GTM Iframe to Body
    const bodyIframe = document.createElement("noscript");
    bodyIframe.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PVCWMCFC"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;

    // Append Scripts
    document.head.appendChild(headScript);
    document.body.insertAdjacentHTML("afterbegin", bodyIframe.outerHTML);

    return () => {
      // Clean up Scripts
      document.head.removeChild(headScript);
      const iframe = document.body.querySelector(
        'iframe[src*="googletagmanager.com/ns.html"]'
      );
      if (iframe) iframe.remove();
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
