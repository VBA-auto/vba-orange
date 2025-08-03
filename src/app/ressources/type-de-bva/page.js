import Breadcrumb from "@/app/components/BreadCumb";
import CascadingDropdown from "@/app/components/checkBVA";
import Head from "next/head";
const pageDescription =
  "En séléctionnant votre véhicule, la marque, l'année, le modèle vous trouverez la boite automatique correspondante à votre véhicule";

const Page = () => {
  return (
    <section className="checkBVACont px-5 md:px-0">
      <Head>
        <title>trouver votre boite automatique par véhicule</title>
        <meta
          name="title"
          content="trouver votre boite automatique par véhicule"
        />
        <meta name="description" content={pageDescription} />
      </Head>
      <div className="container mx-auto py-12">
        <Breadcrumb />
      </div>

      <div id="main" className="container mx-auto ">
        <div className="md:flex gap-14">
          <div className="md:w-1/2"> </div>
          <div className="md:w-1/2">
            <h2 className="text-xl text-black font-semibold mb-2">
              Trouvez votre boite automatique
            </h2>
          </div>
        </div>
        <div className="md:flex  pb-36 gap-14">
          <div className="md:w-1/2">
            <video
              className="rounded-[8px]"
              src="/images/repara1.webm"
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className="md:w-1/2 md:mt-0 mt-12">
            <div className="compareParent">
              <CascadingDropdown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
