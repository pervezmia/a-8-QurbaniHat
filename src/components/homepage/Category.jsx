import { Button } from "@heroui/react";
import React from "react";

const Category = async () => {
  const res = await fetch("https://a-8-qurbani-hat.vercel.app/category.json");
  const data = await res.json();
  console.log(data);
  return <div>
    {
        data.map(d => <Button key={d.id}>{d.category}</Button>)
    }
  </div>;
};

export default Category;
