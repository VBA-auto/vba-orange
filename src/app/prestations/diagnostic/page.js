import Breadcrumb from "@/app/components/BreadCumb";
import ContactButton from "@/app/components/ContactButton";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const pageDescription =
  "diagnostics de boite de vitesses automatiques. diagnostic sur la valise avec controle de la boite, du mecatronique, de l embrayage et des disques de friction";
const Page = () => {
  return (
    <section className="px-5 md:px-0">
      <Head>
        <title>diagnostic boite de vitesse automatique</title>
        <meta name="description" content={pageDescription} />
        <meta name="title" content="diagnostic boite de vitesse automatique" />
        <meta
          title="description"
          content="diagnostic boite de vitesse automatique"
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
            <div className="">
              <h1 className="titlesFonts mb-2">Diagnostic mécanique</h1>
              <p className="text-justify mb-2 paragraph">
                Le diagnostic des boites automatiques commence par la lecture
                des codes d&apos;erreur avec une valise diagnostique. Cependant,
                ce n&apos;est qu&apos;une partie du processus. Nous vérifions
                également le <strong>niveau, la qualité de l&apos;huile</strong>{" "}
                et éventuellement la <strong>présence de limaille</strong>. La
                partie « <strong>mécatronique</strong>» ou « bloc de contrôle
                hydraulique » est important: il faut vérifier sa pression.
              </p>
              <p className="text-justify mb-2 paragraph">
                Ces contrôles nous aident à évaluer l&apos;état de la boite et à
                estimer les réparations. Si ces premiers tests ne suffisent pas
                à identifier les problèmes, nous procédons à des inspections
                plus poussées, comme le démontage de la boite. <br /> Nous
                effectuons des contrôles complémentaires, comme le démontage du
                carter.
              </p>
            </div>
            <div className="mt-5">
              <ContactButton />
            </div>
          </div>
          <div className="md:w-1/2 flex">
            <Image
              width={600}
              height={200}
              className="rounded-[8px] md:h-[350px]"
              src="/images/diag1.jpeg"
              alt=""
            />
          </div>
        </div>
        <span className="separator"></span>
        <div className="md:flex flexDirection gap-8">
          <div className="md:w-1/2 flex">
            <Image
              className="rounded-[8px] md:h-[220px] h-[177px]"
              width={600}
              height={400}
              src="/images/diag2.png"
              alt=""
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-between md:mt-0 mt-12">
            <div>
              <h1 className="titlesFonts mb-2">La valise </h1>
              <p className="text-justify mb-2 paragraph">
                Les codes défaut obtenus avec la valise offrent des indications
                mais il faut bien connaitre les différents modèles de boites et
                avoir de l&apos;expérience dans leur interprétation. Les outils
                diagnostiques varient également entre les marques comme{" "}
                <strong>Autel, Launch, Flex, Delphi</strong>, chacun ayant ses
                spécificités. Comprendre ces différences et les &apos;petits
                secrets&apos; de chaque système est indispensable afin de bien
                cerner le problème. Vous trouverez dans ce lien un récapitulatif
                des codes défauts:{" "}
                <Link
                  className="text-[#2C80EF]"
                  href="/ressources/aide-en-ligne"
                >
                  https://laboiteauto.com/aide-en-ligne.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <span className="separator"></span>
        <div className="flex gap-14 items-stretch flex-col-reverse md:flex-row">
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="titlesFonts mb-2">Voyant tableau de bord</h1>
              <p className="text-justify mb-2 paragraph">
                <strong>&apos;Boite de vitesse à contrôler&apos;</strong>,
                &apos;Défaut boite de vitesse, aller à l&apos;atelier&apos;, ou
                encore &apos;surchauffe boite de vitesse&apos;. Ces alertes
                pouvant apparaitre dans des véhicules de marques BMW, Audi,
                Volkswagen, Mercedes, Peugeot, Renault, Toyota ou autre
                indiquent évidement un problème avec la transmission
                automatique. Il faut noter que dans environ 10% des cas, cela
                peut aussi être lié à un problème moteur, ABS ou autre. Il est
                donc essentiel de ne pas ignorer ces avertissements et de faire
                un diagnostic rapidement. L’écran de contrôle ou le message
                d’erreur peut différent en fonction des marques. <br /> Chaque
                message est différent en fonction du véhicule.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex">
            <Image
              className="rounded-[8px] MB5"
              width={700}
              height={400}
              src="/images/diag3.jpeg"
              alt=""
            />
          </div>
        </div>
        <span className="separator"></span>

        <div className="pb-16">
          <h1 className="titlesFonts">En conclusion</h1>
          <p className="text-justify mb-2 paragraph">
            La boite de vitesse automatique est composée de nombreux éléments
            mécaniques, hydraulique et/ou éléctronique chacun jouant un rôle
            dans son fonctionnement. Parmi ces composants, on trouve le
            convertisseur de couple hydraulique, les disques de friction, les
            disques en métal, les bagues en bronze, le(s) joint(s) de carter,
            l&apos;embrayage(simple ou double), le bloc de contrôle hydraulique,
            les solénoïdes de pression, les synchros…etc. Il faut bien connaitre
            la boite sur laquelle on va réaliser le diagnostic:{" "}
            <Link className="text-[#2C80EF]" href="/ressources/type-de-bva">
              https://laboiteauto.com/type-de-bva.
            </Link>{" "}
            Deux actions sont essentielles pour un diagnostic précis:
            d&apos;abord, il faut connaitre en détail les composants de la boite
            de vitesse sur laquelle on intervient pour pouvoir identifier
            correctement les problèmes potentiels.
          </p>
          <p className="text-justify mb-2 paragraph">
            Il faut ensuite effectuer un diagnostic éléctronique avec la valise.
            Il faut vérifier les niveaux d&apos;huile, de la crépine (ou
            cartouche externe parfois). Inspecter tous les supports moteur et
            boite de vitesse. Ces vérifications permettent d&apos;assurer un
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
