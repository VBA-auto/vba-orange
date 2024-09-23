"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Page = () => {
  const [parts, setparts] = useState([]);
  const [selectedMeca, setSelectedMeca] = useState(null);

  useEffect(() => {
    fetch("/pieceMeca.json")
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
        <img
          className="w-full md:h-screen videoOverlay relative"
          src="/images/macreto.jpeg"
          alt=""
        />
        <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
          Mecatroniques
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
                <img
                  src={part.image}
                  alt={part.title}
                  className="rounded-md w-full"
                />
                <h2 className="text-lg font-semibold mt-2">{part.title}</h2>
                <p className="text-gray-600 mt-1">{part.paragraph}</p>
                <p className="text-[#f1b04e] font-semibold my-3">
                  Price : {part.price}
                </p>

                <button
                  onClick={() => {
                    setSelectedMeca(part);
                    document.getElementById("my_modal_3").showModal();
                  }}
                  className="bg-[#f1b04e]  text-white py-2.5 px-5 rounded-md hover:bg-[#f1b04ea6] hover:text-white"
                >
                  Commander
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box bg-white">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    {selectedMeca && (
                      <>
                        <h3 className="font-bold text-lg">
                          {selectedMeca.title}
                        </h3>
                        <img
                          src={selectedMeca.image}
                          alt={selectedMeca.title}
                          className="rounded-md w-full  mx-auto"
                        />
                        <p className="py-4 text-justify">
                          {selectedMeca.description}
                        </p>
                        <div className="text-center">
                          <Link href={part.orderLink}>
                            <button className="bg-[#f1b04e]  text-white py-2.5 px-5 rounded-md hover:bg-[#f1b04ea6] hover:text-white">
                              Nous contacter
                            </button>
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </dialog>
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
