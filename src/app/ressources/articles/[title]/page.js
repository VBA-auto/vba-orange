"use client";
import ContactButton from "@/app/components/ContactButton";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ArticlePage = ({ params }) => {
  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);
  // useEffect(() => {
  //   const scrollToMain = () => {
  //     const mainSection = document.getElementById("main");
  //     if (mainSection) {
  //       mainSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  //   const scrollTimeout = setTimeout(scrollToMain, 1000);

  //   return () => clearTimeout(scrollTimeout);
  // }, []);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch("/article.json");
        const data = await response.json();
        setRelated(data);
        const foundArticle = data.find(
          (article) => article.title === params.title
        );
        setArticle(foundArticle);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [params.title]);
  return (
    <section className="article-container px-5 md:px-0">
      {article ? (
        <>
          {/* <div className="relative mx-auto">
            <Image
              width={400}
              height={400}
              className="w-4/5 mx-auto md:h-[80vh]  videoOverlay relative"
              src={article.image}
              alt=""
            />
            <h1 className=" absolute w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
              {article.title}
            </h1>
          </div> */}
          <div
            id="main"
            className="container mx-auto min-h-screen  items-center"
          >
            <div className="md:flex gap-5 pb-16 md:pt-16">
              <div className="md:w-[70%]">
                {/* <img className="" src={article.image} alt="" /> */}
                <div className="relative mx-auto">
                  <Image
                    width={900}
                    height={400}
                    className="w-full object-cover rounded-md videoOverlay relative"
                    src={article.image}
                    alt=""
                  />
                  <h1 className=" absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
                    {article.title}
                  </h1>
                </div>
                <h1 className="titlesFonts my-3 capitalize">{article.title}</h1>
                <p
                  className="text-justify"
                  dangerouslySetInnerHTML={{ __html: article.paragraph }}
                />
                <div className="mt-5">
                  <ContactButton />
                </div>
              </div>
              <div className="md:w-[30%] md:h-[70vh] sticky top-20 md:mt-0 mt-12">
                <div className="border md:h-[75vh] overflow-y-scroll p-3 rounded-md articleTab">
                  <h1 className="mb-3">Plus d&apos;articles</h1>
                  {related?.map((related, index) => (
                    <Link
                      key={index}
                      href={`/ressources/articles/${related.title}`}
                    >
                      <div
                        key={index}
                        className="md:flex md:gap-3 mb-3 artiEach"
                      >
                        <div className="md:w-1/2">
                          <Image
                            width={400}
                            height={400}
                            className="artChildImg rounded-md"
                            src={related.image}
                            alt=""
                          />
                        </div>
                        <div className="md:w-1/2">
                          <h2 className="font-medium capitalize ">
                            {related.title}
                          </h2>
                          <p
                            className="mt-1 mb-1 text-[14px]"
                            dangerouslySetInnerHTML={{
                              __html:
                                related.excerpt.length > 30
                                  ? `${related.excerpt.slice(0, 30)} ...`
                                  : related.excerpt,
                            }}
                          />

                          <button className="text-[#2C80EF] text-[14px]">
                            Lire plus...
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default ArticlePage;
