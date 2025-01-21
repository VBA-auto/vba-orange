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
        const response = await fetch(`https://laboiteauto.com/article.json`, {
          cache: "force-cache", // Optional: Use 'no-store' for dynamic content
        });
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        const filteredParts = data.filter((part) =>
          ["renault", "audi", "bmw"].includes(part?.title.toLowerCase())
        );
        setParts(filteredParts);
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
    <section>
      <div className="flex flex-col justify-between h-[100%]">
        {parts.map((part, index) => (
          <div key={index} className="relative">
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
              <h2 className="text-normal text-white text-center capitalize font-medium absolute left-0 right-0 top-[40%]">
                {part.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeLeftTab;
