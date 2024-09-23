"use client";
import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import Link from "next/link";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const videoElement = videoRef.current;
      const rect = videoElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        videoElement.classList.add("video-default");
        videoElement.classList.remove("video-3d");
      } else {
        videoElement.classList.add("video-3d");
        videoElement.classList.remove("video-default");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const autoScrollToVideo = () => {
      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const timer = setTimeout(autoScrollToVideo, 1000);

    return () => clearTimeout(timer);
  }, []);

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

      <div className="container mx-auto py-16 text-center">
        <div className="">
          {/* <div className="bg-black absolute  text-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-50"> */}
          <div className="">
            <div className="">
              <div className="">
                <h1 className="text-2xl text-gray-700 font-semibold mb-2 ">
                  VBA Heading Title
                </h1>
              </div>
              <div className="w-[300px] mx-auto my-5">
                <Slider {...settings}>
                  <div className="">
                    <h3 className="heroTitle">Diagnostic </h3>
                  </div>

                  <div>
                    <h3 className="heroTitle">Vidange</h3>
                  </div>

                  <div>
                    <h3 className="heroTitle">Réparation</h3>
                  </div>
                </Slider>
              </div>
              <div className="mb-8 w-1/2 mx-auto">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore
                </p>
                <div className="">
                  <Link href="aide-en-ligne">
                    <button className="px-5 text-[15px] py-2 border border-[#3775cd]  text-[#3775cd] hover:bg-[#3775cd] hover:text-white hover:border rounded-md hidden md:block mx-auto mt-5">
                      Aide en ligne
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="w-3/4 mx-auto">
              <video
                ref={videoRef}
                preload="metadata"
                autoPlay
                loop
                muted
                className="myVideo rounded-md hidden md:block video-3d"
              >
                <source src="/images/video.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
