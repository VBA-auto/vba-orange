"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Page = () => {
  const [parts, setparts] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null);

  useEffect(() => {
    fetch("/parts.json")
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
          className="w-full md:h-screen videoOverlay1 relative"
          src="/images/boite.jpeg"
          alt=""
        />
        <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
          Boite automatiques
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
                <Image
                  width={400}
                  height={400}
                  src={part.image}
                  alt={part.title}
                  className="rounded-md w-full"
                />
                <h2 className="text-lg font-semibold mt-2">{part.title}</h2>
                <p className="text-gray-600 mt-1">{part.excerpt}</p>
                <p className="text-[#f1b04e] font-semibold my-3">
                  Price : {part.price}
                </p>

                <button
                  onClick={() => {
                    setSelectedPart(part);
                    document.getElementById("my_modal_3").showModal();
                  }}
                  className="bg-[#f1b04e]  text-white py-2.5 px-5 rounded-md hover:bg-[#f1b04ea6] hover:text-white"
                >
                  Commander
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedPart && (
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-white">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h2 className="text-lg font-semibold mt-2">{selectedPart.title}</h2>
            <div className="">
              <Image
                width={400}
                height={400}
                src={selectedPart.image}
                alt={selectedPart.title}
                className="rounded-md w-full"
              />
            </div>
            <p className="pt-4 text-justify">{selectedPart.paragraph}</p>
            <p className=" my-2 font-medium">
              Lubrification : {selectedPart.lubrification}
            </p>
            <p className="text-[#f1b04e] font-semibold my-3">
              Price : {selectedPart.price}
            </p>
            <div className="text-center">
              <Link href="/">
                <button className="bg-[#f1b04e]  text-white py-2.5 px-5 rounded-md hover:bg-[#f1b04ea6] hover:text-white">
                  Commander
                </button>
              </Link>
            </div>
          </div>
        </dialog>
      )}
      <Footer />
    </section>
  );
};

export default Page;
