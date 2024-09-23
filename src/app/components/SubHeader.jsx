import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const SubHeader = () => {
  return (
    <div>
      <section className="py-2 border-b">
        <div className="container mx-auto md:px-2 px-4">
          <div className="flex justify-between">
            <div className="">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#F0B04F]" />
                <Link
                  href="mailto:contact@laboiteauto.com"
                  className="md:text-[15px] text-[11px] text-gray-700"
                >
                  contact@laboiteauto.com
                </Link>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#F0B04F]" />
                <Link
                  href="callto:0145147254"
                  className="md:text-[15px] text-[11px] text-gray-700"
                >
                  01 45 14 72 54
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubHeader;
