"use client";
import { useRouter } from "next/navigation";

export default function Feature() {
  const router = useRouter();

  const text = () => {
    router.push("/text-explicatif");
  };

  return (
    <>
      <div className="text-center my-12 ">
        <h2 className="text-3xl font-bold text-[#6EBD5E]">Contactez-nous</h2>

        {/* <span className="block w-16 h-1 bg-[#6EBD5E] mx-auto"></span> */}

        <div className="flex flex-wrap justify-center mt-5" onClick={text}>
          <div className="w-full md:w-1/3 px-4 ">
            <h2 className="text-xl font-bold  text-[#6EBD5E]">
              SB Enlevement / 0753359402
            </h2>
            <p className="">173 avenue de la dicision leclerc</p>
            <p className=""> 94190 Villeneuve St georges</p>
          </div>
        </div>
      </div>
    </>
  );
}
