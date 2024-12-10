"use client";
import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

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
      <div className="container mx-auto py-12 text-center">
        <div className="">
          <div className=" ">
            <div className="w-3/4 mx-auto relative">
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
                  <div className="w-[300px] mx-auto my-5">
                    <Slider {...settings}>
                      <div className="">
                        <Link
                          href="/prestations/diagnostic"
                          className="hover:text-blue-700"
                        >
                          <h3 className="heroTitle hover:text-white/90">
                            Diagnostic{" "}
                          </h3>
                        </Link>
                      </div>

                      <div>
                        <Link href="/prestations/vidange">
                          <h3 className="heroTitle hover:text-white/90">
                            Vidange
                          </h3>
                        </Link>
                      </div>

                      <div>
                        <Link href="/prestations/reparation">
                          <h3 className="heroTitle hover:text-white/90">
                            Réparation
                          </h3>
                        </Link>
                      </div>
                      <div>
                        <Link href="/prestations/mecatronique">
                          <h3 className="heroTitle hover:text-white/90">
                            Mécatronique
                          </h3>
                        </Link>
                      </div>
                      <div>
                        <Link href="/prestations/montage">
                          <h3 className="heroTitle hover:text-white/90">
                            Montage
                          </h3>
                        </Link>
                      </div>
                    </Slider>
                  </div>
                  <div className="">
                    <Link href="/ressources/aide-en-ligne">
                      <button className="px-5 text-[15px] py-2 border border-white bg-[#fff]  text-[#2C80EF] hover:bg-[#2C80EF] hover:text-white hover:border rounded-md hidden md:block mx-auto mt-5">
                        Aide en ligne
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-32 md:mb-0">
            <Link href="/ressources/aide-en-ligne">
              <button className="px-5 text-[15px] py-2 border border-[#2C80EF] bg-[#fff]  text-[#2C80EF] hover:bg-[#2C80EF] hover:text-white hover:border rounded-md block sm:hidden mx-auto mt-5">
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
