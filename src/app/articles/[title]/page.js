"use client";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ArticlePage = ({ params }) => {
  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);
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

  // const renderParagraphWithBoldAndLinks = (paragraph) => {
  //   return paragraph.split("**").map((part, index) => {
  //     if (index % 2 === 0) {
  //       // Normal text or linked word
  //       return part
  //         .split(" ")
  //         .map((word, index) => {
  //           if (word.startsWith("A-") && word.endsWith("-A")) {
  //             // Linked word
  //             const [_, url, linkedWord] = word.split("-");
  //             return (
  //               <Link href={url} key={index}>
  //                 <span className="font-semibold text-[#f1b04e]">
  //                   {linkedWord}&nbsp;
  //                 </span>
  //               </Link>
  //             );
  //           } else {
  //             // Regular text
  //             return <span key={index}>{word} </span>;
  //           }
  //         })
  //         .concat(" "); // Add a space after each word
  //     } else {
  //       // Bold text
  //       return <strong key={index}>{part}</strong>;
  //     }
  //   });
  // };

  return (
    <section className="article-container">
      {article ? (
        <>
          <div className="relative mx-auto">
            <img
              className="w-full md:h-screen  videoOverlay relative"
              src={article.image}
              alt=""
            />
            <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 positionTitle">
              {article.title}
            </h1>
          </div>
          <div
            id="main"
            className="container mx-auto min-h-screen  items-center"
          >
            <div className="md:flex gap-5 pb-16 pt-8">
              <div className="md:w-[70%]">
                {/* <img className="" src={article.image} alt="" /> */}
                <h1 className="titlesFonts my-3 capitalize">{article.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: article.paragraph }} />
                <Link href="#">
                  <button className="bg-[#f1b04e]  text-white py-2.5 px-5 mt-5 rounded-md hover:bg-[#f1b04ea6] hover:text-white">
                    Contactez-nous
                  </button>
                </Link>
              </div>
              <div className="md:w-[30%] md:h-[90vh] sticky top-12">
                <div className="border md:h-[90vh] overflow-y-scroll p-3 articleTab">
                  <h1 className="mb-3">More article</h1>
                  {related?.map((related, index) => (
                    <Link href={`/articles/${related.title}`}>
                      <div
                        key={index}
                        className="md:flex md:gap-3 mb-3 artiEach"
                      >
                        <div className="md:w-1/2">
                          <img
                            className="artChildImg"
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

                          <button className="text-[#f1b04e]">Lire plus</button>
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
      <Footer />
    </section>
  );
};

export default ArticlePage;
