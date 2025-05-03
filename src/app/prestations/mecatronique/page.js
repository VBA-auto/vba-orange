import Breadcrumb from "@/app/components/BreadCumb";
import ContactButton from "@/app/components/ContactButton";
import Head from "next/head";
import Image from "next/image";
const pageDescription =
  "Nous réparons les mécatronique de boite de vitesse automatique équipée sur les Mercedes, Audi, BMW, Renault et autres véhicules";
const Page = () => {
  return (
    <section className="px-5 md:px-0">
      <Head>
        <title>Automatic Transformation</title>
        <meta
          name="title"
          content="Réparation mécatronique, boite automatique"
        />
        <meta name="description" content={pageDescription} />
      </Head>
      <div className="hidden">
        <h1>Réparation mécatronique</h1>
        <h1>Réparation mécatronique Audi</h1>
        <h1>Réparation mécatronique Renault</h1>
        <h1>Réparation mécatronique Volkswagen</h1>
      </div>
      <div className="container mx-auto py-12">
        <Breadcrumb />
      </div>
      <div id="main" className="container mx-auto">
        <div className="flex gap-14 items-stretch flex-col-reverse md:flex-row">
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Les différents types</h1>
            <p className="text-justify my-2 paragraph">
              Le bloc de contrôle hydraulique, appelé aussi
              &apos;mécatronique&apos;, est indispensable dans les transmissions
              automatiques. Celui-ci comprends un «valve body» ou «corps de
              valve» lui même «gréffé» au calculateur. Les modèles souvent
              problématiques incluent les DSG7, les Mercedes Classe A et B, les
              boites Renault à double embrayage mouillé, les Volkswagen récents
              (DQ381, DQ500) et BMW (6HP, 8HP).
            </p>
            <p className="text-justify paragraph">
              En général, le bloc hydraulique baigne dans l&apos;huile avec les
              solénoides(à bien contrôller) mais peuvent être éléctroniques
              (électrovannes). <br /> Les défaillances courantes concernent la
              qualité de l&apos;huile et les courts-circuits à haute
              température. <br /> Il est possible de réparer ou de
              reconditionner les mécatroniques.
            </p>
          </div>
          <div className="md:w-1/2">
            <video
              className="rounded-[8px] MB5"
              src="/images/meca1.webm"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
        <span className="separator"></span>
        <div className="">
          <h1 className="titlesFonts ">Réparation Mécatronique</h1>
          <p className="text-justify my-2  paragraph">
            C&apos;est une composante essentielle des boites de vitesses
            automatiques. Pour la plupart des modèles, ce bloc baigne dans
            l&apos;huile, indispensable pour son bon fonctionnement. À
            l&apos;intérieur de ce bloc, des billes circulent, permettant le
            blocage ou le passage des vitesses. Cependant, l&apos;utilisation
            d&apos;une mauvaise huile peut endommager l&apos;ensemble du bloc.
            Lorsque la température de l&apos;huile devient trop élevée, cela
            peut provoquer des courts-circuits. Ces courts-circuits peuvent
            entrainer divers problèmes, tels que la lenteur au passage des
            rapports, des à-coups ou même l&apos;impossibilité de passer à une
            vitesse supérieure. Dans la plupart des cas, lorsqu&apos;il y a un
            problème sur celui-ci, un code défaut va remonter sur la valise
            diagnostic: defaut de pression, défaut moteur embrayage 2 court
            circuit à la masse, rapport de démultiplication incorrect, ratio
            incorrect, rapports incorrects…
          </p>
          <h2 className=" text-gray-700 mb-2">
            Le diagnostic doit inclure plusieurs vérifications:
          </h2>
          <ul
            style={{ paddingLeft: "20px", listStyle: "outside", color: "#000" }}
          >
            <li>
              <p className="text-justify mb-2 paragraph">
                Pression d&apos;huile: sur chacun des solénoïdes ou
                électrovannes.
              </p>
            </li>
            <li>
              <p className="text-justify mb-2 paragraph">
                Solénoïde du convertisseur de couple: assurer son bon
                fonctionnement.
              </p>
            </li>
            <li>
              <p className="text-justify mb-2 paragraph">
                Rapports de démultiplication: vérifier la cohérence et les ratio
                avec les données en temps réel
              </p>
            </li>
            <li>
              <p className="text-justify mb-2 paragraph">
                Température de l&apos;huile de transmission: vérifier la
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
              unoptimized
            />
          </div>
          <div className="md:w-1/2 md:mt-0 mt-12">
            <h1 className="titlesFonts">Réparation du mécatronique </h1>
            <p className="text-justify my-2 paragraph">
              Réparer un mécatronique peut se faire de plusieurs façons. Il est
              possible de réparer la platine ou le calculateur, ce qui relève de
              l&apos;électronique pure. On peut aussi remplacer les solénoïdes
              (soit tous ou uniquement ceux de pression). Il faut aussi vérifier
              létanchéité et remplacer éventuelement les joints (kit joints)
              pour enlever les défauts de pression. Il est préférable (si
              possible) de commencer par le mécatronique avant de démonter la
              boite pour s&apos;assurer que le problème n&apos;est pas
              mécanique. Un diagnostic précis et une réparation efficace
              nécessitent de l&apos;expérience pour bien identifier la source du
              problème. <br /> Pour résumer, il faut toujours dans un premier
              temps verifier le niveau d&apos;huile.
            </p>

            <div className="mt-3">
              <ContactButton />
            </div>
          </div>
        </div>
        <span className="separator"></span>
        <div className="flex flexDirection gap-14 pb-16 flex-col-reverse md:flex-row">
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Calibrage</h1>
            <p className="text-justify my-2 paragraph">
              Dans la plupart des cas, il faut faire un calibrage ou une
              réinitialisation des valeurs auto-adaptatives. Cela peut être
              appelé calibrage, réinitialisation, réglages de base ou
              adaptations. Lorsqu&apos;un module de commande est vierge, un
              clonage ou une programmation en ligne est nécessaire. Nous sommes
              équipés pour les véhicule BMW, Volswagen, Audi, Calculateur
              Renault DC4 (boites EDC),Peugeot. Dans tous les cas, nous
              informons nos clients si nous pouvons réaliser le calibrage ou
              non, afin de ne pas leur faire perdre de temps. Nous orientons
              volontiers nos clients vers nos partenaires si nécessaire. Pour
              résumer, calibrage, étalonage, calibrage des points de touche,
              calibrage des points de léchage désignent tous le même terme et
              font partie de la procedure. <br /> Dans certains cas, il ne vaut
              mieux pas faire de calibrage.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              width={600}
              height={400}
              className="rounded-[8px] MB5"
              src="/images/meca2.png"
              alt=""
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
