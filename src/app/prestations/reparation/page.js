import Head from "next/head";
import Image from "next/image";
import Breadcrumb from "@/app/components/BreadCumb";
import ContactButton from "@/app/components/ContactButton";
const pageDescription =
  "Nous réparons, les boites de vitesse automatiques à convertisseur de couple, double embrayage, variation, continue et boite robotisée";
const Page = () => {
  return (
    <section className="px-5 md:px-0">
      <Head>
        <title>réparation boite de vitesse automatique</title>
        <meta name="description" content={pageDescription} />
        <meta name="title" content="réparation boite de vitesse automatique" />
      </Head>
      <div className="hidden">
        <h1>reparation boite automatique </h1>
        <h1>reparation boite automatique Renault</h1>
        <h2>reparation boite automatique EDC Renault Captur</h2>
        <h2>reparation boite automatique EDC Renault Clio 4</h2>
        <h2>reparation boite automatique EDC Renault Megane 3</h2>
        <h2>reparation boite automatique EDC Renault Scenic 3</h2>
        <h2>reparation boite automatique EDC Renault CLio RS</h2>
      </div>
      <div className="container mx-auto py-12">
        <Breadcrumb />
      </div>
      <div id="main" className="container mx-auto">
        <div className="flex gap-14 items-stretch flex-col-reverse md:flex-row">
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Les boites CVT à variation continue</h1>
            <p className="text-justify mb-2 paragraph">
              Les boites de vitesses CVT, telles que la Mercedes <b>722.8</b>{" "}
              des classes A et B et la Multitronic d&apos;Audi, ainsi que la{" "}
              <b>HF35(CVT) </b>des Ford Mondeo Hybrid et autres nécessitent des
              outils spécialisés pour leur réparation. Ces systèmes utilisent
              une courroie segmentée en acier reliant des pignons primaires et
              secondaires, permettant un ajustement continu des rapports.
            </p>
            <p className="text-justify mb-2 paragraph">
              Il existe aussi des problèmes sur l’embrayage situé juste avant le
              système CVT. Pour remplacer et modifier un système CVT, il est
              important d’avoir un outil spécial pour ne pas endommager la
              transmission. <br /> Les passages de vitesses sont en réalité des{" "}
              <b>“ratios”</b>.
            </p>
            <div className="mt-5">
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
            <Image
              width={600}
              height={200}
              className="rounded-[8px]"
              src="/images/repara2.png"
              alt=""
            />
          </div>
          <div className="md:w-1/2 md:mt-0 mt-12">
            <h1 className="titlesFonts">Les boites robotisées</h1>
            <p className="text-justify mb-4 paragraph">
              Les boites robotisées ou pilotées, comme
              la &apos;Powershift&apos; chez Renault (Modus, Twingo) et Fiat,
              ainsi que sur les anciennes Peugeot 5008, sont constituées
              d&apos;un embrayage, d&apos;une butée d&apos;embrayage, et
              d&apos;un robot(comprenant souvent un accumulateur) qui automatise
              le changement de vitesses et la gestion de l&apos;embrayage. Ce
              sont en réalité des boites manuelles pilotées avec donc moins de
              confort qu’une « vraie» boite automatique: il est fréquent de «
              sentir » l’à-coup du passage de la vitesse. Il existe sur certains
              nouveaux modèles des boites robotisées à double embrayage. Ces
              boites nécessitent une maintenance régulière pour préserver leur
              performance et leur fiabilité.
            </p>
            <p className="text-justify mt-1 paragraph">
              Pour résumer, il est possible de réparer le robot en focntion
              codes défauts et symptômes (moins coûteux que neuf).
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
              général les moteurs plus puissants). À l&apos;inverse, les boites
              à embrayage sec, comme les <strong>DSG7</strong> (DQ200) et la
              <strong> 6DCT250</strong> de GETRAG (appelée{" "}
              <strong>boite EDC ou DC4</strong> ), fonctionnent avec très peu de
              lubrification: une partie dans le mécatronique et à peine dans la
              partie mécanique. L&apos;entretien ou la réparation de ces boites
              demande des outils spécifiques, tels que ceux fournis par la
              marque LUK. Le plus important pour réparer ces boites est
              d&apos;avoir le bon outillage pour pouvoir remplacer ces embrayage
              que ce soit un embrayage sec ou mouillé.
            </p>
            <div className="">
              <ContactButton />
            </div>
          </div>
          <div className="md:w-1/2 md:mt-0 mt-12">
            <Image
              width={600}
              height={200}
              className="rounded-[8px] MB5"
              src="/images/repara3.png"
              alt=""
            />
          </div>
        </div>
        <span className=" separator"></span>
        <div className=" pb-16">
          <h1 className="titlesFonts md:text-center mb-5">
            {" "}
            Les boites à convertisseur de couple hydraulique
          </h1>
          <div className="md:flex   gap-5">
            <div className="md:w-1/2">
              <p className="text-justify mb-2 paragraph">
                Les boites de vitesses équipées de convertisseurs de couple
                hydraulique, comme les modèles ZF{" "}
                <strong>6HP21, 6HP26, 8HP</strong> souvent montées sur les BMW,
                ainsi que les Aisin TF80, <strong>7G-Tronic</strong> ou encore
                les <strong>9G-Tronic</strong>(Mercedes) les DP0 ou AL4
                (Renault/Peugeot) sont réputées pour leur robustesse et leur
                capacité à gérer la puissance du moteur de manière fluide. Le
                convertisseur permet à la voiture de démarrer sans à-coups;
                <strong>
                  {" "}
                  si la voiture patine ou si les tours du moteur oscillent
                  anormalement
                </strong>
                , cela peut indiquer un problème avec celui-ci. Réparer ces
                boites nécessite un savoir-faire technique et des outils
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
            <div className="md:w-1/2 md:my-0 my-12">
              <Image
                width={600}
                height={200}
                className="rounded-[8px] h-[545px] mx-auto MB5 MT5"
                src="/images/repara4.jpeg"
                alt=""
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-justify mb-2 paragraph">
                Le dispositif du convertisseur agit comme un embrayage qui
                permet de multiplier le couple entre les vitesses d&apos;entrée
                et de sortie, grâce à un mécanisme hydraulique où toutes les
                pièces internes baignent dans de l’huile, souvent la même que
                celle utilisée pour la boite de vitesses automatique (BVA), à
                quelques exceptions près. Cette caractéristique isole la boite
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
                <strong>des boites Multitronic </strong>
                (01J/0AN ou 0AW).
              </p>
              <div className="mt-5">
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
