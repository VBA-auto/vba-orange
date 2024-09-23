// navbar items

"use Client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";

const NavbarItems = ({ item, setOpenMegaMenu }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const pathname = usePathname();

  const handleMouseEnter = (event) => {
    if (item.children) {
      event.preventDefault(); // Prevent the page from scrolling to the top
      setOpen(true);
      setOpenMegaMenu(item.children || null);
    }
  };

  const handleClickOutside = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      event.clientY > 300
    ) {
      setOpen(false);
      setOpenMegaMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMegaMenu(null);
  }, [pathname, setOpenMegaMenu]);

  return (
    <li ref={ref} className="relative group" onClick={handleMouseEnter}>
      <Link href={item.href || "#"} passHref>
        <button
          className="text-gray-700 text-[15px] hover:text-blue-600 flex items-center"
          onClick={(e) => {
            if (item.children) {
              e.preventDefault();
            }
          }}
        >
          {item.label}
          {item.children && (
            <span className="ml-2">
              <FaAngleDown />
            </span>
          )}
          {/* {item.children && <span className="ml-2">&#9662;</span>} */}
        </button>
      </Link>
    </li>
  );
};

export default NavbarItems;
