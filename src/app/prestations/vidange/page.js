import Breadcrumb from "@/app/components/BreadCumb";
import ContactButton from "@/app/components/ContactButton";
import Head from "next/head";
import Image from "next/image";
const pageDescription = "";
const Page = () => {
  return (
    <section className="px-5 md:px-0">
      <Head>
        <title>vidange et entretien boite de vitesses automatique</title>
        <meta
          name="description"
          content="Nous réalisons l'entretien et la vidange complète des boîtes de vitesse automatique avec joint de carter crépine et cartouche externe avec l'huile homologuée constructeur"
        />
        <meta
          name="title"
          content="vidange et entretien boite de vitesses automatique"
        />
      </Head>
      <div className="hidden">
        <h1>Diagnostic boite EDC Renault Captur</h1>
        <h1>Diagnostic boite EDC Renault Clio 4</h1>
        <h1>Diagnostic boite EDC Renault Megane 3</h1>
        <h1>Diagnostic boite EDC Renault Scenic 3</h1>
        <h1>Diagnostic boite EDC Renault CLio RS</h1>
      </div>
      <div className="container mx-auto py-12">
        <Breadcrumb />
      </div>
      <div id="main" className="container mx-auto">
        <div className="flex gap-14 items-stretch flex-col-reverse md:flex-row">
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Pourquoi vidanger sa BVA ?</h1>
            <p className="text-justify mb-2 paragraph">
              Certaines boîtes de vitesses automatiques sont à convertisseur de
              couple, d&apos;autres à double embrayage. Certaines contiennent
              une crépine interne ou externe, avec ou sans joint de carter.
              Parfois il existe aussi une cartouche externe. La quantité
              d&apos;huile varie selon les boîtes: les doubles embrayages à sec
              nécessitent peu d&apos;huile, tandis que les autres types
              contiennent généralement entre 7 et 10 litres.
            </p>
            <p className="text-justify mb-2 paragraph">
              Il est donc important de lubrifier correctement sa boite de
              vitesse automatique. Une vidange est recommandée tous les 60 000 à
              80 000 km.
            </p>
            <p className="text-justify mb-2 paragraph">
              N’hésitez pas à nous demander conseil.
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
              src="/images/vid1.png"
              alt=""
            />
          </div>
        </div>
        <span className="separator"></span>
        <div className="md:flex gap-14">
          <div className="md:w-3/4">
            <h1 className="titlesFonts">Vidange gravité vs Flushing</h1>
            <p className="text-justify mb-2 paragraph">
              Lorsqu&apos;il s&apos;agit de vidanger votre boîte de vitesses
              automatique, la méthode par flushing se révèle beaucoup plus
              efficace que la vidange par gravité. La vidange par flushing
              utilise une machine spécifique pour injecter de l&apos;huile neuve
              sous pression tout en collectant l&apos;huile usagée. Cela permet
              de remplacer jusqu&apos;à 95-100% de l&apos;huile, contrairement à
              la méthode par gravité qui ne renouvelle qu&apos;environ 70% de
              l&apos;huile (50% sur modèle Jatco par exemple)
            </p>
            <p className="text-justify mb-2 paragraph">
              Le principal avantage de la vidange par flushing est de permettre
              le remplacement intégral de l&apos;huile et de nettoyer le
              convertisseur de couple (si équipé), l&apos;ensemble du système de
              transmission automatique, le refroidisseur d&apos;huile et toutes
              les conduites d&apos;huile. Ce &apos;rinçage complet de la
              boîte&apos; élimine aussi la poussière de métal créée par
              l&apos;usure des pièces.
            </p>
            <p className="text-justify mb-2 paragraph">
              Il suffit de remplir le réservoir d&apos;huile neuve de la
              machine, de connecter les tuyaux aux raccords du radiateur de la
              boîte de vitesses et de lancer le programme. La machine ajuste
              automatiquement le niveau d&apos;huile. Il est important de noter
              que pour une boîte de vitesses automatique (BVA) d&apos;une
              capacité totale de 8 litres, il faut souvent injecter bien plus de
              8 litres d&apos;huile neuve pour atteindre un résultat
              satisfaisant. Plus on injecte d&apos;huile neuve, plus on
              s&apos;approche des 100% de remplacement de l&apos;huile usagée.
            </p>
            <p className="text-justify mb-2 paragraph">
              La vidange par flushing est donc la méthode recommandée pour un
              entretien optimal de votre boîte de vitesses automatique, surtout
              pour les modèles sans carter comme Audi A4/A5/A6/A7/A8, Peugeot
              508, Citroën, Opel, Renault, Volvo, Mini.
            </p>
          </div>
          <div className="md:w-1/3 md:mt-0 mt-12">
            <video
              className="ms-auto  w-full h-[520px] object-cover MT5 rounded-md"
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
            l&apos;huile minérale, les boîtes automatiques utilisent des huiles
            de synthèse, appelées ATF (Automatic Transmission Fluid), obtenues
            par synthèse chimique ou hydrocraquage d’une huile minérale.
            Ceslubrifiants synthétiques, constitués de molécules homogènes,
            offrent des performances supérieures en termes d’utilisation et de
            durée de vie. Ils sont extrêmement fluides à froid et garantissent
            une lubrification optimale des actionneurs hydrauliques.
          </p>
          <p className="text-justify mb-2 paragraph">
            Il existe plusieurs types d’huiles pour les transmissions
            automatiques, notamment la <strong>Multi ATF</strong> , polyvalente
            pour de nombreux véhicules, et l&apos;<strong>ATF 6</strong>,
            spécifique aux boîtes modernes pour une meilleure fluidité à basse
            température. La <strong>Multi CVT</strong> est conçue pour
            lestransmissions à variation continue. Les huiles{" "}
            <strong>DCTF</strong> sont destinées aux transmissions à double
            embrayage, garantissant des changements de vitesses rapides et
            efficaces. La <strong>Multi HF</strong> est une huile surtout
            utilisée pour les boites robotisée ou encore pour les mécatroniques
            des DSG7 (DQ200). La <strong>Trans ATF</strong>, de couleur
            transparente, est surtout utilisée pour les modèles de boites à
            convertisseur assez récents notament sur BMW et sur les modèles les
            assez récents.
          </p>
          <p className="text-justify mb-2 paragraph">
            Il est important de bien respecter les préconisations du
            constructeur lors du choix de l’huile. Par exemple, l’huile{" "}
            <strong>Dexron VI®</strong> convient aux véhicules récents, offrant
            une excellente fluidité à basse température et une réduction de la
            consommation de carburant. Elle est adaptée aux marques américaines,
            asiatiques et européennes. L’huile <strong>ATF+4®</strong>, formulée
            pour les transmissions Chrysler, améliore les changements de
            vitesse, réduit les Tremblements et offre une protection contre
            l&apos;usure et la corrosion. Pour maintenir votre boîte de vitesses
            automatique en parfait état, il est important de procéder à des
            vidanges régulières, tous les 60 000 à 80 000 km. La méthode de
            vidange par flushing, utilisant une machine spécifique, garantit un
            remplacement quasi complet de l&apos;huile, assurant ainsi des
            performances optimales.
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
