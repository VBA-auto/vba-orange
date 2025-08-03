import Image from "next/image";
import Link from "next/link";
import React from "react";

const MegaMenu = ({ childrenItems }) => {
  return (
    <div className="container">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-14 border md:w-[600px] w-full rounded-md bg-white shadow-md mt-2 p-4 grid md:grid-cols-2 grid-cols-1 gap-4">
        {childrenItems.map((child, index) => (
          <div key={index} className="border border-[#4f93ec86] rounded-md">
            <Link href={child.href || "#"}>
              <div className="flex items-center p-2 hover:bg-gray-100  cursor-pointer">
                {child.image && (
                  <Image
                    width={400}
                    height={300}
                    src={child.image}
                    alt={child.label}
                    className="w-16 h-10 mr-2"
                    unoptimized
                  />
                )}
                <span className="text-gray-700 text-[15px]">{child.label}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
