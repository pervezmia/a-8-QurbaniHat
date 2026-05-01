import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const AnimalCard = ({animal}) => {
  return (
    <Card className="">
      <div className="relative w-full aspect-square">
        <Image
        fill        
        src={animal.image}
        alt={animal.name}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover rounded-t-2xl"
        
      ></Image>
      <Chip className="absolute top-5 right-4 bg-violet-300">{animal.category}</Chip>
      </div>
      <p className="font-semibold">{animal.name}</p>
      <div className="flex md:flex  md:justify-between gap-2">
        <p className="bg-slate-200 px-3 rounded"> Age: {animal.age}</p>
        <p className="bg-slate-200 px-3 rounded">Location: {animal.location}</p>
      </div>
      <Button className="w-full bg-violet-300 text-black">Details Info</Button>
    </Card>
  );
};

export default AnimalCard;
