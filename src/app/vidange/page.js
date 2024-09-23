"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import diag1 from "../../../public/images/vid1.png";
import ContactButton from "../components/ContactButton";
import Breadcrumb from "../components/BreadCumb";

const Page = () => {
  // useEffect(() => {
  //   const scrollToMain = () => {
  //     const mainSection = document.getElementById("main") || null;
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
          src="/images/vidange.mp4"
          autoPlay
          muted
          loop
        ></video>
        <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
          Vidange BVA
        </h1>
      </div> */}
      <div id="main" className="container mx-auto">
        <div className="md:flex gap-14">
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Pourquoi vidanger sa BVA ?</h1>
            <p className="text-justify mb-2 paragraph">
              Certaines boîtes de vitesses automatiques sont à convertisseur de
              couple, d'autres à double embrayage. Certaines contiennent une
              crépine interne ou externe, avec ou sans joint de carter. Parfois
              il existe aussi une cartouche externe. La quantité d'huile varie
              selon les boîtes : les doubles embrayages à sec nécessitent peu
              d'huile, tandis que les autres types contiennent généralement
              entre 7 et 10 litres.
            </p>
            <p className="text-justify mb-2 paragraph">
              Il est donc important de lubrifier correctement sa boite de
              vitesse automatique. Une vidange est recommandée tous les 60 000 à
              80 000 km.
            </p>
            <div className="">
              <ContactButton />
            </div>
          </div>
          <div className="md:w-1/2">
            <Image className="rounded-[8px] MB5" src={diag1} alt="" />
          </div>
        </div>
        <span className="separator"></span>
        <div className="md:flex gap-14">
          <div className="md:w-3/4">
            <h1 className="titlesFonts">Vidange gravité vs Flushing</h1>
            <p className="text-justify mb-2 paragraph">
              Lorsqu'il s'agit de vidanger votre boîte de vitesses automatique,
              la méthode par flushing se révèle beaucoup plus efficace que la
              vidange par gravité. La vidange par flushing utilise une machine
              spécifique pour injecter de l'huile neuve sous pression tout en
              collectant l'huile usagée. Cela permet de remplacer jusqu'à
              95-100% de l'huile, contrairement à la méthode par gravité qui ne
              renouvelle qu'environ 70% de l'huile (50% sur modèle Jatco par
              exemple)
            </p>
            <p className="text-justify mb-2 paragraph">
              Le principal avantage de la vidange par flushing est de permettre
              le remplacement intégral de l'huile et de nettoyer le
              convertisseur de couple (si équipé), l'ensemble du système de
              transmission automatique, le refroidisseur d'huile et toutes les
              conduites d'huile. Ce "rinçage complet de la boîte" élimine aussi
              la poussière de métal créée par l'usure des pièces.
            </p>
            <p className="text-justify mb-2 paragraph">
              Il suffit de remplir le réservoir d'huile neuve de la machine, de
              connecter les tuyaux aux raccords du radiateur de la boîte de
              vitesses et de lancer le programme. La machine ajuste
              automatiquement le niveau d'huile. Il est important de noter que
              pour une boîte de vitesses automatique (BVA) d'une capacité totale
              de 8 litres, il faut souvent injecter bien plus de 8 litres
              d'huile neuve pour atteindre un résultat satisfaisant. Plus on
              injecte d'huile neuve, plus on s'approche des 100% de remplacement
              de l'huile usagée.
            </p>
            <p className="text-justify mb-2 paragraph">
              La vidange par flushing est donc la méthode recommandée pour un
              entretien optimal de votre boîte de vitesses automatique, surtout
              pour les modèles sans carter comme Audi A4/A5/A6/A7/A8, Peugeot
              508, Citroën, Opel, Renault, Volvo, Mini.
            </p>
          </div>
          <div className="md:w-1/3 ">
            <video
              className="ms-auto  w-full h-[555px] object-cover MT5"
              src="/images/vid2.mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
        <span className="separator"></span>
        <div className=" pb-16">
          <h1 className="titlesFonts">Bien choisir son huile </h1>
          <p className="text-justify mb-2 paragraph">
            Pour garantir les performances de votre boîte de vitesses
            automatique, il est essentiel de choisir la bonne huile. Les
            mécanismes des boîtes automatiques doivent être lubrifiés
            efficacement. Contrairement aux boîtes manuelles qui utilisent de
            l'huile minérale, les boîtes automatiques utilisent des huiles de
            synthèse, appelées ATF (Automatic Transmission Fluid), obtenues par
            synthèse chimique ou hydrocraquage d’une huile
            minérale.Ceslubrifiants synthétiques, constitués de molécules
            homogènes, offrent des performances supérieures en termes
            d’utilisation et de durée de vie. Ils sont extrêmement fluides à
            froid et garantissent une lubrification optimale des actionneurs
            hydrauliques.
          </p>
          <p className="text-justify mb-2 paragraph">
            Il existe plusieurstypes d’huiles pour les transmissions
            automatiques, notamment la <strong>Multi ATF</strong> , polyvalente
            pour denombreux véhicules, et l'<strong>ATF 6</strong>, spécifique
            aux boîtes modernes pour une meilleure fluidité à basse température.
            La <strong>Multi CVT</strong> est conçue pour lestransmissions à
            variation continue. Les huiles <strong>DCTF</strong> sont destinées
            auxtransmissions à double embrayage, garantissant des changements de
            vitessrapides et efficaces. La <strong>Multi HF</strong> est une
            huilesurtout utilisée pour les boites robotisée ou encore pour les
            mécatroniques des DSG7 (DQ200). La <strong>Trans ATF</strong>, de
            couleur transparente, est surtout utilisée pour les modèles de
            boites à convertisseur assez récents notament sur BMW et sur les
            moèles assez récents.
          </p>
          <p className="text-justify mb-2 paragraph">
            Il est important de bien respecter les préconisations du
            constructeur lors du choix del’huile. Par exemple, l’huile{" "}
            <strong>Dexron VI®</strong> convient auxvéhicules récents, offrant
            une excellente fluidité à basse température et uneréduction de la
            consommation de carburant. Elle est adaptée aux marquesaméricaines,
            asiatiques et européennes. L’huile <strong>ATF+4®</strong>, formulée
            pour lestransmissions Chrysler, améliore les changements de vitesse,
            réduit lesTremblements et offre une protection contre l'usure et la
            corrosion. Pourmaintenir votre boîte de vitesses automatique en
            parfait état, il est important de procéder à des vidanges
            régulières, tous les 60 000 à 80 000 km. La méthode de vidange par
            flushing, utilisant une machine spécifique, garantit unremplacement
            quasi complet de l'huile, assurant ainsi des performancesoptimales.
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
