import Image from "next/image";
import Link from "next/link";

// This function fetches data on the server
async function fetchArticles() {
  const response = await fetch(`https://laboiteauto.com/article.json`, {
    cache: "no-store", // Optional: Use 'no-store' for dynamic content or 'force-cache' for caching
  });
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
}

const HomeLeftTab = async () => {
  const parts = await fetchArticles();

  return (
    <section className="">
      <div className="">
        {parts?.map((part, index) => (
          <div key={index} className="relative mb-8 w-full">
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
