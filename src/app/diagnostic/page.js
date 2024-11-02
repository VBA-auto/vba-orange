"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import BG from "../../../public/images/diagnostic.jpeg";
import Diag1 from "../../../public/images/diag3.jpeg";
import Diag2 from "../../../public/images/diag1.jpeg";
import Diag3 from "../../../public/images/diag2.png";
import Breadcrumb from "../components/BreadCumb";
import ContactButton from "../components/ContactButton";

const Page = () => {
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
        <div className="md:flex gap-14 items-stretch">
          <div className="md:w-1/2 ">
            <div className="">
              <h1 className="titlesFonts mb-2">Diagnostic mécanique</h1>
              <p className="text-justify mb-2 paragraph">
                Le diagnostic des boîtes automatiques commence par la lecture
                des codes d&apos;erreur avec une valise diagnostique. Cependant,
                ce n&apos;est qu&apos;une partie du processus. Nous vérifions
                également le <strong>niveau, la qualité de l&apos;huile</strong>{" "}
                et éventuellement la <strong>présence de limaille</strong>. La
                partie « <strong>mécatronique</strong>» ou « bloc de contrôle
                hydraulique » est important : il faut vérifier la pression.
              </p>
              <p className="text-justify mb-7 paragraph">
                Ces contrôles nous aident à évaluer l&apos;état de la boîte et à
                estimer les réparations. Si ces premiers tests ne suffisent pas
                à identifier les problèmes, nous procédons à des inspections
                plus poussées, comme le démontage de la boîte. nous procédons à
                des inspections plus poussées, comme le démontage de la boîte.
              </p>
            </div>
            <div className="">
              <ContactButton />
            </div>
          </div>
          <div className="md:w-1/2 flex">
            <Image
              width={600}
              height={200}
              className="rounded-[8px] md:h-[360px]"
              src={Diag2}
              alt=""
            />
          </div>
        </div>
        <span className="separator"></span>
        <div className="md:flex flexDirection gap-8">
          <div className="md:w-1/2 flex">
            <Image
              className="rounded-[8px] h-[220px]"
              width={600}
              height={400}
              src={Diag3}
              alt=""
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="titlesFonts mb-2">La valise </h1>
              <p className="text-justify mb-2 paragraph">
                Les codes défaut obtenus avec la valise offrent des indications
                mais il faut bien connaître les différents modèles de boîtes et
                avoir de l&apos;expérience dans leur interprétation. Les outils
                diagnostiques varient également entre les marques comme{" "}
                <strong>Autel, Launch, Flex, Delphi</strong>, chacun ayant ses
                spécificités. Comprendre ces différences et les &apos;petits
                secrets&apos; de chaque système est indispensable afin de bien
                cerner le problème. Vous trouverez dans ce lien un récapitulatif
                des codes défauts :{" "}
                <Link className="text-[#f1b04e]" href="/aide-en-ligne">
                  https://laboiteauto.com/aide-en-ligne.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <span className="separator"></span>
        <div className="md:flex gap-14 items-stretch">
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="titlesFonts mb-2">Voyant tableau de bord</h1>
              <p className="text-justify mb-2 paragraph">
                <strong>&apos;Boîte de vitesse à contrôler&apos;</strong>,
                &apos;Défaut boîte de vitesse, aller à l&apos;atelier&apos;, ou
                encore &apos;surchauffe boite de vitesse&apos;. Ces alertes
                pouvant apparaître dans des véhicules de marques BMW, Audi,
                Volkswagen, Mercedes, Peugeot, Renault, Toyota ou autre
                indiquent évidement un problème avec la transmission
                automatique. Il faut noter que dans environ 10% des cas, cela
                peut aussi être lié à un problème moteur, ABS ou autre. Il est
                donc essentiel de ne pas ignorer ces avertissements et de faire
                un diagnostic rapidement. L’écran de contrôle ou le message
                d’erreur peut différent en fonction des marques. Chaque message
                est différent en fonction du véhicule.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex">
            <Image
              className="rounded-[8px] MB5"
              width={700}
              height={400}
              src={Diag1}
              alt=""
            />
          </div>
        </div>
        <span className="separator"></span>

        <div className="pb-16">
          <h1 className="titlesFonts">En conclusion</h1>
          <p className="text-justify mb-2 paragraph">
            La boîte de vitesse automatique est composée de nombreux éléments
            mécaniques, hydraulique et/ou éléctronique chacun jouant un rôle
            dans son fonctionnement. Parmi ces composants, on trouve le
            convertisseur de couple hydraulique, les disques de friction, les
            disques en métal, les bagues en bronze, le(s) joint(s) de carter,
            l&apos;embrayage (simple ou double), le bloc de contrôle
            hydraulique, les solénoïdes de pression, les synchros…etc. Il faut
            bien connaître la boîte sur laquelle on va réaliser le diagnostic:{" "}
            <Link className="text-[#f1b04e]" href="/aide-en-ligne">
              https://laboiteauto.com/check-bva.
            </Link>{" "}
            Deux actions sont essentielles pour un diagnostic précis :
            d&apos;abord, il faut connaître en détail les composants de la boîte
            de vitesse sur laquelle on internient pour pouvoir identifier
            correctement les problèmes potentiels.
          </p>
          <p className="text-justify mb-2 paragraph">
            Il faut ensuite effectuer un diagnostic éléctronique avec la valise.
            Il faut vérifier les niveaux d&apos;huile, de la crépine (ou
            cartouche externe parfois). Inspecter tous les supports moteur et
            boîte de vitesse. Ces vérifications permettent d&apos;assurer un
            diagnostic complet et que la panne identifiée est bien la source du
            problème, garantissant ainsi une réparation efficace et durable.
          </p>

          <div className="mt-5">
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
