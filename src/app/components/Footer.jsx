import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)] bottom-0 w-full]">
      <div className="">
        <div className="container mx-auto max-w-screen ">
          <div className="relative">
            <div className="">
              <div className=" p-3">
                <div className="md:flex justify-between gap-1">
                  <div className="w-full md:text-start text-center">
                    <p className="text-[14px] text-gray-700">VBA</p>

                    <p className="text-[14px] my-[5px] text-gray-700">
                      11 rue denis papin
                    </p>

                    <p className="text-[14px] text-gray-700">
                      77680 ROISSY EN BRIE
                    </p>
                  </div>
                  <div className="w-full my-5 md:my-0">
                    <div className="text-[15px] footnav">
                      <Link
                        href="callto:0145147254"
                        className=" navLinksFooter md:text-[14px] text-[14px] text-gray-700"
                      >
                        01 45 14 72 54
                      </Link>
                      <Link
                        className="navLinksFooter py-[5px] text-gray-700"
                        href="#"
                      >
                        contact@laboiteauto.com
                      </Link>
                      <div className="flex justify-center items-center gap-5 mt-1">
                        <Link
                          href="https://www.linkedin.com/company/vba-calculateur/"
                          target="_blank"
                          className="text-gray-700"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedinIn size={16} />
                        </Link>
                        <Link
                          href="https://www.facebook.com/profile.php?id=61554187663999"
                          target="_blank"
                          className="text-gray-700"
                          rel="noopener noreferrer"
                        >
                          <FaFacebookF size={16} />
                        </Link>
                        <Link
                          href="https://www.instagram.com/vbacalculateur/"
                          target="_blank"
                          className="text-gray-700"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram size={16} />
                        </Link>
                        <Link
                          href="https://www.pinterest.fr/vbacalculateur/"
                          target="_blank"
                          className="text-gray-700"
                          rel="noopener noreferrer"
                        >
                          <FaPinterest size={16} />
                        </Link>
                        <Link
                          href="https://www.tiktok.com/@vbacalculateur"
                          target="_blank"
                          className="text-gray-700"
                          rel="noopener noreferrer"
                        >
                          <FaTiktok size={16} />
                        </Link>
                        <Link
                          href="https://twitter.com/vbacalculateur"
                          target="_blank"
                          className="text-gray-700"
                          rel="noopener noreferrer"
                        >
                          <FaXTwitter size={16} />
                        </Link>
                        <Link
                          href="https://www.youtube.com/channel/UCdW6FARqs2Sv6rzeBidaQsw"
                          target="_blank"
                          className="text-gray-700"
                          rel="noopener noreferrer"
                        >
                          <FaYoutube size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mt-6 md:mt-0">
                    <div className="">
                      <div className="text-gray-700 md:text-end text-center  text-[14px] ">
                        <Link className=" " href="">
                          © 2024 All Rights Reserved
                        </Link>
                      </div>
                      <div className="text-gray-700 md:text-end text-center  my-[5px] ">
                        <Link
                          className="text-[14px]"
                          href="https://clickandtrust.fr/"
                          target="_blank"
                        >
                          Développé par Click & Trust
                        </Link>
                      </div>
                      <div className="text-gray-700 md:text-end text-center  text-[14px]">
                        <Link className="" href="/mention-legales">
                          Mention Légales
                        </Link>
                        <span> - </span>
                        <Link className="" href="/cookies">
                          Cookies
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
