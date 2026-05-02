import { Label, ListBox, Select } from "@heroui/react";
// import { useState } from "react";


const Sorting = async () => {
  // const [sortingType, setSortingType] = useState("")
  const res = await fetch("https://a-8-qurbani-hat.vercel.app/data.json");
  const data = await res.json();
  console.log(data.price);
  return (
    <div className="w-[400px] my-5 space-y-4">
      <Select fullWidth placeholder="Select one">
        <Label>Sorting by Price</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="high" textValue="High">
              High
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="low" textValue="Low">
              Low
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default Sorting;
