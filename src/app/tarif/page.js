"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/BreadCumb";
const pageDescription =
  "Tous les tarifs pour les réparation et les vidanges de boite automatique selon votre modèle de véhicule. ";
const Page = () => {
  const [openFilterDiv, setOpenfilterDiv] = useState(false);

  const openFilter = () => {
    setOpenfilterDiv(true);
  };
  const closeFilter = () => {
    setOpenfilterDiv(false);
  };

  const [modelsData, setModelsData] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [seemore, setseemore] = useState(null);

  const brands = [
    "Alfa Romeo",
    "Audi ",
    "BMW",
    "Chevrolet",
    "Chrylser",
    "Citroen ",
    "Dacia",
    "Fiat",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infinity",
    "Isuzu",
    "Jaguar",
    "Jeep ",
    "Kia",
    "Lancia",
    "Land rover",
    "Lexus",
    "Mercedes ",
    "Mini",
    "Mitsubishi",
    "Nissan",
    "Opel",
    "Peugeot",
    "Pontiac",
    "Porsche",
    "Renault",
    "Rover",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "Subaru",
    "Suzuki",
    "Toyota",
    "Volkswagen",
    "Vovlo ",
  ];

  useEffect(() => {
    // Fetch models data from JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setModelsData(data);
        // console.log(data);
      })

      .catch((error) => console.error("Error fetching models data:", error));
  }, []);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setSelectedModel(null);
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };

  useEffect(() => {
    if (selectedBrand && selectedModel) {
      const matchingModel = modelsData.find(
        (model) =>
          model.marque === selectedBrand && model.model === selectedModel
      );
      if (matchingModel) {
        setseemore(matchingModel);
        // console.log("Model matched:", matchingModel);
      }
    }
  }, [selectedBrand, selectedModel, modelsData]);
  return (
    <section className="px-5 md:px-0">
      <Head>
        <title>tarif réparation vidange boite automatique</title>
        <meta
          name="title"
          content="tarif réparation vidange boite automatique"
        />
        <meta name="description" content={pageDescription} />
      </Head>

      <div className="container mx-auto py-12">
        <Breadcrumb />
      </div>
      <div id="main" className="container mx-auto">
        <div className="pb-16">
          <div className="">
            <h1 className="titlesFonts mb-2">Diagnostic </h1>
            <p className="text-justify mb-2 paragraph">
              Le tarif fixe est de 90 €. nous proposons un diagnostic complet de
              votre boîte automatique. Ce service débute par un diagnostic
              électronique à l&apos;aide d’une des valise correspondante au
              véhicule et à la boite de vitesse correspondante pour identifier
              les codes d&apos;erreur. Cela nous permet d’avoir déjà une
              première indication. Ensuite, nous allons vérifier le niveau et de
              la qualité de l&apos;huile, indispensable pour le bon
              fonctionnement de la boîte. Enfin, nous poussons le diagnostic en
              vérifiant les solénoides de pression par exemple en plus des
              supports moteur, boite ainsi que la partie mécanique ou du moteur
              qui pourrait mettre la boite de vitesse en défaut par exemple.
            </p>
          </div>
          <div className="mt-12">
            <h1 className="titlesFonts mb-2">Vidange </h1>
            <p className="text-justify mb-2 paragraph">
              Une vidange de boite de vitesse automatique,{" "}
              <strong>coûte entre 300 € et 600 €</strong>. Ce tarif peut
              varieren fonction de la quantité et du type d’huile utilisée,
              ainsi que les pièces à remplacer(joints de carter, crépine,
              cartouche externe). Les types d’huile à utiliser peuvent être de
              la « multi ATF », de la « multi CVT », de la ATF 6, de DCTF (pour
              les doubles embrayages), de la « mutli HF » pour les boites
              robotiées. Le coût peut aussi dépendre de l’accessibilité de la
              crépine et de la complexité du modèle de boîte (exemple sur
              certain type de boite BMW ou Porsche, il y a des tubes et d’autre
              pièce à remplacer en plus de la crépine). Le prix comprend la
              main-d&apos;œuvre et tous les composants nécessaires à une vidange
              faite dans les règles de l’art.
            </p>
          </div>
          <div className="mt-12">
            <div className="flex">
              <div className="md:w-1/2 w-3/4">
                <p className="md:text-justify mb-2 paragraph">
                  Exemple de prix sur certain modèle :
                </p>
              </div>
              {openFilterDiv && (
                <div className="md:w-1/2 w-1/5 text-end ">
                  <button className="" onClick={closeFilter}>
                    ✕
                  </button>
                </div>
              )}
            </div>

            <div className="md:flex gap-5">
              <div className="md:w-1/3 md:mb-0 mb-5">
                <button
                  className="border rounded-md w-full py-3"
                  onClick={openFilter}
                >
                  <p>Sélectionner votre véhicule</p>
                </button>
              </div>
              {openFilterDiv && (
                <div className="md:w-2/3">
                  <div className="">
                    {/* <TarifFilter /> */}
                    <div className="w-full">
                      <div className="">
                        <div className="md:flex gap-5">
                          <div className="md:w-1/2 md:mb-0 mb-5">
                            <div className="labandsel2">
                              <label className="formLabel">
                                <p>Marque:</p>
                              </label>
                              <select
                                className="formSelect"
                                onChange={(e) =>
                                  handleBrandChange(e.target.value)
                                }
                                value={selectedBrand || ""}
                              >
                                <option value="" disabled>
                                  <p>Sélectionnez marque</p>
                                </option>
                                {brands?.map((brand) => (
                                  <option key={brand} value={brand}>
                                    <p className="text-black">{brand}</p>
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          {selectedBrand && (
                            <>
                              <div className="md:w-1/2 ">
                                <div className="labandsel2">
                                  <label className="formLabel">
                                    <p>Modèle</p>
                                  </label>
                                  <select
                                    className="formSelect"
                                    onChange={(e) =>
                                      handleModelChange(e.target.value)
                                    }
                                    value={selectedModel || ""}
                                  >
                                    <option value="" disabled>
                                      Sélectionnez modèle
                                    </option>
                                    {modelsData
                                      .filter(
                                        (model) =>
                                          model.marque === selectedBrand
                                      )
                                      .map((model) => (
                                        <option
                                          key={model.model}
                                          value={model.model}
                                        >
                                          {model.model}
                                        </option>
                                      ))}
                                  </select>
                                </div>
                              </div>
                            </>
                          )}
                        </div>

                        {/* modal */}
                        {/* <dialog id="my_modal_3" className="modal">
                          <div className="modal-box bg-white">
                            <form method="dialog">
                             
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <h3 className="font-bold text-lg">
                              More Information
                            </h3>

                            {seemore && (
                              <div className="">
                                <img
                                  src={seemore.picture ? seemore.picture : ""}
                                  alt={seemore.model}
                                />
                                <p>Véhicule sélectionné: {selectedBrand}</p>
                                <p>Selected model : {selectedModel}</p>
                                <p>Description: {seemore.description}</p>
                                <p>Reference: {seemore.ref}</p>
                                <p>Comment: {seemore.comment}</p>
                              </div>
                            )}
                          </div>
                        </dialog> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-full">
            {selectedModel && (
              <div className="w-full mt-5 ">
                <p className=" text-[#3D85D9]">
                  Véhicule sélectionné: {seemore?.desccription}{" "}
                </p>
                {/* <div className="formButnParent">
                            <button
                              className="formBoxButton"
                              onClick={() =>
                                document
                                  .getElementById("my_modal_3")
                                  .showModal()
                              }
                            >
                              See more
                            </button>
                          </div> */}
              </div>
            )}
          </div>
          <div className="mt-12">
            <h1 className="titlesFonts mb-2">
              Réparations des Boîtes de Vitesse Automatiques{" "}
            </h1>
            <p className="text-justify mb-2 paragraph">
              Les coûts de réparation varient en fonction de la complexité de
              l&apos;intervention requise. Les problèmes mineurs tels que les
              défauts électroniques, le remplacement de joints de carter, ou les
              ajustements de niveau d&apos;huile coûtent généralement moins de
              300 €. Des interventions modérées sans démontage complet de la
              boîte, comme le remplacement de certaines pièces internes, sont
              facturées sous les 1000 €. Les réparations majeures nécessitant le
              remplacement d&apos;éléments hydrauliques ou d&apos;un
              convertisseur de couple, sans démonter la boîte, peuvent coûter
              entre 1000 € et 2500 €. Enfin, si une réparation exige le
              démontage complet de la boîte, notamment pour les boîtes équipées
              de double embrayage, les coûts débutent à 1000 €, auxquels
              s&apos;ajoutent le prix des pièces complexes comme le mécatronique
              ou le convertisseur de couple hydraulique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
