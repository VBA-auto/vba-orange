"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import mont1 from "../../../public/images/mont1.png";
import mont2 from "../../../public/images/mont2.png";
import Breadcrumb from "../components/BreadCumb";
import ContactButton from "../components/ContactButton";

const Page = () => {
  // useEffect(() => {
  //   const scrollToMain = () => {
  //     const mainSection = document.getElementById("main");
  //     if (mainSection) {
  //       mainSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  //   const scrollTimeout = setTimeout(scrollToMain, 1000);

  //   return () => clearTimeout(scrollTimeout);
  // }, []);
  return (
    <section className="">
      <Head>
        <title>Automatic Transformation</title>
        {/* <meta name="description" content={pageDescription} /> */}
      </Head>
      <div className="container mx-auto py-12">
        <Breadcrumb />
      </div>
      {/* <div className="relative mx-auto">
        <video
          className="md:h-screen w-screen object-cover videoOverlay relative"
          src="/images/montage.mp4"
          autoPlay
          muted
          loop
        ></video>
        <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
          Montage BVA
        </h1>
      </div> */}
      <div id="main" className="container mx-auto">
        <div className="md:flex gap-14">
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Spécificités techniques</h1>
            <p className="text-justify mb-2 paragraph">
              Monter une boîte automatique prend en général 4 à 5 heures. Le
              démontage quand à lui prend lui un peu moins de temps . Pour les
              modèles avec une motorisation élevée, il faut prévoir 50 % à 100 %
              de temps supplémentaire. Cela est dû au fait qu'il est souvent
              nécessaire de retirer le berceau et parfois le groupe
              motopropulseur. Un outillage spécifique est indispensable pour ces
              opérations, notamment pour la rétention de l'huile. Une attention
              particulière doit être portée aux boîtes avec convertisseur de
              couple hydraulique, surtout quand au remontage (pompe engrenage).
              Utiliser les bons outils et suivre les instructions permet
              d’éviter les erreurs.
            </p>

            <div className="">
              <ContactButton />
            </div>
          </div>
          <div className="md:w-1/2">
            <Image className="rounded-[8px] MB5" src={mont1} alt="" />
          </div>
        </div>
        <span className="separator"></span>
        <div className="md:flex flexDirection  gap-14">
          <div className="md:w-1/2">
            <Image className="rounded-[8px] MB5" src={mont2} alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Particularités</h1>
            <p className="text-justify mb-2 paragraph">
              Les boîtes automatiques{" "}
              <strong>à convertisseur de couple hydrauliquenécessitent</strong>{" "}
              une attention particulière : Il est important de s'assurer que
              celui-ci est correctement emboîté sur les goupillesafin d’éviter
              d'endommager la pompe d'engrenage. Une mauvaise manipulation peut
              entraîner des problèmes au niveau de cette pompe (casse).
            </p>
            <p className="text-justify mb-2 paragraph">
              En ce qui concerne{" "}
              <strong>les boites automatiques d’occasion</strong>, il est très
              difficile d'inspecter l'intérieur et de vérifier son état
              mécanique. Il est aussi impossible de certifier le kilométrage
              réel. Sur certaines boites équipées d’un calculateur (dans la
              grande majorité) il sera nécessaire d’effectuer une
              reprogrammation ainsi qu’un calibrage. Il faudra porter une
              attention particulière à la couleur et à la qualité de l’huile
              d’origine.
            </p>
          </div>
        </div>
        <span className="separator"></span>
        <div className="pb-16">
          <h1 className="titlesFonts">Boîtes automatiques : warning !</h1>
          <p className="text-justify mb-2 paragraph">
            Les boîtes de vitesses automatiques diffèrent des boites manuelles
            sur plusieurs points :
          </p>
          <h2 className="text-lg font-bold text-gray-700 mb-2">Calibrage</h2>
          <p className="text-justify mb-2 paragraph">
            Les boîtes automatiques nécessitent un calibrage précis pour assurer
            des changements de vitesse contrairement aux boites manuelles.
          </p>
          <h2 className="text-lg font-bold text-gray-700 mb-2">
            Reprogrammation et Calculateur
          </h2>
          <p className="text-justify mb-2 paragraph">
            La grande majorité des boites automatiques sont équipées d’un
            calculateur. La reprogrammation de ces calculateurs doit être
            effectuée correctement pour garantir des performances optimales. Une
            mauvaise reprogrammation peut entraîner des dysfonctionnements.
          </p>
          <h2 className="text-lg font-bold text-gray-700 mb-2">
            Niveau d'Huile
          </h2>
          <p className="text-justify mb-2 paragraph">
            Le contrôle et l'ajustement du niveau d'huile dans les boîtes
            automatiques sont essentiels et doivent être réalisés correctement.
            Pour obtenir une mesure précise, il est souvent nécessaire de
            vérifier le niveau d'huile lorsque la transmission est chaude,
            généralement à environ 65°C. Voici les étapes recommandées sur une
            boite de vitesse équipées d’un convertissuer de couple
          </p>
          <ul style={{ paddingLeft: "0px", color: "#000" }}>
            <li>
              <p className="text-justify  paragraph">
                {" "}
                - Chauffer l'huile : Faire monter la température de l'huile de
                boîte pour atteindre au moins 65°C, puis arrêter le moteur.
              </p>
            </li>
            <li>
              <p className="text-justify  paragraph">
                - Vidange : Dévisser le carter, vider l'huile dans une bassine,
                nettoyer le fond du carter et l'aimant, puis dévisser la crépine
                pour laisser couler l'huile restante. Remonter le tout avec une
                nouvelle crépine.
              </p>
            </li>
            <li>
              <p className="text-justify  paragraph">
                - Remplissage : Utiliser un entonnoir pour verser environ 4
                litres d'huile dans l'orifice de remplissage situé sous le
                capot, près du moteur.
              </p>
            </li>
            <li>
              <p className="text-justify  paragraph">
                - Mise à niveau : Mettre le moteur en marche au ralenti, appuyer
                sur la pédale de frein et enclencher toutes les vitesses avant
                de positionner le levier en mode "Parking" (P).
              </p>
            </li>
          </ul>
          <p className="text-justify mb-2 paragraph">
            Suite au remontage d’une boîte automatique, il est important de bien
            faire le calibrage/reprogrammation et de vérifierle niveau d'huile.
          </p>
          <div className="">
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
