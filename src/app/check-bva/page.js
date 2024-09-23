"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import CascadingDropdown from "../components/checkBVA";

const Page = () => {
  useEffect(() => {
    const scrollToMain = () => {
      const mainSection = document.getElementById("main");
      if (mainSection) {
        mainSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const scrollTimeout = setTimeout(scrollToMain, 1000);

    return () => clearTimeout(scrollTimeout);
  }, []);

  const [modelsData, setModelsData] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [seemore, setseemore] = useState(null);

  const brands = [
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Borg Warner Marine",
    "Buick",
    "Chevrolet",
    "Chrysler-Plymouth",
    "Citreon",
    "Dacia",
    "Daewoo",
    "Daimler",
    "Dodge",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Isuzu",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lancia",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Lotus",
    "Maserati",
    "Mazda",
    "Mercedes-AMG",
    "Mercedes-Benz",
    "Mercury",
    "Mini",
    "Mitsubishi",
    "Nissan",
    "Opel",
    "Peugeot",
    "Pontiac",
    "Porsche",
    "Renault",
    "Rolls Royce",
    "Rover",
    "Saab",
    "Seat",
    "Skoda",

    "Subaru",
    "Suzuki",
    "Toyota",
    "Volkswagen",
    "Volvo",
  ];

  useEffect(() => {
    // Fetch models data from JSON file
    fetch("/checkBVA.json")
      .then((response) => response.json())
      .then((data) => setModelsData(data))
      .catch((error) => console.error("Error fetching models data:", error));
  }, []);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setSelectedModel(null);
    setSelectedYear(null);
    setSelectedVersion(null);
    // setSelectedMachine(null);
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
    setSelectedYear(null);
    setSelectedVersion(null);
    // setSelectedMachine(null);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedVersion(null);
    // setSelectedMachine(null);
  };

  const handleVersionChange = (version) => {
    setSelectedVersion(version);
    // setSelectedMachine(null);
  };
  useEffect(() => {
    if (selectedBrand && selectedModel && selectedYear && selectedVersion) {
      const matchingModel = modelsData[selectedBrand]?.find(
        (model) => model?.name === selectedModel
      );
      if (matchingModel) {
        setseemore(matchingModel);
        console.log("Model matched:", matchingModel);
      }
    }
  }, [selectedBrand, selectedModel, selectedYear, selectedVersion, modelsData]);
  return (
    <section className="checkBVACont">
      <Head>
        <title>Automatic Transformation</title>
        {/* <meta name="description" content={pageDescription} /> */}
      </Head>

      <div className="relative mx-auto">
        <img
          className="videoOverlay relative"
          src="/images/cookies.png"
          alt=""
        />
        <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
          Type de BVA
        </h1>
      </div>
      <div id="main" className="container mx-auto ">
        <div className="md:flex gap-14 pt-24">
          <div className="md:w-1/2"></div>
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
              src="/images/repara1.mp4"
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
      <Footer />
    </section>
  );
};

export default Page;
