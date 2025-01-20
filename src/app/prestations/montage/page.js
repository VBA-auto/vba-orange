import Breadcrumb from "@/app/components/BreadCumb";
import ContactButton from "@/app/components/ContactButton";
import Head from "next/head";
import Image from "next/image";
import React from "react";
const pageDescription =
  "Nous proposons le démontage et le remontage de votre boite de vitesse automatique automatique";
const Page = () => {
  return (
    <section className="px-5 md:px-0">
      <Head>
        <title>Automatic Transformation</title>
        <meta
          name="title"
          content="Démontage et remontage de boite automatique"
        />
        <meta name="description" content={pageDescription} />
      </Head>
      <div className="container mx-auto py-12">
        <Breadcrumb />
      </div>
      <div id="main" className="container mx-auto">
        <div className="flex gap-14 items-stretch flex-col-reverse md:flex-row">
          <div className="md:w-1/2 ">
            <h1 className="titlesFonts">Spécificités techniques</h1>
            <p className="text-justify mb-2 paragraph">
              Monter une boite automatique prend en général 4 à 5 heures. Le
              démontage quand à lui prend lui un peu moins de temps . Pour les
              modèles avec une motorisation élevée, il faut prévoir{" "}
              <b>50 % à 100 % </b>
              de temps supplémentaire. Cela est dû au fait qu&apos;il est
              souvent nécessaire de retirer le berceau et parfois le groupe
              motopropulseur. Un outillage spécifique est indispensable pour ces
              opérations, notamment pour la rétention de l&apos;huile. Une
              attention particulière doit être portée aux boites avec
              convertisseur de couple hydraulique, surtout quand au remontage
              (pompe engrenage). Utiliser les bons outils et suivre les
              instructions permet d&apos;éviter les erreurs. il est important de
              faire le niveau d’huile et les <b>”adaptations”</b> ou “réglages
              de base”.
            </p>

            <div className="">
              <ContactButton />
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              width={600}
              height={200}
              className="rounded-[8px] MB5"
              src="/images/mont1.png"
              alt=""
            />
          </div>
        </div>
        <span className="separator"></span>
        <div className="md:flex flexDirection  gap-14">
          <div className="md:w-1/2">
            <Image
              width={600}
              height={200}
              className="rounded-[8px] MB5"
              src="/images/mont2.png"
              alt=""
            />
          </div>
          <div className="md:w-1/2 md:mt-0 mt-12">
            <h1 className="titlesFonts">Particularités</h1>
            <p className="text-justify mb-2 paragraph">
              Les boites automatiques{" "}
              <strong>à convertisseur de couple hydrauliquenécessitent</strong>{" "}
              une attention particulière: Il est important de s&apos;assurer que
              celui-ci est correctement emboité sur les goupillesafin
              d&apos;éviter d&apos;endommager la pompe d&apos;engrenage. Une
              mauvaise manipulation peut entrainer des problèmes au niveau de
              cette pompe (casse).
            </p>
            <p className="text-justify mb-2 paragraph">
              En ce qui concerne{" "}
              <strong>les boites automatiques d&apos;occasion</strong>, il est
              très difficile d&apos;inspecter l&apos;intérieur et de vérifier
              son état mécanique. Il est aussi impossible de certifier le
              kilométrage réel. Sur certaines boites équipées d&apos;un
              calculateur (dans la grande majorité) il sera nécessaire
              d&apos;effectuer une reprogrammation ainsi qu&apos;un calibrage.
              Il faudra porter une attention particulière à la couleur et à la
              qualité de l&apos;huile d&apos;origine.
            </p>
          </div>
        </div>
        <span className="separator"></span>
        <div className="pb-16">
          <h1 className="titlesFonts">Boites automatiques: attention !</h1>
          <p className="text-justify mb-2 paragraph">
            Les boites de vitesses automatiques diffèrent des boites manuelles
            sur plusieurs points:
          </p>
          <h2 className="font-[500] text-gray-700 mb-2">Calibrage</h2>
          <p className="text-justify mb-2 paragraph">
            Les boites automatiques nécessitent un calibrage précis pour assurer
            des changements de vitesse contrairement aux boites manuelles.
          </p>
          <h2 className="font-[500] text-gray-700 mb-2">
            Reprogrammation et Calculateur
          </h2>
          <p className="text-justify mb-2 paragraph">
            La grande majorité des boites automatiques sont équipées d&apos;un
            calculateur. La reprogrammation de ces calculateurs doit être
            effectuée correctement pour garantir des performances optimales. Une
            mauvaise reprogrammation peut entrainer des dysfonctionnements.
          </p>
          <h2 className="font-[500] text-gray-700 mb-2">Niveau d&apos;Huile</h2>
          <p className="text-justify mb-2 paragraph">
            Le contrôle et l&apos;ajustement du niveau d&apos;huile dans les
            boites automatiques sont essentiels et doivent être réalisés
            correctement. Pour obtenir une mesure précise, il est souvent
            nécessaire de vérifier le niveau d&apos;huile lorsque la
            transmission est chaude, généralement à <b>environ 65°C</b>. Voici
            les étapes recommandées sur une boite de vitesse équipées d&apos;un
            convertissuer de couple
          </p>
          <ul style={{ paddingLeft: "0px", color: "#000" }}>
            <li>
              <p className="text-justify  paragraph">
                {" "}
                - Chauffer l&apos;huile: Faire monter la température de
                l&apos;huile de boite pour atteindre au moins 65°C, puis arrêter
                le moteur.
              </p>
            </li>
            <li>
              <p className="text-justify  paragraph">
                - Vidange: Dévisser le carter, vider l&apos;huile dans une
                bassine, nettoyer le fond du carter et l&apos;aimant, puis
                dévisser la crépine pour laisser couler l&apos;huile restante.
                Remonter le tout avec une nouvelle crépine.
              </p>
            </li>
            <li>
              <p className="text-justify  paragraph">
                - Remplissage: Utiliser un entonnoir pour verser environ 4
                litres d&apos;huile dans l&apos;orifice de remplissage situé
                sous le capot, près du moteur.
              </p>
            </li>
            <li>
              <p className="text-justify  paragraph">
                - Mise à niveau: Mettre le moteur en marche au ralenti, appuyer
                sur la pédale de frein et enclencher toutes les vitesses avant
                de positionner le levier en mode &apos;Parking&apos; (P).
              </p>
            </li>
          </ul>
          <p className="text-justify mb-2 paragraph">
            Suite au remontage d&apos;une boite automatique, il est important de
            bien faire le calibrage/reprogrammation et de vérifierle niveau
            d&apos;huile.
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
