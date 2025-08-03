"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import logo from "https://res.cloudinary.com/ddf0yuahe/image/upload/v1746259848/logo_mzvqmf.png";
// import logo from "../../../public/images/logo.webp";
import DiagnosticImage from "../../../public/images/diagnostic.jpeg";
import BoiteImage from "../../../public/images/boite.jpeg";
import CalculatorsImage from "../../../public/images/calculators.png";
import MacretoImage from "../../../public/images/macreto.jpeg";
import RenaultImage from "../../../public/images/renault.png";
import FAQImage from "../../../public/images/faq.png";
import CookiesImage from "../../../public/images/cookies.png";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [prestationDropdown, setPrestationDropdown] = useState(false);
  const [piecesDropdown, setPiecesDropdown] = useState(false);
  const [resourcesDrop, setResourcesDrop] = useState(false);

  const prestationDropdownRef = useRef(null);
  const piecesDropdownRef = useRef(null);
  const resourcesDropRef = useRef(null);

  const handleNavbarToggle = () => {
    setNavbar(!navbar);
  };

  const handlePrestationMouseEnter = () => {
    setPrestationDropdown(true);
    // Close the pieces dropdown if it's open
    setPiecesDropdown(false);
    setResourcesDrop(false);
    const headMain = document.getElementById("headMain") || null;
    headMain.style.transition = "background-color 0.1s ease-in-out";
    headMain.style.backgroundColor = "white";
    const elements = document.getElementsByClassName("navBarItems") || null;
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = "black";
    }
  };

  const handleDefault = () => {
    setPiecesDropdown(false);
    setPrestationDropdown(false);
    setResourcesDrop(false);
  };

  const handlePiecesMouseEnter = () => {
    setPiecesDropdown(true);
    // Close the prestations dropdown if it's open
    setPrestationDropdown(false);
    setResourcesDrop(false);
    const headMain = document.getElementById("headMain") || null;
    headMain.style.transition = "background-color 0.1s ease-in-out";
    headMain.style.backgroundColor = "white";
    const elements = document.getElementsByClassName("navBarItems") || null;
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = "black";
    }
  };

  const handleResoucesMouseEnter = () => {
    setResourcesDrop(true);
    setPiecesDropdown(false);
    setPrestationDropdown(false);
    const headMain = document.getElementById("headMain") || null;
    headMain.style.transition = "background-color 0.1s ease-in-out";
    headMain.style.backgroundColor = "white";
    const elements = document.getElementsByClassName("navBarItems") || null;
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = "black";
    }
  };

  const handleMouseLeave = () => {
    setPrestationDropdown(false);
    setPiecesDropdown(false);
    setResourcesDrop(false);
    document.getElementById("headMain").style.backgroundColor = "transparent";
    const elements = document.getElementsByClassName("navBarItems");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = "white";
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleMouseLeave);

    const handleMouseMove = (event) => {
      if (event.clientY > 300) {
        setPrestationDropdown(false);
        setPiecesDropdown(false);
        setResourcesDrop(false);
        document.getElementById("headMain").style.backgroundColor =
          "transparent";
        const elements = document.getElementsByClassName("navBarItems");
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.color = "white";
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("click", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const closeNavbar = () => {
    setNavbar(false);
    setPrestationDropdown(false);
    setPiecesDropdown(false);
    setResourcesDrop(false);
  };

  return (
    <section>
      <section
        id="headMain"
        className={`absolute  w-full z-50  headerSection ${
          navbar && "h-screen"
        }`}
      >
        <div className="headMainDiv">
          <div className="">
            <div className="">
              <div className="container max-w-screen mx-auto ">
                <nav className="px-3 py-1">
                  <div className="flex  items-center justify-between mx-auto py-3 headerMainCont">
                    <div className="w-1/5">
                      <Link href="/" className="">
                        <div className="w-[290px]">
                          <Image width={50} height={50} src={logo} alt="Logo" />
                        </div>
                      </Link>
                    </div>

                    <button
                      data-collapse-toggle="navbar-default"
                      type="button"
                      className="inline-flex items-center bg-[#9fc6e7] p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#9fc6e7] hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-[#9fc6e7]dark:focus:ring-gray-600"
                      aria-controls="navbar-default"
                      aria-expanded="false"
                      onClick={handleNavbarToggle}
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                      </svg>
                    </button>

                    <div
                      className={`w-1/2 md:w-auto md:block hide  ${
                        navbar ? "block" : "hidden"
                      } `}
                      id="navbar-default"
                    >
                      <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <Link
                          onMouseEnter={handleDefault}
                          onClick={closeNavbar}
                          href="/"
                          className="block py-2 pl-3 pr-4 text-white  md:p-0 navBarItems"
                        >
                          Accueil
                        </Link>

                        <div
                          onMouseEnter={handlePrestationMouseEnter}
                          ref={prestationDropdownRef}
                          className="relative group"
                        >
                          <button
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                            className="subMenuHeader block py-2 pl-3 pr-4 text-white  md:p-0 navBarItems"
                          >
                            <Link href="#" className="navBarItems">
                              Prestations{" "}
                            </Link>
                            <span
                              style={{
                                display: "inline-block",
                                marginLeft: "3px",
                              }}
                            >
                              <FaAngleDown />
                            </span>
                          </button>
                        </div>

                        <div
                          onMouseEnter={handlePiecesMouseEnter}
                          ref={piecesDropdownRef}
                          className="relative group"
                        >
                          <button
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                            className="subMenuHeader block py-2 pl-3 pr-4 text-white  md:p-0 navBarItems"
                          >
                            <Link href="#" className="navBarItems">
                              Pièces{" "}
                            </Link>
                            <span
                              style={{
                                display: "inline-block",
                                marginLeft: "3px",
                              }}
                            >
                              <FaAngleDown />
                            </span>
                          </button>
                        </div>
                        <Link
                          onMouseEnter={handleDefault}
                          onClick={closeNavbar}
                          href="/tarif"
                          className="block py-2 pl-3 pr-4 text-white  md:p-0 navBarItems"
                        >
                          Tarif
                        </Link>
                        <div
                          onMouseEnter={handleResoucesMouseEnter}
                          ref={resourcesDropRef}
                          className="relative group"
                        >
                          <button
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                            className="subMenuHeader block py-2 pl-3 pr-4 text-white  md:p-0 navBarItems"
                          >
                            <Link href="#" className="navBarItems">
                              Resources
                            </Link>
                            <span
                              style={{
                                display: "inline-block",
                                marginLeft: "3px",
                              }}
                            >
                              <FaAngleDown />
                            </span>
                          </button>
                        </div>

                        <Link
                          onMouseEnter={handleDefault}
                          onClick={closeNavbar}
                          href="/contact"
                          className="block py-2 pl-3 pr-4 text-white  md:p-0 navBarItems"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>

                    <div className="w-1/4  flex justify-end gap-5 hide">
                      <div className="headButton">
                        <Link href="/type-de-bva">
                          <button className="bg-[#F1B04E]  text-white py-[9px] px-[20px] rounded-md hover:bg-[#f1b04eda] hover:text-white text-[15px]">
                            Type de BVA
                          </button>
                        </Link>
                      </div>
                      <div className="headButton">
                        <Link href="/aide-en-ligne">
                          <button className="bg-[#c33e1d]  text-white py-[9px] px-[20px] text-[15px] rounded-md hover:bg-[#c33e1de5] hover:text-white">
                            Aide En Ligne
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="hidecomp">
                    <div
                      className={`w-1/2 md:w-auto md:block   ${
                        navbar ? "block" : "hidden"
                      } `}
                      id="navbar-default"
                    >
                      <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <Link
                          onMouseEnter={handleDefault}
                          onClick={closeNavbar}
                          href="/"
                          className="block py-2 pl-3 pr-4 text-white  md:p-0 navBarItems"
                        >
                          Accueil
                        </Link>

                        <div
                          onMouseEnter={handlePrestationMouseEnter}
                          ref={prestationDropdownRef}
                          className="relative group"
                        >
                          <button
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                            className="subMenuHeader block py-2 pl-3 pr-4 text-white  md:p-0 navBarItems"
                          >
                            <Link href="#" className="navBarItems">
                              Prestations{" "}
                            </Link>
                            <span
                              style={{
                                display: "inline-block",
                                marginLeft: "3px",
                              }}
                            >
                              <FaAngleDown />
                            </span>
                          </button>
                        </div>

                        <div
                          onMouseEnter={handlePiecesMouseEnter}
                          ref={piecesDropdownRef}
                          className="relative group"
                        >
                          <button
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                            className="subMenuHeader block py-2 pl-3 pr-4 text-white  md:p-0 navBarItems"
                          >
                            <Link href="#" className="navBarItems">
                              Pièces{" "}
                            </Link>
                            <span
                              style={{
                                display: "inline-block",
                                marginLeft: "3px",
                              }}
                            >
                              <FaAngleDown />
                            </span>
                          </button>
                        </div>
                        <Link
                          onMouseEnter={handleDefault}
                          onClick={closeNavbar}
                          href="/tarif"
                          className="block py-2 pl-3 pr-4 text-white  md:p-0 navBarItems"
                        >
                          Tarif
                        </Link>
                        <div
                          onMouseEnter={handleResoucesMouseEnter}
                          ref={resourcesDropRef}
                          className="relative group"
                        >
                          <button
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                            className="subMenuHeader block py-2 pl-3 pr-4 text-white  md:p-0 navBarItems"
                          >
                            <Link href="#" className="navBarItems">
                              Resources
                            </Link>
                            <span
                              style={{
                                display: "inline-block",
                                marginLeft: "3px",
                              }}
                            >
                              <FaAngleDown />
                            </span>
                          </button>
                        </div>

                        <Link
                          onMouseEnter={handleDefault}
                          onClick={closeNavbar}
                          href="/contact"
                          className="block py-2 pl-3 pr-4 text-white  md:p-0 navBarItems"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {/* ================================== */}
          {/* ================================== */}
          <div className=" mx-auto">
            <div className="container mx-auto ">
              {prestationDropdown && (
                <div
                  className="navSubParent w-full mx-auto  z-40 "
                  data-aos="fade-in"
                >
                  <div className="subHeadList">
                    <Link
                      onClick={closeNavbar}
                      href="/diagnostic"
                      className="subHeadList1 block py-2 ashColor"
                    >
                      <Image
                        src={DiagnosticImage}
                        width={250}
                        height={400}
                        alt=""
                        className="navSingItem"
                      />
                      <span className="mainTextOverlay"> Diagnostic</span>
                    </Link>
                  </div>

                  <div className="subHeadList">
                    <Link
                      onClick={closeNavbar}
                      href="/reparation"
                      className="subHeadList1 block ashColor  py-2  "
                    >
                      <video
                        width={250}
                        height={80}
                        className="navSingItem"
                        src="/images/video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                      ></video>
                      <span className="mainTextOverlay"> Réparation BVA</span>
                    </Link>
                  </div>
                  <div className="subHeadList">
                    <Link
                      onClick={closeNavbar}
                      href="/vidange"
                      className="subHeadList1 block  py-2 ashColor "
                    >
                      <video
                        width={250}
                        height={80}
                        className="navSingItem"
                        src="/images/vidange.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                      ></video>
                      <span className="mainTextOverlay"> Vidange BVA</span>
                    </Link>
                  </div>
                  <div className="subHeadList">
                    <Link
                      onClick={closeNavbar}
                      href="/montage"
                      className="subHeadList1 block  py-2 ashColor"
                    >
                      <video
                        width={250}
                        height={80}
                        className="navSingItem"
                        src="/images/montage.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                      ></video>
                      <span className="mainTextOverlay">Montage BVA</span>
                    </Link>
                  </div>
                  <div className="subHeadList">
                    <Link
                      onClick={closeNavbar}
                      href="/mecatronique"
                      className="subHeadList1 block  py-2 ashColor "
                    >
                      <video
                        width={250}
                        height={80}
                        className="navSingItem"
                        src="/images/meca.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                      ></video>
                      <span className="mainTextOverlay">Mécatronique</span>
                    </Link>
                  </div>
                </div>
              )}

              {/* ===================================== */}
              {piecesDropdown && (
                <div
                  className="navSubParent w-full mx-auto  bg-white  z-40 "
                  data-aos="fade-in"
                >
                  <div className="subHeadList">
                    <Link
                      onClick={closeNavbar}
                      href="/boite-auto"
                      className="subHeadList1 block py-2 ashColor"
                    >
                      <Image
                        src={BoiteImage}
                        width={250}
                        height={80}
                        alt=""
                        className="navSingItem singleImages"
                      />
                      <span className="mainTextOverlay">
                        {" "}
                        Boite automatiques
                      </span>
                    </Link>
                  </div>
                  <div className="subHeadList">
                    <Link
                      onClick={closeNavbar}
                      href="/calculateurs"
                      className="subHeadList1 block py-2 ashColor"
                    >
                      <Image
                        src={CalculatorsImage}
                        width={250}
                        height={100}
                        alt=""
                        className="navSingItem singleImages"
                      />
                      <span className="mainTextOverlay">Calculateurs</span>
                    </Link>
                  </div>
                  <div className="subHeadList">
                    <Link
                      onClick={closeNavbar}
                      href="/pieces-mecatroniques"
                      className="subHeadList1 block py-2 ashColor"
                    >
                      <Image
                        src={MacretoImage}
                        width={250}
                        height={100}
                        alt=""
                        className="navSingItem singleImages"
                      />
                      <span className="mainTextOverlay">Mécatroniques</span>
                    </Link>
                  </div>
                </div>
              )}
              {/* ===================================== */}
              {resourcesDrop && (
                <div className="navSubParent w-full mx-auto  bg-white  z-40">
                  <div className="subHeadList">
                    <Link
                      onClick={closeNavbar}
                      href="/articles"
                      className="subHeadList1 block py-2 ashColor"
                    >
                      <Image
                        src={RenaultImage}
                        width={250}
                        height={80}
                        alt=""
                        className="navSingItem singleImages"
                      />
                      <span className="mainTextOverlay">Articles</span>
                    </Link>
                  </div>

                  <div className="subHeadList">
                    <Link
                      onClick={closeNavbar}
                      href="/faq"
                      className="subHeadList1 block py-2 ashColor"
                    >
                      <Image
                        src={FAQImage}
                        width={250}
                        height={80}
                        alt=""
                        className="navSingItem singleImages"
                      />
                      <span className="mainTextOverlay">Faq</span>
                    </Link>
                  </div>
                  <div className="subHeadList">
                    <Link
                      onClick={closeNavbar}
                      href="/type-de-bva"
                      className="subHeadList1 block py-2 ashColor"
                    >
                      <Image
                        src={CookiesImage}
                        width={250}
                        height={80}
                        alt=""
                        className="navSingItem singleImages"
                      />
                      <span className="mainTextOverlay">Type de BVA</span>
                    </Link>
                  </div>
                  <div className="subHeadList">
                    <Link
                      onClick={closeNavbar}
                      href="/aide-en-ligne"
                      className="subHeadList1 block py-2 ashColor"
                    >
                      <video
                        width={250}
                        height={80}
                        className="navSingItem"
                        src="/images/aide.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                      ></video>
                      <span className="mainTextOverlay">Aide en ligne</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
