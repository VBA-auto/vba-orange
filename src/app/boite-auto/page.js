"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Breadcrumb from "../components/BreadCumb";

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

  return (
    <section className="">
      <Head>
        <title>Automatic Transformation</title>
        {/* <meta name="description" content={pageDescription} /> */}
      </Head>
      <div className="container mx-auto py-12">
        <Breadcrumb />
      </div>
      <div id="main" className="container mx-auto">
        <div className=" pb-16">
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
                <p className="text-gray-600 mt-1">{part.excerpt}</p>
                <p className="text-[#f1b04e] font-semibold my-3">
                  Price : {part.price} €
                </p>

                <button
                  onClick={() => {
                    setSelectedPart(part);
                    document.getElementById("my_modal_3").showModal();
                  }}
                  className="px-5 text-[15px] py-2 border border-[#f0b04fbe]  text-[#f0b04f] hover:bg-[#f0b04f] hover:text-white hover:border rounded-md"
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
            <h2 className="text-md text-gray-700 font-[500] mt-2">
              {selectedPart.title}
            </h2>
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
              Price : {selectedPart.price} €
            </p>
            <div className="text-center">
              <Link href="/">
                <button className="px-5 text-[15px] py-2 border border-[#f0b04fbe]  text-[#f0b04f] hover:bg-[#f0b04f] hover:text-white hover:border rounded-md">
                  Commander
                </button>
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default Page;
