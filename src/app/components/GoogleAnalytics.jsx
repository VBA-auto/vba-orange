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
import Script from "next/script";

const GoogleAnalytics = () => (
  <>
    {/* Google Tag Manager (HEAD section) */}
    <Script
      id="gtm-head"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PVCWMCFC');`,
      }}
    />

    {/* Google Tag Manager (BODY section) */}
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PVCWMCFC"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  </>
);

export default GoogleAnalytics;
