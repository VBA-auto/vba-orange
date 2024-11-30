import "./globals.css";

import MainHeader from "./components/Navbar/MainHeader";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";

{
  <link rel="icon" href="/favicon.ico" sizes="any" />;
}

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
      <body>
        <SubHeader />
        <MainHeader />
        {children}
        <GoogleAnalytics />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
