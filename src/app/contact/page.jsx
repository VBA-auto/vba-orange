"use client";

import { useState } from "react";
import Head from "next/head";

import Breadcrumb from "../components/BreadCumb";
import Link from "next/link";
const pageDescription =
  "Contactez nous ici pour prendre rdv en ligne et pour réaliser un diagnostic ou une vidange de votre boite de vitesse";
export default function Contact() {
  const [isError, setIsError] = useState(false);
  const [isOk, setIsOk] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    immatriculation: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();

    try {
      const response = await fetch("/api/contactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsOk(true);
      } else {
        const errorMessage = await response.text();
        console.error(`Error: ${response.status} - ${errorMessage}`);
        setIsError(true);
      }
    } catch (error) {
      console.error("Error sending the form:", error);
      setIsError(true);
    }
  };

  return (
    <section className="pb-8 px-5 md:px-0">
      <Head>
        <title>boite automatique contact</title>
        <meta name="description" content={pageDescription} />
        <meta name="title" content="boite automatique contact" />
      </Head>
      <div className="container mx-auto py-12">
        <Breadcrumb />
      </div>

      <div id="main" className="container mx-auto pb-24">
        <div className="flex flexDirection MT5 MB5 flex-col-reverse md:flex-row">
          <div className="md:w-1/2 md:mt-0 mt-12 ">
            <p className="mb-5 font-semibold">Information</p>
            <div className="">
              <p>VBA</p>
              <p className="my-1">11 rue denis papin</p>
              <p>77680 ROISSY EN BRIE</p>
              <Link
                href="callto:0756896197"
                className="flex items-center gap-2 text-[15px] text-gray-600 mt-1"
              >
                07 56 89 61 97
              </Link>
              <Link
                href="mailto:contact@laboiteauto.com"
                className="flex items-center gap-2 text-[15px] text-gray-600 mt-1"
              >
                contact@laboiteauto.com
              </Link>

              {/* <p>contact@roissyboiteauto.fr</p> */}
            </div>
          </div>
          <div className="md:w-1/2 mx-auto  rounded ">
            <p className="mb-5 font-semibold">Vous avez une question ?</p>
            <form
              onSubmit={handleSubmit}
              method="post"
              action="/api/contactForm"
            >
              <div className="flex gap-5">
                <input
                  className="w-full px-2 py-3  border bg-white rounded-md"
                  type="text"
                  name="name"
                  placeholder="Nom*"
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full px-2 py-3  border bg-white rounded-md"
                  type="email"
                  name="email"
                  placeholder="Votre adresse email*"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex gap-5 mt-5">
                <input
                  className="w-full px-2 py-3  border bg-white rounded-md"
                  type="tel"
                  placeholder="Votre téléphone*"
                  name="phone"
                  onChange={handleChange}
                />
                <input
                  className="w-full px-2 py-3  border bg-white rounded-md"
                  type="text"
                  name="immatriculation"
                  placeholder="Immatriculation*"
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                className="w-full p-2 mt-5 border bg-white rounded-md"
                placeholder="Votre message"
                rows="4"
                name="message"
                onChange={handleChange}
                required
              ></textarea>

              <p className="text-red-500">
                {isError ? "Erreur lors de l'envoi du formulaire" : ""}
              </p>
              <p className="text-green-500">
                {isOk ? "Formulaire envoyé avec succès" : ""}
              </p>

              <div className=" mt-4">
                <button
                  className="px-11 text-[15px] py-2 border border-[#2C80EF]  text-[#2C80EF] hover:bg-[#2C80EF] hover:text-white hover:border rounded-md"
                  type="submit"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
