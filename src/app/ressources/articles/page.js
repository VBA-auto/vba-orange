"use client";
import Breadcrumb from "@/app/components/BreadCumb";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const pageDescription =
  "Vous trouverez sur le blog avec tous les articles par véhicule sur le thème des boites automatiques, quelle boite équipe quel véhicule";
const Page = () => {
  const [parts, setparts] = useState([]);

  useEffect(() => {
    fetch("/article.json")
      .then((res) => res.json())
      .then((data) => {
        setparts(data);
      });
  }, []);

  return (
    <section className="px-5 md:px-0">
      <Head>
        <title>boite automatique blog</title>
        <meta name="title" content="boite automatique blog" />
        <meta name="description" content={pageDescription} />
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
                <Link href={`/ressources/articles/${part.title}`}>
                  <Image
                    width={400}
                    height={400}
                    src={part.image}
                    alt={part.title}
                    className="rounded-md w-full mb-5"
                    unoptimized
                  />
                </Link>
                <Link href={`/ressources/articles/${part.title}`}>
                  {" "}
                  <h2 className="text-lg  mt-2 text-gray-700 capitalize font-medium">
                    {part.title}
                  </h2>
                </Link>
                <p>{part.excerpt}...</p>

                <Link href={`/ressources/articles/${part.title}`}>
                  <button className="text-[14px] text-[#2C80EF]">
                    Lire plus...
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
