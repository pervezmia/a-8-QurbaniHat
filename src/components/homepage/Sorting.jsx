"use client";
import { Label, ListBox, Select } from "@heroui/react";
import { useEffect, useState } from "react";

const Sorting = ({ setSortList }) => {
  // const [sortingType, setSortingType] = useState("")
  // const [data, setData] = useState([]);
  // const [sortList, setSortList] = useState("");
  // useEffect(() => {
  //   fetch("https://a-8-qurbani-hat.vercel.app/data.json")
  //   .then(res => res.json())
  //   .then(result => setData(result));
  // }, []);

  // useEffect(() => {
  //   console.log(sortList);
  //   //sorting logic
  // const sortedData = [...data].sort((a,b) => {
  //   if(sortList === "high"){
  //     return b.price - a.price;
  //   }

  //   if (sortList === "low"){
  //     return a.price - b.price;
  //   }
  //   return 0;
  // })
  // setData(sortedData)
  // }, [sortList]);

  // const res =  fetch("https://a-8-qurbani-hat.vercel.app/data.json");
  // const data =  res.json();
  // console.log(data.price);
  return (
    <div className="w-[400px] my-5 space-y-4">
      <Select
        fullWidth
        placeholder="Select one"
        onSelectionChange={(key) => setSortList(key)}
      >
        <Label>Sorting by Price</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item key="">Default</ListBox.Item>
            <ListBox.Item
              onClick={() => setSortList("high")}
              id="high"
              textValue="High"
            >
              High to low Price
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item
              onClick={() => setSortList("low")}
              id="low"
              textValue="Low"
            >
              Low to high Price
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>

      {/* <div>
        {
          sortedData.map((item, i) => (
            <div key={i} className="border p-2">
              price: {item.price}
            </div>
          ))
        }
      </div> */}
    </div>
  );
};

export default Sorting;
