"use client";
import Breadcrumb from "@/app/components/BreadCumb";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const pageDescription =
  "Nous vendons, reconditionnons et réparons les calculateurs de boites automatique EDC Getrag 6DCT250 (DC4) Renault Captur Megane scenic clio 4 ";
const Page = () => {
  const [parts, setparts] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null);

  useEffect(() => {
    fetch("/calculateurs.json")
      .then((res) => res.json())
      .then((data) => {
        setparts(data);
      });
  }, []);

  return (
    <section className="px-5 md:px-0">
      <Head>
        <title>vente calculateur Renault EDC boite automatique</title>
        <meta
          name="title"
          content="vente calculateur Renault EDC boite automatique"
        />
        <meta name="description" content={pageDescription} />
      </Head>
      <div className="hidden">
        <h1>Calculateur boite automatique EDC Renault</h1>
        <h1>Calculateur Volkswagen</h1>
        <h2>Calculateur Renault Scenic</h2>
        <h2>Calculateur Renault Mégane EDC</h2>
        <h2>Calculateur Renault Captur EDC</h2>
        <h2>Calculateur Renault Clio 4 EDC</h2>
        <h2>310321488R </h2>
        <h2>310321517R</h2>
      </div>
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
                  className="rounded-md w-full min-h-[220px] mx-auto"
                  unoptimized
                />
                <h2 className="text-md text-gray-700 font-[500] mt-2">
                  {part.title}
                </h2>
                <p className="text-gray-600 my-3">{part.paragraph}</p>
                <button
                  onClick={() => {
                    setSelectedPart(part);
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
                    {selectedPart && (
                      <>
                        <h3 className="text-md text-gray-700 font-[500] mt-2">
                          {selectedPart.title}
                        </h3>
                        <Image
                          width={400}
                          height={400}
                          src={selectedPart.image}
                          alt={selectedPart.title}
                          className="rounded-md w-full  mx-auto"
                          unoptimized
                        />
                        <p className="py-4 text-justify">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: selectedPart.description,
                            }}
                          />
                        </p>
                        <div className="text-center">
                          <Link href="https://laboiteautomatique.com/contact">
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
