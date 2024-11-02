"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Breadcrumb from "../components/BreadCumb";

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

  return (
    <section className="">
      <Head>
        <title>Automatic Transformation</title>
        {/* <meta name="description" content={pageDescription} /> */}
      </Head>
      {/* <div className="">
        <div className="absolute w-full  mx-auto min-h-screen  bg-black inset-0 backdrop-filter backdrop-blur-xs  bg-opacity-25"></div>
      </div> */}
      <div className="container mx-auto py-12">
        <Breadcrumb />
      </div>
      <div id="main" className="container mx-auto">
        <div className=" pb-24">
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
                <h2 className="text-md text-gray-700 font-[500] mt-2">
                  {part.title}
                </h2>
                <p className="text-gray-600 mt-1">{part.paragraph}</p>
                <p className="text-[#2C80EF] font-semibold my-3">
                  Price : {part.price} €
                </p>

                <button
                  onClick={() => {
                    setSelectedMeca(part);
                    document.getElementById("my_modal_3").showModal();
                  }}
                  className="px-5 text-[15px] py-2 border border-[#2C80EF]  text-[#2C80EF] hover:bg-[#2C80EF] hover:text-white hover:border rounded-md"
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
                        <h3 className="text-md text-gray-700 font-[500] mt-2">
                          {selectedMeca.title}
                        </h3>
                        <Image
                          width={400}
                          height={400}
                          src={selectedMeca.image}
                          alt={selectedMeca.title}
                          className="rounded-md w-full  mx-auto"
                        />
                        <p className="py-4 text-justify">
                          {selectedMeca.description}
                        </p>
                        <div className="text-center">
                          <Link href={part.orderLink}>
                            <button className="px-5 text-[15px] py-2 border border-[#2C80EF]  text-[#2C80EF] hover:bg-[#2C80EF] hover:text-white hover:border rounded-md">
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
    </section>
  );
};

export default Page;
