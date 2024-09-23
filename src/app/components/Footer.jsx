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

const Footer = () => {
  return (
    <footer className="shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)] bottom-0 w-full ">
      <div className="">
        <div className="container mx-auto max-w-screen ">
          <div className="relative  ">
            <div className="">
              <div className=" p-3">
                <div className="md:flex justify-between gap-1">
                  <div className="w-full text-start">
                    <p className="text-[14px] text-gray-700">RBA</p>

                    <p className="text-[14px] my-[5px] text-gray-700">
                      354 san andress road
                    </p>

                    <p className="text-[14px] text-gray-700">
                      63243 SANTA MONICA
                    </p>
                  </div>
                  <div className="w-full">
                    <div className="text-[14px] footnav">
                      <Link className="navLinksFooter text-gray-700" href="/">
                        04 83 54 24 38
                      </Link>
                      <Link
                        className="navLinksFooter py-[5px] text-gray-700"
                        href="#"
                      >
                        contact@roissyboiteauto.fr
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
                          <FaTwitter size={16} />
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

                  <div className="w-full ">
                    <div className="">
                      <div className="text-gray-700 text-end  text-[14px]">
                        <Link className=" " href="">
                          © 2024 All Rights Reserved
                        </Link>
                      </div>
                      <div className="text-gray-700 text-end my-[5px] ">
                        <Link className="text-[14px]" href="" target="_blank">
                          Développé par Click & Trust
                        </Link>
                      </div>
                      <div className="text-gray-700 text-end text-[14px]">
                        <Link className="" href="/mention-legales">
                          Mention Legales{" - "}
                        </Link>
                        <Link
                          className=""
                          href="https://wa.me/9384923232"
                          target="_blank"
                        >
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
