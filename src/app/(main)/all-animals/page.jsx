import AnimalCard from "@/components/homepage/AnimalCard";
import Category from "@/components/homepage/Category";
import Sorting from "@/components/homepage/Sorting";
import React from "react";

const AllAnimalsPage = async () => {
  const res = await fetch("https://a-8-qurbani-hat.vercel.app/data.json");
  const data = await res.json();

  console.log(data);
  return (
    <div>
      <h3 className="text-2xl font-bold m-3">All Animals</h3>
      <Sorting></Sorting>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {
            data.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
        }
      </div>
    </div>
  );
};

export default AllAnimalsPage;
