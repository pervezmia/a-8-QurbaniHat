import BookNow from "@/components/homepage/BookNow";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const res = await fetch("https://a-8-qurbani-hat.vercel.app/data.json");
  const data = await res.json();
  console.log(data);

  const singleData = data.find((d) => d.id === Number(id));
  console.log(singleData);

  return (
    <Card className="">
      <div className="relative w-full aspect-square">
        <Image
          fill
          src={singleData.image}
          alt={singleData.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-t-2xl"
        ></Image>
        <Chip className="absolute top-5 right-4 bg-violet-300">
          {singleData.category}
        </Chip>
      </div>
      <p className="font-semibold">{singleData.name}</p>
      <div className="flex md:flex  md:justify-between gap-2">
        <p className="bg-slate-200 px-3 rounded"> Age: {singleData.age}</p>
        <p className="bg-slate-200 px-3 rounded">
          Location: {singleData.location}
        </p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div>
          <p> Price: {singleData.price}</p>
          <p> Type: {singleData.type}</p>
          <p>Weight: {singleData.weight}</p>
        </div>
        <div>
          {/* <span className="bg-violet-300 p-4 rounded-xl">Book now</span> */}
          <BookNow></BookNow>
        </div>
      </div>
      <div>
        <p>{singleData.description}</p>
      </div>
    </Card>
  );
};

export default PhotoDetailsPage;
