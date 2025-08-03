import Link from "next/link";
import React from "react";

const ContactButton = () => {
  return (
    <div className="">
      <Link href="/contact">
        <button className="px-2.5 text-[15px] py-2 border border-[#2C80EF]  text-[#2C80EF] hover:bg-[#2C80EF] hover:text-white hover:border rounded-md">
          Contactez-nous
        </button>
      </Link>
    </div>
  );
};

export default ContactButton;
