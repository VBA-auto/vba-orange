import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa6";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav aria-label="Breadcrumb" className="sticky top-28 w-full z-50">
      <ol className="flex items-center space-x-0 text-sm">
        <li>
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          return (
            <li key={href} className="flex items-center">
              <span className="text-gray-500 mx-2">
                <FaChevronRight />
              </span>
              {isLast ? (
                <span className="text-[#3775CD] font-semibold capitalize">
                  {segment}
                </span>
              ) : (
                <Link href={href} className="text-gray-500 hover:text-gray-700">
                  {segment}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
