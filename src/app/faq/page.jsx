"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "../components/Footer";

const Page = () => {
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
  return (
    <section className="">
      <Head>
        <title>Automatic Transformation</title>
        {/* <meta name="description" content={pageDescription} /> */}
      </Head>
      {/* <div className="">
        <div className="absolute w-full  mx-auto min-h-screen  bg-black inset-0 backdrop-filter backdrop-blur-xs  bg-opacity-25"></div>
      </div> */}

      <div className="relative mx-auto">
        <Image
          width={400}
          height={400}
          className="w-full md:h-screen videoOverlay relative"
          src="/images/faq.png"
          alt=""
        />
        <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
          Foire aux questions
        </h1>
      </div>
      <div id="main" className="container mx-auto">
        <div className="flex  py-16 gap-5">
          <div className="md:w-2/3 mx-auto">
            <h1 className="titlesFonts ps-[15px]"> Foire aux questions</h1>
            <div className="collapse collapse-plus my-5">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title  font-semibold">
                <p>Comment vidanger sa boîte de vitesses automatique ?</p>
              </div>
              <div className="collapse-content">
                <p>
                  Pour vidanger une boîte de vitesses automatique, il faut
                  suivre un protocole précis. Utilisez un outil de diagnostic
                  connecté sur une prise OBD pour vérifier l&apos;état de
                  l&apos;huile et détecter la présence éventuelle de limaille,
                  ce qui permet de s&apos;assurer qu&apos;une vidange est bien
                  nécessaire. Une fois l&apos;huile usagée évacuée et remplacée
                  par de l&apos;huile neuve, il est souvent nécessaire de
                  réinitialiser les valeurs auto-adaptatives du calculateur ou
                  TCM (Transmission Control Module). Cette réinitialisation est
                  cruciale pour optimiser les performances de la boîte de
                  vitesses et supprimer les à-coups entre les positions N
                  (Neutre) et D (Drive).
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>
                  À quelle fréquence faut-il vidanger sa boîte de vitesses ?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  Il est conseillé de vidanger votre boîte de vitesses
                  automatique tous les 60 000 à 80 000 km. Cependant, pour les
                  boîtes à double embrayage à sec, telles que la DSG7 de
                  Volkswagen et la DC4 (EDC) de Renault, la vidange peut être
                  effectuée jusqu&apos;à 100 000 km. Malheureusement, les
                  manuels des véhicules ne mentionnent souvent pas clairement
                  ces intervalles de vidange, laissant cette information un peu
                  abstraite. Pour obtenir des recommandations précises, il est
                  préférable de consulter un spécialiste ou de se référer aux
                  directives spécifiques de la marque et du modèle de votre
                  véhicule.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>
                  Quel type d&apos;huile utiliser pour ma boîte de vitesses ?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  Le choix de l&apos;huile dépend du type de boîte de vitesses
                  et de l&apos;âge du véhicule. Utilisez de l&apos;huile
                  multi-ATF pour les boîtes à convertisseur de couple des
                  véhicules moyennement anciens. Pour les véhicules récents
                  équipés de boîtes à convertisseur de couple, préférez
                  l&apos;ATF6. La Trans-ATF est également adaptée aux véhicules
                  récents. Pour les boîtes à variation continue (CVT), utilisez
                  de l&apos;huile multi-CVT. Pour les véhicules équipés de
                  doubles embrayages, utilisez de l&apos;huile DCTF. Enfin, la
                  Multi-HF est utilisée pour les boîtes robotisées, comme celles
                  montées sur les véhicules dotés de boîtes de vitesses
                  automatisées.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>
                  Est-il préférable de laisser en D ou de mettre en P lors
                  d&apos;un arrêt au stop ?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  Il est conseillé de laisser votre boîte automatique en
                  position D lors des courts arrêts, comme aux feux rouges ou
                  aux stops, pour éviter l&apos;usure prématurée des composants.
                  Selon les experts et les fabricants, laisser la boîte en D
                  maintient une pression d&apos;huile constante dans le système
                  de transmission, évitant les à-coups et les sollicitations
                  excessives des composants internes. Passer fréquemment de D à
                  P peut provoquer une usure prématurée du mécanisme de
                  verrouillage et des solénoïdes. Pour préserver la longévité de
                  votre boîte de vitesses, laissez la position D engagée lors
                  des arrêts de courte durée.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>Les boîtes DSG sont-elles fiables ?</p>
              </div>
              <div className="collapse-content">
                <p>
                  Oui, les boîtes DSG (Direct Shift Gearbox) sont réputées pour
                  leur fiabilité et leurs performances. Elles offrent des
                  changements de vitesses rapides et fluides, surtout les
                  modèles à double embrayage mouillé. Ces boîtes représentent
                  l&apos;avenir en matière de confort de conduite, grâce à la
                  présence de « synchro » entre chaque vitesse, ce qui permet de
                  ne pas sentir les vitesses passer. Les doubles embrayages à
                  sec, quant à eux, sont généralement utilisés pour les petites
                  motorisations, contrairement aux doubles embrayages mouillés
                  qui sont préférés pour les moteurs plus puissants.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>
                  Quelle est la différence entre un double embrayage à sec et
                  mouillé ?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  Un double embrayage à sec n&apos;est pas immergé dans
                  l&apos;huile, ce qui le rend plus simple et moins coûteux à
                  produire, mais peut entraîner une usure plus rapide des
                  composants. On trouve ce type de double embrayage sur des
                  véhicules comme les Renault Captur, Clio, Scénic, Mégane, et
                  sur les DSG7 du groupe Volkswagen. En revanche, un double
                  embrayage mouillé est immergé dans de l&apos;huile, offrant
                  une meilleure dissipation de la chaleur et une plus grande
                  durabilité. Ce type de double embrayage est utilisé pour les
                  motorisations plus puissantes et se trouve sur les nouvelles
                  Mercedes Classe B et Classe A, les véhicules du groupe
                  Volkswagen, les Fiat 500X et 500L, ainsi que les Audi. Chez
                  Renault, on les retrouve sous les noms DW5 et DW6.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>Est-ce qu&apos;une vidange peut supprimer les à-coups ?</p>
              </div>
              <div className="collapse-content">
                <p>
                  Oui, une vidange peut supprimer les à-coups, surtout
                  s&apos;ils sont faibles. En renouvelant l&apos;huile, vous
                  éliminez les impuretés qui perturbent le fonctionnement des
                  composants internes, rétablissant ainsi une pression optimale.
                  De plus, une réinitialisation des valeurs auto-adaptatives (ou
                  reset) peut encore améliorer la fluidité et réduire les
                  à-coups.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>
                  Quelle est la différence entre la méthode flushing et gravité
                  ?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  Le flushing consiste en un rinçage total de la boîte,
                  remplaçant presque toute l&apos;huile, et est particulièrement
                  efficace pour les boîtes de vitesses à convertisseur de couple
                  hydraulique. En revanche, la méthode par gravité ne vidange
                  que 50 à 70 % de l&apos;huile présente, laissant une partie de
                  l&apos;huile usagée dans le système. Pour le flushing, on se
                  connecte directement au radiateur ou au refroidisseur de la
                  boîte de vitesses automatique.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>
                  Est-ce qu&apos;une vidange peut endommager ma boîte de
                  vitesses ?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  Non, une vidange bien réalisée n&apos;endommage pas la partie
                  mécanique de la boîte de vitesses. Cependant, elle doit être
                  effectuée avec précaution pour éviter des problèmes dans le
                  bloc de contrôle hydraulique, notamment le valve body. Une
                  mauvaise vidange peut déplacer des particules ou des dépôts,
                  provoquant des obstructions et affectant le passage des
                  vitesses.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>Pourquoi faire la vidange de sa boîte automatique ?</p>
              </div>
              <div className="collapse-content">
                <p>
                  Vidanger régulièrement votre boîte de vitesses prolonge sa
                  durée de vie, améliore les performances et évite des coûts de
                  remplacement élevés. L&apos;huile se dégrade avec le temps,
                  accumulant des impuretés qui peuvent endommager les composants
                  internes. Certains modèles ont des crépines internes,
                  remplaçables uniquement lors d&apos;une réfection complète,
                  tandis que d&apos;autres possèdent des crépines externes et
                  des joints de carter à remplacer à chaque vidange.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>
                  Comment expliquer la présence de limaille dans l&apos;huile ?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  La présence de limaille dans l&apos;huile de votre boîte de
                  vitesses est principalement due à l&apos;usure des disques de
                  friction qui libèrent de minuscules fragments de métal. Ces
                  résidus métalliques se mélangent à l&apos;huile et peuvent
                  s&apos;accumuler au fil du temps. Pour les boîtes avec un
                  carter, un aimant placé sur le carter de la boîte de vitesses
                  (pan) permet de capter et d&apos;évaluer la quantité de
                  limaille présente, facilitant ainsi l&apos;entretien et la
                  prévention de dommages supplémentaires.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>
                  Que signifie la présence d&apos;antigel (liquide
                  refroidissement) dans l&apos;huile ?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  La présence d&apos;antigel dans l&apos;huile de la boîte de
                  vitesses indique une fuite au niveau du refroidisseur de la
                  boîte. Le liquide de refroidissement se mélange à
                  l&apos;huile, ce qui modifie sa consistance et sa couleur.
                  Cela est très mauvais pour la boîte de vitesses, car une huile
                  diluée par l&apos;antigel perd ses propriétés de lubrification
                  et de refroidissement, entraînant une surchauffe et des
                  dommages graves aux composants internes. En général
                  l&apos;huile devient un peu plus liquide. Avec un échantillon
                  il est possible de détecter la présence d&apos;antigel dans
                  l&apos;huile avec un outil spécial.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>Est-il vrai que certaines BVA ne se vidangent jamais ?</p>
              </div>
              <div className="collapse-content">
                <p>
                  En pratique, toutes les boîtes de vitesses doivent être
                  vidangées. Même les huiles dites &apos;long life&apos; doivent
                  être remplacées périodiquement pour maintenir leurs
                  propriétés. Bien que certains manuels, comme ceux des boîtes
                  ZF 6HP, aient pu indiquer qu&apos;elles n&apos;avaient pas
                  besoin de vidange, cette affirmation n&apos;est jamais très
                  claire. Les mentalités changent et les compétences évoluent
                  dans ce domaine. Vidanger entre 60 000 et 80 000 km est tout à
                  fait raisonnable et logique pour garantir une performance
                  optimale et prolonger la durée de vie de la transmission.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>
                  J&apos;ai une fuite : huile de boîte de vitesses ou huile
                  moteur ?
                </p>
              </div>
              <div className="collapse-content">
                <p>
                  Les huiles de boîtes de vitesses peuvent être rouges, jaunes
                  ou vertes. Si votre huile de boîte est jaune, elle peut
                  ressembler à l&apos;huile moteur. Pour déterminer
                  l&apos;origine de la fuite, examinez la couleur de
                  l&apos;huile et l&apos;emplacement de la fuite sous la
                  voiture. L&apos;huile de boîte de vitesses se trouve
                  généralement près de la transmission, tandis que l&apos;huile
                  moteur est située plus à l&apos;avant, sous le bloc moteur.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus mb-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                <p>
                  Quel type d&apos;huile utiliser pour ma boîte de vitesses
                  automatique ?
                </p>
              </div>
              <div className="collapse-content">
                <p className="">
                  Le choix de l&apos;huile pour votre boîte de vitesses
                  automatique est important : il faut utiliser soit de
                  l&apos;huile homologuée ou soit l&apos;huile du constructeur.
                  Le type d&apos;huile doit correspondre au type spécifique de
                  boîte de vitesses de votre véhicule, qu&apos;il s&apos;agisse
                  de CVT, de double embrayage à sec, de convertisseur de couple
                  ou de boîtes robotisées. Pour les boîtes à convertisseur de
                  couple, il existe des distinctions selon l&apos;année du
                  véhicule : les véhicules plus anciens utilisent souvent de
                  l&apos;huile Dexron, tandis que les plus récents nécessitent
                  de l&apos;ATF. Chaque type d&apos;huile a des caractéristiques
                  spécifiques de viscosité à chaud et à froid, et les huiles
                  homologuées respectent ces normes strictes, garantissant ainsi
                  une lubrification adéquate et la protection des composants
                  internes.
                </p>
              </div>
            </div>
            <div className="ps-[18px]">
              <Link href="#">
                <button className="bg-[#f1b04e]  text-white py-2.5 px-5 rounded-md hover:bg-[#f1b04ea6] hover:text-white">
                  Contactez-nous
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Page;
