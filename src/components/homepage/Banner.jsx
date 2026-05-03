import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/12655640/pexels-photo-12655640.jpeg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="px-6 text-white max-w-7xl mx-auto">
          <h1 className="animate__animated animate__backInLeft text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find Your Perfect Qurbani Animal
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Discover healthy animals, trusted sellers, and a seamless buying experience.
          </p>

          <div className="flex gap-4">
            <Link href="/all-animals">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                See More
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
