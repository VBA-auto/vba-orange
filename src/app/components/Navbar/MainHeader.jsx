// Main header for layout
"use client";

import { useState } from "react";
import Image from "next/image";
import NavbarItems from "./NavbarItems";
import MegaMenu from "./MegaMenu";
import Link from "next/link";

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(null);

  const navItems = [
    { label: "Accueil", href: "/" },
    {
      label: "Prestations",
      children: [
        {
          label: "Diagnostic",
          image: "/images/diagnostic.jpeg",
          href: "/diagnostic",
        },
        {
          label: "Réparation BVA",
          image: "/images/repa.webp",
          href: "/reparation",
        },
        { label: "Vidange BVA", image: "/images/vid.webp", href: "/vidange" },
        { label: "Montage BVA", image: "/images/mont.webp", href: "/montage" },
        {
          label: "Mécatronique",
          image: "/images/meca.webp",
          href: "/mecatronique",
        },
      ],
    },
    {
      label: "Pièces",
      children: [
        {
          label: "Boite automatiques",
          image: "/images/boite.jpeg",
          href: "/boite-auto",
        },
        {
          label: "Calculateurs",
          image: "/images/calculators.png",
          href: "/calculateurs",
        },
        {
          label: "Mécatroniques",
          image: "/images/macreto.jpeg",
          href: "/pieces-mecatroniques",
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
          href: "/articles",
        },
        {
          label: "Faq",
          image: "/images/faq.png",
          href: "/faq",
        },
        {
          label: "Type de BVA",
          image: "/images/aideEn.webp",
          href: "/check-bva",
        },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="container mx-auto">
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-2">
          <div className="md:w-1/4 text-lg font-bold">
            <Link href="/">
              <Image
                width={80}
                height={80}
                src="/images/logo.webp"
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
            <button className="px-5 text-[15px] py-2 border border-[#f0b04fbe]  text-[#f0b04f] hover:bg-[#f0b04f] hover:text-white hover:border rounded-md hidden md:block">
              Type de BVA
            </button>

            <button
              className="md:hidden px-5 py-2 bg-[#f0b04f] text-white"
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
                <button className="w-full text-[15px] px-5 py-2 border border-[#f0b04fbe]  text-[#f0b04f] hover:bg-[#f0b04f] hover:text-white hover:border rounded-md">
                  Type de BVA
                </button>
              </li>
              <li>
                <button className="w-full text-[15px] px-5 py-2 border border-[#3775cd]  text-[#3775cd] hover:bg-[#3775cd] hover:text-white hover:border rounded-md">
                  Aide en ligne
                </button>
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
