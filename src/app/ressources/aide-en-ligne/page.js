"use client";
import AideenLigneSearch from "@/app/components/AideEnLigneSearch";
import Breadcrumb from "@/app/components/BreadCumb";
import ContactButton from "@/app/components/ContactButton";
import Head from "next/head";
const pageDescription =
  "Taper ici le code erreur que vous avez trouver sur votre valise et nous allons vous aider, vous orienter pour trouver la panne en fonstion du code défaut.";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    fetch("/defCode.json")
      .then((res) => res.json())
      .then((data) => {
        setCodes(data);
      });
  }, []);

  const generateH2Tags = () => {
    return codes.map((code, index) => (
      <h2 className="hidden" key={index}>
        {code.code}
      </h2>
    ));
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCodes, setFilteredCodes] = useState([]);
  const [noMatch, setNoMatch] = useState(false);

  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase().trim();
    const exactMatch = codes.find(
      (code) => code.code.toLowerCase() === searchTermLowerCase
    );
    if (exactMatch) {
      setFilteredCodes([exactMatch]);
      setNoMatch(false);
    } else {
      setFilteredCodes([]);
      setNoMatch(true);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClickSearch = () => {
    handleSearch();
  };

  const [selectedCode, setSelectedCode] = useState(null);

  const toggleRecommendation = (code) => {
    setSelectedCode(selectedCode === code ? null : code);
  };

  return (
    <section className="px-5 md:px-0">
      <Head>
        <title>aide code erreur boite automatique diagnostic</title>
        <meta
          name="title"
          content="aide code erreur boite automatique diagnostic"
        />
        <meta name="description" content={pageDescription} />
      </Head>
      <div className="hidden">
        <h1>code defaut boite automatique</h1>
        <h2>court circuit moteur embrayage 1</h2>
        <h2>court circuit moteur embrayage 2</h2>
        <h2>moteur embrayage 1 panne éléctrique</h2>
        <h2>moteur embrayage 2 panne éléctrique</h2>
      </div>
      <div className="container mx-auto py-12">
        <Breadcrumb />
      </div>
      <div id="main" className="container mx-auto">
        <div className="md:flex flexDirection md:h-[500px]  pb-16 gap-14">
          <div className="md:w-1/2">
            <h1 className="titlesFonts">Aide En Ligne</h1>
            <p className="text-justify my-2">
              Bienvenue sur notre page d&apos;aide en ligne.
            </p>
            <p className="text-justify">
              Entrez le code défault indiqué sur votre valise diagnostic. Vous
              trouverez une description du défault et des indications pour le
              résoudre. Ce système (à titre indicatif) vous aide à identifier la
              source du problème et peut éventuellement vous guider pour
              effectuer les réparations nécessaires.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* <div className="">
              <p className="">Chercher un code défault</p>
              <div className="">
                <input
                  type="text"
                  placeholder="Exemple code : P0700"
                  value={searchTerm}
                  onChange={handleChange}
                  className="w-full py-3 px-2 bg-transparent border border-[#2c80ef] mt-5"
                />

                <div className="mt-7">
                  <button
                    onClick={handleClickSearch}
                    className="px-8 text-[15px] py-2 border border-[#2c80ef]  text-[#2c80ef] hover:bg-[#2c80ef] hover:text-white hover:border rounded-md"
                  >
                    Rechercher
                  </button>
                </div>
                <div className="">
                  <div className="">
                    {filteredCodes.length > 0 ? (
                      <div className="bg-white mt-5 p-4 rounded-lg shadow-xl  text-lg ">
                        {filteredCodes.map((code) => (
                          <div
                            key={code.code}
                            className=" p-4 border rounded-lg border-orangevba"
                          >
                            <p className="font-bold text-md text-[16px] text-[#374151]">
                              {code.code}
                            </p>
                            <p
                              className="mb-2 mt-1 text-[15px] "
                              style={{ lineHeight: "22px" }}
                            >
                              {code.description}
                            </p>

                            {selectedCode === code.code && (
                              <span className="text-[14px]">
                                <br />
                                <p
                                  style={{
                                    lineHeight: "22px",
                                    marginTop: "5px",
                                  }}
                                >
                                  {code.aide}
                                </p>
                              </span>
                            )}
                            <div className="flex items-center mt-5">
                              <ContactButton />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : noMatch ? (
                      <div className="bg-white mt-5 p-4 rounded-lg shadow-xl">
                        <p className=" mb-2">CODE DÉFAUT INCONNU</p>
                        <p>Le code défaut saisi est inconnu</p>
                        <p className="mb-4">
                          Pour plus d&apos;informations, merci de nous contacter
                        </p>
                        <ContactButton />
                        {generateH2Tags()}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div> */}
            <div className="">
              <AideenLigneSearch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
