"use client";
import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

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
        <title>Automatic Transformation</title>
        {/* <meta name="description" content={pageDescription} /> */}
      </Head>

      <div className="container mx-auto py-12 text-center">
        <div className="">
          {/* <div className="bg-black absolute  text-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-50"> */}

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
                          href="/diagnostic"
                          className="hover:text-blue-700"
                        >
                          <h3 className="heroTitle hover:text-white/90">
                            Diagnostic{" "}
                          </h3>
                        </Link>
                      </div>

                      <div>
                        <Link href="/vidange">
                          <h3 className="heroTitle hover:text-white/90">
                            Vidange
                          </h3>
                        </Link>
                      </div>

                      <div>
                        <Link href="/reparation">
                          <h3 className="heroTitle hover:text-white/90">
                            Réparation
                          </h3>
                        </Link>
                      </div>
                      <div>
                        <Link href="/mecatronique">
                          <h3 className="heroTitle hover:text-white/90">
                            Mécatronique
                          </h3>
                        </Link>
                      </div>
                      <div>
                        <Link href="/montage">
                          <h3 className="heroTitle hover:text-white/90">
                            Montage
                          </h3>
                        </Link>
                      </div>
                    </Slider>
                  </div>
                  <div className="">
                    <Link href="/aide-en-ligne">
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
            <Link href="/aide-en-ligne">
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
