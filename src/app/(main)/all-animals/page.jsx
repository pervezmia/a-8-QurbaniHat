"use client";
import AnimalCard from "@/components/homepage/AnimalCard";
import Category from "@/components/homepage/Category";
import Sorting from "@/components/homepage/Sorting";
import React, { useEffect, useState } from "react";

const AllAnimalsPage = () => {
  // const res = await fetch("https://a-8-qurbani-hat.vercel.app/data.json");
  // const data = await res.json();
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [sortList, setSortList] = useState("");
  useEffect(() => {
    fetch("https://a-8-qurbani-hat.vercel.app/data.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setOriginalData(result);
      });
  }, []);

  useEffect(() => {
    console.log(sortList);
    //sorting logic
    const sortedData = [...data].sort((a, b) => {
      if (sortList === "high") {
        const sorted = [...originalData].sort((a,b) => b.price - a.price )
        setData(sorted);
        // return b.price - a.price;
      }

      else if (sortList === "low") {
        const sorted = [...originalData].sort((a,b) => a.price - b.price )
        setData(sorted);
        // return a.price - b.price;
      } else {
        setData(originalData);
      }
      return 0;
    });
    // setData(sortedData);
  }, [sortList, originalData]);

  // console.log(data);
  return (
    <div>
      <h3 className="text-2xl font-bold m-3">All Animals</h3>
      <Sorting setSortList={setSortList}></Sorting>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((animal) => (
          <AnimalCard key={animal.id} animal={animal}></AnimalCard>
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsPage;
