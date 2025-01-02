import "./globals.css";

import MainHeader from "./components/Navbar/MainHeader";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Script from "next/script";

export const metadata = {
  title: "VBA - Laboiteauto",
  description: "VBA - Laboiteauto",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

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
      </head>
      <body>
        {/* Google Tag Manager (BODY section) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PVCWMCFC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* SubHeader */}
        <SubHeader />

        {/* MainHeader */}
        <MainHeader />

        {/* Page Content */}
        {children}

        {/* Google Analytics */}
        <GoogleAnalytics />

        {/* Cookie Consent */}
        <CookieConsent />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
