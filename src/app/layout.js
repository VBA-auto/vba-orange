import "./globals.css";
import Header from "./components/Header";
import HeaderTest from "./components/Headertest";
import MainHeader from "./components/Navbar/MainHeader";
import SubHeader from "./components/SubHeader";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

{
  /* <link rel="icon" href="/favicon.ico" sizes="any" />; */
}

export const metadata = {
  title: "VBA - Laboiteauto",
  description: "VBA - Laboiteauto",
  icons: {
    // icon: "/fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {/* <Header /> */}
        {/* <HeaderTest /> */}
        <SubHeader />
        <MainHeader />
        {children}
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
