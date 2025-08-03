"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TarifFilter = () => {
  const [modelsData, setModelsData] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [seemore, setseemore] = useState(null);

  const brands = ["Toyota", "Ford", "Tesla"];

  useEffect(() => {
    // Fetch models data from JSON file
    fetch("/tarifFilter.json")
      .then((response) => response.json())
      .then((data) => setModelsData(data))
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
        console.log("Model matched:", matchingModel);
      }
    }
  }, [selectedBrand, selectedModel, modelsData]);

  return (
    <div>
      <section className="">
        <div id="main" className="container mx-auto ">
          <div className="w-full">
            <div className="">
              <div className="flex gap-5">
                <div className="md:w-1/2">
                  <div className="labandsel">
                    <label className="formLabel">Marque:</label>
                    <select
                      className="formSelect"
                      onChange={(e) => handleBrandChange(e.target.value)}
                      value={selectedBrand || ""}
                    >
                      <option value="" disabled>
                        Sélectionnez marque
                      </option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {selectedBrand && (
                  <>
                    <div className="md:w-1/2">
                      <div className="labandsel">
                        <label className="formLabel">Modèle:</label>
                        <select
                          className="formSelect"
                          onChange={(e) => handleModelChange(e.target.value)}
                          value={selectedModel || ""}
                        >
                          <option value="" disabled>
                            Sélectionnez modèle
                          </option>
                          {modelsData
                            .filter((model) => model.marque === selectedBrand)
                            .map((model) => (
                              <option key={model.model} value={model.model}>
                                {model.model}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="md:w-full">
                {selectedModel && (
                  <div className="w-full mt-3">
                    <p>Véhicule sélectionné: {seemore?.description} </p>
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

              {/* modal */}
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white">
                  <form method="dialog">
                    {/* If there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">More Information</h3>

                  {seemore && (
                    <div className="">
                      <Image
                        width={400}
                        height={400}
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
              </dialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TarifFilter;
