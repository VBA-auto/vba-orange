"use client";
import Breadcrumb from "@/app/components/BreadCumb";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const pageDescription =
  "Nous avons en stock des poètes de vitesse automatique d'occasion et reconditionné en échange standard";
const Page = () => {
  const [parts, setParts] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null);

  useEffect(() => {
    fetch("/parts.json")
      .then((res) => res.json())
      .then((data) => {
        setParts(data);
      });
  }, []);

  const openModal = (part) => {
    setSelectedPart(part);
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <section className="px-5 md:px-0">
      <Head>
        <title>vente boite automatique occasion et reconditionnées</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="title"
          content="vente boite automatique occasion et reconditionnées"
        />
      </Head>
      <div className="hidden">
        <h1>boite automatique occasion </h1>
        <h1>boite automatique occasion Renault</h1>
      </div>
      <div className="container mx-auto py-12">
        <Breadcrumb />
      </div>
      <div id="main" className="container mx-auto">
        <div className="pb-16">
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
                  unoptimized
                />
                <h2 className="text-md text-gray-700 font-[500] mt-2">
                  {part.title}
                </h2>
                <p className="text-gray-600 mt-1">{part.excerpt}</p>
                <p className="text-[#2C80EF] font-[400] my-3">
                  Prix: {part.price} €
                </p>
                <button
                  onClick={() => openModal(part)}
                  className="px-6 text-[15px] py-2 border border-[#2C80EF]  text-[#2C80EF] hover:bg-[#2C80EF] hover:text-white hover:border rounded-md"
                >
                  en rupture
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Always include the dialog in the DOM */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {selectedPart && (
            <>
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
                  unoptimized
                />
              </div>
              <p className="pt-4 text-justify">{selectedPart.paragraph}</p>
              <p className="my-2 font-[400]">
                Lubrification: {selectedPart.lubrification}
              </p>
              {/* <p className="text-[#2C80EF] font-[400] my-3">
                Prix: {selectedPart.price} €
              </p> */}
              <p className="text-[#2C80EF] font-[400] my-3">
                En rupture de stock. <br />
                <Link href="/contact" className="underline">
                  Nous contacter
                </Link>{" "}
                pour plus d&apos;informations.{" "}
              </p>
              {/* <div className="text-center">
                <Link href="/">
                  <button className="px-5 text-[15px] py-2 border border-[#2C80EF] text-[#2C80EF] hover:bg-[#2C80EF] hover:text-white hover:border rounded-md">
                    Commander
                  </button>
                </Link>
              </div> */}
            </>
          )}
        </div>
      </dialog>
    </section>
  );
};

export default Page;
