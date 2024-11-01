"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Breadcrumb from "../components/BreadCumb";

export default function Contact() {
  const PageDescription = "auto trans";
  const HeadingText = "auto trans";
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

    // try {
    //   const response = await fetch("/api/contactForm", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     setIsOk(true);
    //   } else {
    //     const errorMessage = await response.text();
    //     console.error(`Error: ${response.status} - ${errorMessage}`);
    //     setIsError(true);
    //   }
    // } catch (error) {
    //   console.error("Error sending the form:", error);
    //   setIsError(true);
    // }
  };

  return (
    <section className="pb-8">
      <Head>
        <title>auto trans</title>
        <meta name="description" content={PageDescription} />
        <meta name="headline" content={HeadingText} />
      </Head>
      <div className="container mx-auto py-12">
        <Breadcrumb />
      </div>
      {/* <div className="relative mx-auto">
        <Image
          width={400}
          height={400}
          className="videoOverlay relative"
          src="/images/cookies.png"
          alt=""
        />

        <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
          Contact
        </h1>
      </div> */}

      <div id="main" className="container mx-auto pb-24">
        <div className="md:flex flexDirection MT5 MB5">
          <div className="md:w-1/2">
            <p className="mb-5 font-semibold">Information</p>
            <div className="">
              <p>Adresse</p>
              <p>RBA</p>
              <p>11 rue denis papin</p>
              <p>77680 ROISSY EN BRIE</p>
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
                  className="px-11 text-[15px] py-2 border border-[#f0b04fbe]  text-[#f0b04f] hover:bg-[#f0b04f] hover:text-white hover:border rounded-md"
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
