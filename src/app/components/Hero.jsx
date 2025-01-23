"use client";
import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import HomeLeftTab from "./HomeLeftTab";
import Image from "next/image";

const pageDescription =
  "Spécialistes en boite de vitesses automatiques, mécatronique et calculateurs ";

const Hero = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <section className="Hero">
      <Head>
        <title>Spécialiste en boite de vitesse automatique et boite EDC</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <div className="hidden">
        <h1>spécialiste expert boite automatique</h1>
        <h1>boite automatique Renault EDC</h1>
        <h1>mecatronique </h1>
        <h2>boite automatique EDC Captur</h2>
        <h2>boite automatique EDC Clio 4</h2>
        <h2>boite automatique EDC Megane 3</h2>
        <h2>boite automatique EDC Scenic 3</h2>
        <h2>boite automatique EDC Clio RS</h2>
        <h2>Tiguan</h2>
        <h2>Audi</h2>
        <h2>Golf</h2>
        <h2>DSG7</h2>
        <h2>DSG6</h2>
      </div>
      <div className="container mx-auto py-12 ">
        <div className="">
          <div className=" parent-container md:flex gap-5 md:px-0 px-5">
            <div className="md:w-[20%] rounded-md">
              <div className="leftTabHeight rounded-md flex flex-col justify-between">
                <div className="overflow-y-scroll rounded-md">
                  <HomeLeftTab />
                </div>
              </div>
            </div>
            <div className="md:w-[80%] ms-auto relative text-center">
              <video
                preload="metadata"
                autoPlay
                loop
                muted
                className="myVideo rounded-md md:block video-3d"
              >
                <source src="/images/video.webm" type="video/webm" />
              </video>
              <div className="absolute top-0 w-full h-full  z-50 bg-[#00000091] rounded-md">
                <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-50">
                  <div className="">
                    <h2 className="text-[35px] text-white hidden md:block font-semibold">
                      Spécialiste Boite Auto
                    </h2>
                  </div>
                  <div className="w-[340px]  mx-auto my-[40px]">
                    <Slider {...settings}>
                      <div className="border rounded-md border-[#fff] hover:bg-white/20">
                        <Link
                          href="/prestations/diagnostic"
                          className="hover:text-blue-700"
                        >
                          <h3 className="heroTitle hover:text-white/90">
                            Diagnostic{" "}
                          </h3>
                        </Link>
                      </div>

                      <div className="border rounded-md border-[#fff] hover:bg-white/20">
                        <Link href="/prestations/vidange">
                          <h3 className="heroTitle hover:text-white/90">
                            Vidange
                          </h3>
                        </Link>
                      </div>

                      <div className="border rounded-md border-[#fff] hover:bg-white/20">
                        <Link href="/pieces/calculateurs">
                          <h3 className="heroTitle hover:text-white/90">
                            Calculateurs
                          </h3>
                        </Link>
                      </div>
                      <div className="border rounded-md border-[#fff] hover:bg-white/20">
                        <Link href="/prestations/reparation">
                          <h3 className="heroTitle hover:text-white/90">
                            Réparation
                          </h3>
                        </Link>
                      </div>
                    </Slider>
                  </div>
                  <div className="flex justify-center gap-3">
                    <Link href="/tarif">
                      <button className="px-[55px] text-[15px] py-2 border border-[#b4343b] bg-[#b4343b]   text-white hover:bg-[#fff] hover:border-[#fff] hover:text-[#b4343b] hover:border rounded-md hidden md:block mx-auto mt-5">
                        Tarif
                      </button>
                    </Link>
                    <Link href="/prestations/diagnostic">
                      <button className="px-[30px] text-[15px] py-2 border bg-[#2C80EF] border-[#2C80EF]   text-white hover:bg-[#fff] hover:text-[#2C80EF] hover:border-[#fff] hover:border rounded-md hidden md:block mx-auto mt-5">
                        Diagnostic
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-32 md:mb-0">
            <Link href="/ressources/aide-en-ligne">
              <button className="px-5 text-[15px] py-2 border border-[#2C80EF] bg-[#fff]  text-[#2C80EF] hover:bg-[#2C80EF]  hover:text-white hover:border rounded-md block sm:hidden mx-auto mt-5">
                Aide en ligne
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
