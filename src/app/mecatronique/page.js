"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
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
          src="/images/Macatro.mp4"
          autoPlay
          muted
          loop
        ></video>
        <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
          Mecatronique
        </h1>
      </div> */}
      <div id="main" className="container mx-auto">
        <div className="md:flex  gap-14">
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Les différents types</h1>
            <p className="text-justify mb-2 paragraph">
              Le bloc de contrôle hydraulique, appelé aussi
              &apos;mécatronique&apos;, est indispensable dans les transmissions
              automatiques. Celui-ci comprends un « valve body » ou « corps de
              valve » lui même « gréffé » au calculateur. Les modèles souvent
              problématiques incluent les DSG7, les Mercedes Classe A et B, les
              boites Renault à double embrayage mouillé, les Volkswagen récents
              (DQ381, DQ500) et BMW (6HP, 8HP).
            </p>
            <p className="text-justify mb-2 paragraph">
              En général, le bloc hydraulique baigne dans l&apos;huile avec les
              solénoides(à bien contrôller) mais ce n&apos;est pas toujours le
              cas. Les défaillances courantes concernent la qualité de
              l&apos;huile et les courts-circuits à haute température.
            </p>
          </div>
          <div className="md:w-1/2">
            <video
              className="rounded-[8px] MB5"
              src="/images/Meca1.webm"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
        <span className="separator"></span>
        <div className="">
          <h1 className="titlesFonts ">Réparation Mecatronique</h1>
          <p className="text-justify mb-2 paragraph">
            C&apos; est une composante essentielle des boites de vitesses
            automatiques. Pour la plupart des modèles, ce bloc baigne dans
            l&apos;huile, indispensable pour son bon fonctionnement. À
            l&apos;intérieur de ce bloc, des billes circulent, permettant le
            blocage ou le passage des vitesses. Cependant, l&apos;utilisation
            d&apos;une mauvaise huile peut endommager l&apos;ensemble du
            bloc.Lorsque la température de l&apos;huile devient trop élevée,
            cela peut provoquer des courts-circuits. Ces courts-circuits peuvent
            entraîner divers problèmes, tels que la lenteur au passage des
            rapports, des à-coups ou même l&apos;impossibilité de passer à une
            vitesse supérieure. Dans la plupart des cas, lorsqu&apos;il y a un
            problème sur celui-ci, un code défaut va remonter sur la valise
            diagnostic : defaut de pression, défaut moteur embrayage 2 court
            circuit à la masse, rapport de démultiplication incorect, ratio
            incorrect, rapports incorrect…
          </p>
          <h2 className="text-lg font-bold text-gray-700 mb-2">
            Le diagnostic doit inclure plusieurs vérifications:
          </h2>
          <ul
            style={{ paddingLeft: "20px", listStyle: "outside", color: "#000" }}
          >
            <li>
              <p className="text-justify mb-2 paragraph">
                Pression d&apos;huile: Sur chacun des solénoïdes ou
                électrovannes.
              </p>
            </li>
            <li>
              <p className="text-justify mb-2 paragraph">
                Solénoïde du convertisseur de couple : Assurer son bon
                fonctionnement.
              </p>
            </li>
            <li>
              <p className="text-justify mb-2 paragraph">
                Rapports de démultiplication : Vérifier la cohérence et les
                ratio avec les données en temps réel
              </p>
            </li>
            <li>
              <p className="text-justify mb-2 paragraph">
                Température de l&apos;huile de transmission : vérifier la
                stabilité et la surchauffe
              </p>
            </li>
          </ul>
          <p className="text-justify mb-2 paragraph">
            Un entretien régulier et une attention particulière à la qualité de
            l&apos;huile utilisée sont essentiels pour maintenir le bon
            fonctionnement du mécatronique et ainsi prolonger la durée de vie de
            la transmission.
          </p>
          {/* <Link href="#">
            <button className="bg-[#f1b04e]  text-white py-2.5 px-5 rounded-md hover:bg-[#f1b04ea6] hover:text-white">
              Aide En Ligne
            </button>
          </Link> */}
        </div>
        <span className="separator"></span>
        <div className="md:flex gap-14">
          <div className="md:w-1/2">
            <Image
              width={600}
              height={600}
              className="rounded-[8px] MB5"
              src="/images/meca3.png"
              alt=""
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Réparation du mécatronique </h1>
            <p className="text-justify mb-2 paragraph">
              Réparer un mécatronique peut se faire de plusieurs façons. Il est
              possible de réparer la platine ou le calculateur, ce qui relève de
              l&apos;électronique pure. On peut aussi remplacer les solénoïdes
              (soit tous ou uniquement ceux de pression). Il faut aussi vérifier
              l&apos;étanchéité et remplacer éventuelement les joints (kit
              joints) pour enlever les défauts de pression. Il est préférable
              (si possible) de commencer par le mécatronique avant de démonter
              la boîte pour s&apos;assurer que le problème n&apos;est pas
              mécanique. Un diagnostic précis et une réparation efficace
              nécessitent de l&apos;expérience pour bien identifier la source du
              problème.
            </p>

            <div className="">
              <ContactButton />
            </div>
          </div>
        </div>
        <span className="separator"></span>
        <div className="md:flex flexDirection gap-14 pb-16">
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Calibrage</h1>
            <p className="text-justify mb-2 paragraph">
              Dans la plupart des cas, il faut faire un calibrage ou une
              réinitialisation des valeurs auto-adaptatives. Cela peut être
              appelé calibrage, réinitialisation, réglages de base ou
              adaptations. Lorsqu&apos;un module de commande est vierge, un
              clonage ou une programmation en ligne est nécessaire. Nous sommes
              équipés pour les véhicule BMW, Volswagen, Audi, Calculateur
              Renault DC4 (boites EDC),Peugeot. Dans tous les cas, nous
              informons nos clients si nous pouvons réaliser le calibrage ou
              non, afin de ne pas leur faire perdre de temps. Nous orientons
              volontiers nos clients vers nos partenaires si nécessaire. Bonne
              route !
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              width={400}
              height={400}
              className="rounded-[8px] MB5"
              src="/images/meca2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
