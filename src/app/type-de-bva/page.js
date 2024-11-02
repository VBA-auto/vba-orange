"use client";
import Head from "next/head";

import CascadingDropdown from "../components/checkBVA";
import Breadcrumb from "../components/BreadCumb";

const Page = () => {
  return (
    <section className="checkBVACont">
      <Head>
        <title>Automatic Transformation</title>
        {/* <meta name="description" content={pageDescription} /> */}
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
        <div className="md:flex  pb-24 gap-14">
          <div className="md:w-1/2">
            <video
              className="rounded-[8px]"
              src="/images/repara1.webm"
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className="md:w-1/2">
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
