"use client";
import { useState, useEffect } from "react";

const CascadingDropdown = () => {
  const [marques, setMarques] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [types, setTypes] = useState([]);
  const [produits, setProduits] = useState([]);

  const [selectedBrandId, setSelectedBrandId] = useState("");
  const [selectedBrandName, setSelectedBrandName] = useState("");
  const [selectedModelId, setSelectedModelId] = useState("");
  const [selectedModelName, setSelectedModelName] = useState("");
  const [selectedYearId, setSelectedYearId] = useState("");
  const [selectedYearRange, setSelectedYearRange] = useState("");
  const [selectedTypeId, setSelectedTypeId] = useState("");
  const [selectedTypeName, setSelectedTypeName] = useState("");

  const [filteredModels, setFilteredModels] = useState([]);
  const [filteredYears, setFilteredYears] = useState([]);
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const marquesRes = await fetch("/marque.json");
        const marquesData = await marquesRes.json();
        setMarques(marquesData);

        const modelsRes = await fetch("/model.json");
        const modelsData = await modelsRes.json();
        setModels(modelsData);

        const yearsRes = await fetch("/years.json");
        const yearsData = await yearsRes.json();
        setYears(yearsData);

        const typesRes = await fetch("/types.json");
        const typesData = await typesRes.json();
        setTypes(typesData);

        const produitsRes = await fetch("/produit.json");
        const produitsData = await produitsRes.json();
        setProduits(produitsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedBrandId) {
      const modelsForBrand = models.filter(
        (model) => model?.marque_id?.trim() === selectedBrandId?.trim()
      );
      setFilteredModels(modelsForBrand);
      setSelectedModelId("");
      setSelectedModelName("");
      setSelectedYearId("");
      setSelectedYearRange("");
      setSelectedTypeId("");
      setSelectedTypeName("");
      setProductDetails(null);
    }
  }, [selectedBrandId, models]);

  useEffect(() => {
    if (selectedModelId) {
      const yearsForModel = years.filter(
        (year) => year?.model_id?.trim() === selectedModelId?.trim()
      );
      setFilteredYears(yearsForModel);
      setSelectedYearId("");
      setSelectedYearRange("");
      setSelectedTypeId("");
      setSelectedTypeName("");
      setProductDetails(null);
    }
  }, [selectedModelId, years]);

  useEffect(() => {
    if (selectedYearId) {
      const typesForYear = types.filter(
        (type) => type?.years_id?.trim() === selectedYearId?.trim()
      );
      setFilteredTypes(typesForYear);
      setSelectedTypeId("");
      setSelectedTypeName("");
      setProductDetails(null);
    }
  }, [selectedYearId, types]);

  useEffect(() => {
    if (selectedTypeId) {
      const trimmedSelectedType = selectedTypeId.trim();
      const productForType = produits.find(
        (produit) => produit?.types_id?.trim() === trimmedSelectedType
      );
      setProductDetails(productForType || null);
    }
  }, [selectedTypeId, produits]);

  return (
    <div>
      <div className="compareCont">
        <div className="labandsel">
          <label className="formLabel">Marque:</label>
          <select
            className="formSelect"
            onChange={(e) => {
              const selectedId = e.target.value;
              const selectedName =
                marques.find((marque) => marque.marque_id === selectedId)
                  ?.brandName || "";
              setSelectedBrandId(selectedId);
              setSelectedBrandName(selectedName);
            }}
            value={selectedBrandId}
          >
            <option value="">Sélectionnez marque</option>
            {marques.map((marque) => (
              <option key={marque.marque_id} value={marque.marque_id}>
                {marque.brandName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedBrandId && (
        <div className="compareCont">
          <div className="labandsel">
            <label className="formLabel">Modèle:</label>
            <select
              className="formSelect"
              onChange={(e) => {
                const selectedId = e.target.value;
                const selectedName =
                  models.find((model) => model.model_id === selectedId)
                    ?.modelName || "";
                setSelectedModelId(selectedId);
                setSelectedModelName(selectedName);
              }}
              value={selectedModelId}
            >
              <option value="">Sélectionnez modèle</option>
              {filteredModels.map((model) => (
                <option key={model.model_id} value={model.model_id}>
                  {model.modelName}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {selectedModelId && (
        <div className="compareCont">
          <div className="labandsel">
            <label className="formLabel">Année:</label>
            <select
              className="formSelect"
              onChange={(e) => {
                const selectedId = e.target.value;
                const selectedRange =
                  years.find((year) => year.years_id === selectedId)?.years ||
                  "";
                setSelectedYearId(selectedId);
                setSelectedYearRange(selectedRange);
              }}
              value={selectedYearId}
            >
              <option value=""> Sélectionnez année</option>
              {filteredYears.map((year) => (
                <option key={year.years_id} value={year.years_id}>
                  {year.years}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {selectedYearId && (
        <div className="compareCont">
          <div className="labandsel">
            <label className="formLabel">Année:</label>
            <select
              className="formSelect"
              onChange={(e) => {
                const selectedId = e.target.value;
                const selectedName =
                  types.find((type) => type.types_id === selectedId)?.types ||
                  "";
                setSelectedTypeId(selectedId);
                setSelectedTypeName(selectedName);
              }}
              value={selectedTypeId}
            >
              <option value="">Sélectionnez année</option>
              {filteredTypes.map((type) => (
                <option key={type.types_id} value={type.types_id}>
                  {type.types}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {productDetails && (
        <>
          <div className="formBox">
            <p>
              <span className="text-black font-medium">Produit</span> :{" "}
              {productDetails?.title}
            </p>
            <p>
              <span className="text-black font-medium">Reference</span> :{" "}
              {productDetails?.ref}
            </p>
            <p>
              <span className="text-black font-medium">Fabricant</span> :{" "}
              {productDetails?.description}
            </p>
            <p>
              <span className="text-black font-medium">Crépine</span> :{" "}
              {productDetails?.crépine}
            </p>
            <p>
              <span className="text-black font-medium">Commentaire</span> :{" "}
              {productDetails?.commentaire}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CascadingDropdown;
