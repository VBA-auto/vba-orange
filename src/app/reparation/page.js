"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import repa2 from "../../../public/images/repara2.png";
import repa3 from "../../../public/images/repara3.png";
import repa4 from "../../../public/images/repara4.jpeg";
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
          src="/images/video.mp4"
          autoPlay
          muted
          loop
        ></video>
        <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
          Réparation BVA
        </h1>
      </div> */}
      <div id="main" className="container mx-auto">
        <div className="md:flex  gap-14">
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Les boites CVT à variation continue</h1>
            <p className="text-justify mb-2 paragraph">
              Les boîtes de vitesses CVT, telles que la Mercedes 722.8 des
              classes A et B et la Multitronic d&apos;Audi, ainsi que la HF35
              (CVT) des Ford Mondeo Hybrid et autres nécessitent des outils
              spécialisés pour leur réparation. Ces systèmes utilisent une
              courroie segmentée en acier reliant des pignons primaires et
              secondaires, permettant un ajustement continu des rapports.
            </p>
            <p className="text-justify mb-2 paragraph">
              Il existe aussi des problèmes sur l’embrayage situé juste avant le
              système CVT. Pour remplacer et modifier un système CVT, il est
              important d’avoir un outil spécial pour ne pas endommager la
              transmission. <br /> Les passages de vitesses sont en réalité des
              “ratios”.
            </p>
            <div className="">
              <ContactButton />
            </div>
          </div>
          <div className="md:w-1/2">
            <video
              className="rounded-[8px]"
              src="/images/repara1.webm"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
        <span className=" separator"></span>
        <div className="md:flex flexDirection gap-14">
          <div className="md:w-1/2">
            <Image className="rounded-[8px]" src={repa2} alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Les boites robotisées</h1>
            <p className="text-justify mb-5 paragraph">
              Les boîtes robotisées ou pilotées, comme
              la &apos;Powershift&apos; chez Renault (Modus, Twingo) et Fiat,
              ainsi que sur les anciennes Peugeot 5008, sont constituées
              d&apos;un embrayage, d&apos;une butée d&apos;embrayage, et
              d&apos;un robot(comprenant souvent un accumulateur) qui automatise
              le changement de vitesses et la gestion de l&apos;embrayage. Ce
              sont en réalité des boites manuelles pilotées avec donc moins de
              confort qu’une « vraie» boite automatique : il est fréquent de «
              sentir » l’a-coup du passage de la vitesse. Il existe sur certains
              nouveaux modèles des boites robotisées à double embrayage. Ces
              boîtes nécessitent une maintenance régulière pour préserver leur
              performance et leur fiabilité. Pour résumer, il est possible de
              réparer le robot en focntion des codes défauts et symptômes (moins
              coûteux que neuf).
            </p>
          </div>
        </div>
        <span className=" separator"></span>
        <div className="md:flex gap-14">
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Les double embrayage</h1>
            <p className="text-justify mb-2 paragraph">
              Il existe les modèles à embrayage mouillé et ceux à embrayage sec.
              Les modèles à embrayage mouillé,
              <strong> DQ500, DQ381, DSG6</strong> (DQ250) et certains modèles
              de Mercedes (724.0), nécessitent une lubrification (équipent en
              général les moteurs plus puissants). À l&apos;inverse, les boîtes
              à embrayage sec, comme les <strong>DSG7</strong> (DQ200) et la
              <strong> 6DCT250</strong> de GETRAG (appelée{" "}
              <strong>boîte EDC ou DC4</strong> ), fonctionnent avec très peu de
              lubrification : une partie dans le mécatronique et à peine dans la
              partie mécanique. L&apos;entretien ou la réparation de ces boîtes
              demande des outils spécifiques, tels que ceux fournis par la
              marque LUK. Le plus important pour réparer ces boites est
              d&apos;avoir le bon outillage pour pouvoir remplacer ces embrayage
              que ce soit un embrayage sec ou mouillé.
            </p>
            <div className="">
              <ContactButton />
            </div>
          </div>
          <div className="md:w-1/2">
            <Image className="rounded-[8px] MB5" src={repa3} alt="" />
          </div>
        </div>
        <span className=" separator"></span>
        <div className=" pb-16">
          <h1 className="titlesFonts text-center mb-5">
            {" "}
            Les boites à convertisseur de couple hydraulique
          </h1>
          <div className="md:flex   gap-5">
            <div className="md:w-1/2">
              <p className="text-justify mb-2 paragraph">
                Les boîtes de vitesses équipées de convertisseurs de couple
                hydraulique, comme les modèles ZF{" "}
                <strong>6HP21, 6HP26, 8HP</strong> souvent montées sur les BMW,
                ainsi que les Aisin TF80, <strong>7G-Tronic</strong> ou encore
                les <strong>9G-Tronic</strong>(Mercedes) les DP0 ou AL4
                (Renault/Peugeot) sont réputées pour leur robustesse et leur
                capacité à gérer la puissance du moteur de manière fluide. Le
                convertisseur permet à la voiture de démarrer sans à-coups ;
              </p>
              <p className="text-justify mb-2 paragraph">
                <strong>
                  si la voiture patine ou si les tours du moteur oscillent
                  anormalement
                </strong>
                , cela peut indiquer un problème avec celui-ci. Réparer ces
                boîtes nécessite un savoir-faire technique et des outils
                spécifiques pour diagnostiquer correctement le problème. Les
                plus grande marques de boite de vitesse a convertisseur sont
                <strong> Aisin, ZF, Mercedes</strong>. Comme dit précédement, il
                existe certain modèles de boite de vitesse dont la maladie peut
                être le convertisseur comme sur certain modèle{" "}
                <strong>
                  722.6, 722.9 (7G-Tronic) et nouvelle 725.0 (9G-Tronic /
                  A7252709011 / A0009015000)
                </strong>
                .
              </p>
            </div>
            <div className="md:w-1/2 ">
              <Image
                className="rounded-[8px] h-[565px] mx-auto MB5 MT5"
                src={repa4}
                alt=""
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-justify mb-2 paragraph">
                Le dispositif du convertisseur agit comme un embrayage qui
                permet de multiplier le couple entre les vitesses d&apos;entrée
                et de sortie, grâce à un mécanisme hydraulique où toutes les
                pièces internes baignent dans de l’huile, souvent la même que
                celle utilisée pour la boîte de vitesses automatique (BVA), à
                quelques exceptions près. Cette caractéristique isole la boîte
                de vitesses du moteur, permettant au véhicule de rester en
                marche même à l&apos;arrêt. Le rôle de l’embrayage du
                convertissuer de couple hydraulique permet de combler la perte
                d’énergie qui se perd entre les deux turbines et pour réduire la
                consommation d’essence/gasoil.{" "}
                <strong>Celui-ci fait office de frein moteur.</strong>
              </p>
              <p className="text-justify mb-2 paragraph">
                IL existe des boites CVT comme la XTRONIC CVT de la Nissan
                Qashqai ou la 722.8 des Mercedes Classe A et B, équipée avec un
                un convertisseur de couple à l’exception{" "}
                <strong>des boîtes Multitronic</strong>
                (01J/0AN ou 0AW).
              </p>
              <div className="mt-8">
                <ContactButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
