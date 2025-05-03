// Main header for layout
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NavbarItems from "./NavbarItems";
import MegaMenu from "./MegaMenu";
import Link from "next/link";

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(null);
  const mobileMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  // Add and remove event listeners for clicks
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: "Accueil", href: "/" },
    {
      label: "Prestations",
      children: [
        {
          label: "Diagnostic",
          image: "/images/diagnostic.jpeg",
          href: "/prestations/diagnostic",
        },
        {
          label: "Réparation BVA",
          image: "/images/repa.webp",
          href: "/prestations/reparation",
        },
        {
          label: "Vidange BVA",
          image: "/images/vid.webp",
          href: "/prestations/vidange",
        },
        {
          label: "Montage BVA",
          image: "/images/mont.webp",
          href: "/prestations/montage",
        },
        {
          label: "Mécatronique",
          image: "/images/meca.webp",
          href: "/prestations/mecatronique",
        },
      ],
    },
    {
      label: "Pièces",
      children: [
        {
          label: "Boite automatiques",
          image: "/images/boite.jpeg",
          href: "/pieces/boite-auto",
        },
        {
          label: "Calculateurs",
          image: "/images/calculators.png",
          href: "/pieces/calculateurs",
        },
        {
          label: "Mécatroniques",
          image: "/images/macreto.jpeg",
          href: "/pieces/mecatronique",
        },
      ],
    },
    { label: "Tarif", href: "/tarif" },
    {
      label: "Resources",
      children: [
        {
          label: "Articles",
          image: "/images/carBlog.jpg",
          href: "/ressources/articles",
        },
        {
          label: "Faq",
          image: "/images/faq.png",
          href: "/ressources/faq",
        },
        {
          label: "Type de BVA",
          image: "/images/vid1.png",
          href: "/ressources/type-de-bva",
        },
        {
          label: "Aide en ligne",
          image: "/images/aideEn.webp",
          href: "/ressources/aide-en-ligne",
        },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 w-full z-[99999] px-5 md:px-0">
      <div className="container mx-auto">
        <nav
          className=" mx-auto flex items-center justify-between py-2"
          ref={mobileMenuRef}
        >
          <div className="md:w-1/4 text-lg font-bold">
            <Link href="/">
              <Image
                width={80}
                height={80}
                src="https://res.cloudinary.com/ddf0yuahe/image/upload/v1746259961/VBAlogo_frschi.png"
                // src="/images/VBAlogo.webp"
                alt="logo"
              />
            </Link>
          </div>
          <div className="md:w-1/2 flex-1  justify-center hidden md:flex">
            <ul className="flex space-x-5">
              {navItems.map((item, index) => (
                <NavbarItems
                  key={index}
                  item={item}
                  setOpenMegaMenu={setOpenMegaMenu}
                />
              ))}
            </ul>
          </div>
          <div className="md:w-1/4 flex justify-end space-x-2">
            <Link href="/ressources/aide-en-ligne">
              {" "}
              <button className="px-5 text-[15px] py-2.5 border bg-[#b4343b]  text-white hover:bg-[#fff] hover:text-[#2C80EF] hover:border rounded-md hidden md:block">
                Aide en ligne
              </button>
            </Link>
            <Link href="/ressources/type-de-bva">
              {" "}
              <button className="px-[22px] text-[15px] py-2.5 border bg-[#2C80EF]  text-white hover:bg-[#fff] hover:text-[#2C80EF] hover:border rounded-md hidden md:block">
                Type de BVA
              </button>
            </Link>

            <button
              className="md:hidden px-5 py-2 bg-[#2C80EF] text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              &#9776;
            </button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-2 p-4">
              {navItems.map((item, index) => (
                <NavbarItems
                  key={index}
                  item={item}
                  setOpenMegaMenu={setOpenMegaMenu}
                />
              ))}
              <li>
                <Link href="/ressources/type-de-bva">
                  <button className="w-full text-[15px] px-5 py-2 border border-[#f0b04fbe]  text-[#f0b04f] hover:bg-[#f0b04f] hover:text-white hover:border rounded-md">
                    Type de BVA
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/ressources/aide-en-ligne">
                  <button className="w-full text-[15px] px-5 py-2 border border-[#3775cd]  text-[#3775cd] hover:bg-[#3775cd] hover:text-white hover:border rounded-md">
                    Aide en ligne
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
        {openMegaMenu && <MegaMenu childrenItems={openMegaMenu} />}
      </div>
    </header>
  );
};

export default MainHeader;
