"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HomeLeftTab = () => {
  const [parts, setParts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch articles on the client side
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`/article.json`, {
          cache: "force-cache", // Optional: Use 'no-store' for dynamic content
        });
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setParts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArticles();
  }, []);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="h-[100%]">
      {parts?.map((part, index) => (
        <div key={index} className="relative mb-8">
          <Link href={`/ressources/articles/${part.title}`}>
            <Image
              width={400}
              height={200}
              src={part.image}
              alt={part.title}
              className="rounded-md mb-1"
            />
          </Link>
          <Link href={`/ressources/articles/${part.title}`}>
            <h2 className="text-normal text-white text-center capitalize font-medium absolute  left-0 right-0 top-[45%] bg-[#2c80ef8e] py-0">
              {part.title}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeLeftTab;
