"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Page = () => {
  const [parts, setparts] = useState([]);

  useEffect(() => {
    fetch("/article.json")
      .then((res) => res.json())
      .then((data) => {
        setparts(data);
      });
  }, []);

  useEffect(() => {
    const scrollToMain = () => {
      const mainSection = document.getElementById("main");
      if (mainSection) {
        mainSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const scrollTimeout = setTimeout(scrollToMain, 1000);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <section className="">
      <Head>
        <title>Automatic Transformation</title>
        {/* <meta name="description" content={pageDescription} /> */}
      </Head>
      {/* <div className="">
        <div className="absolute w-full  mx-auto min-h-screen  bg-black inset-0 backdrop-filter backdrop-blur-xs  bg-opacity-25"></div>
      </div> */}

      <div className="relative mx-auto">
        <Image
          width={400}
          height={400}
          className="w-full md:h-screen videoOverlay relative"
          src="/images/carBlog.jpg"
          alt=""
        />
        <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
          Articles
        </h1>
      </div>
      <div id="main" className="container mx-auto">
        <div className=" py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {parts?.map((part, index) => (
              <div
                key={index}
                className="border p-4 rounded-md bg-white shadow-md"
              >
                <Link href={`/articles/${part.title}`}>
                  <Image
                    width={400}
                    height={400}
                    src={part.image}
                    alt={part.title}
                    className="rounded-md w-full mb-5"
                  />
                </Link>
                <h2 className="text-lg  mt-2 text-gray-700 capitalize font-medium">
                  {part.title}
                </h2>
                <p>{part.excerpt}...</p>

                <Link href={`/articles/${part.title}`}>
                  <button className="font-medium">Lire plus</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Page;
