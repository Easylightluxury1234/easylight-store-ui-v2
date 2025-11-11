import Sidebar from "@/components/Sidebar/Sidebar";
import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { products } from "@/components/PopularProducts/PopularProducts";
import { Heart } from "lucide-react";

export default function Electronics() {
  const featuredProduct = products[0];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Main>
        <Navbar />
        <div className="flex w-[69rem] h-100 ml-3 mt-6 justify-between">
          <div className="border-3 border-gray-500 h-99 w-[53%] rounded-2xl relative overflow-hidden">
            <Image
              src={featuredProduct.image}
              alt={featuredProduct.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl"
            />
          </div>

          <div className="h-99 w-[45%] rounded-2xl flex flex-col">
            <span className="border-2 w-9 h-9 bg-gray-300 border-gray-300 rounded-full flex items-center justify-center mt-1">
              <Heart className="text-green-300 w-6 h-6" fill="gray" />
            </span>

            <div className="w-23 h-9 mt-3 bg-blue-100 rounded-3xl p-1 text-center">
              <p className="font-sans text-blue-400">Samsung</p>
            </div>
            <div className="w-35">
              <p className="text-sm mt-2">or 15,000/month x 12</p>
            </div>

            <div className="flex space-x-3 mt-3">
              <div className="h-10 w-[150px] text-center py-2 rounded-md text-sm bg-gray-200">
                Buy Now
              </div>
              <div className="h-10 w-[150px] text-center py-2 rounded-md bg-green-700 text-white text-sm">
                Add to Cart
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="font-sans font-semibold mt-1">Description</h2>
              <p className="font-sans text-sm tracking-tighter">
                Versatile cooking with 3 gas burners and 1 hot plate, ideal for
                multitasking in the kitchen.
              </p>

              <p className="font-sans font-semibold mt-3">Features</p>
              <ul className="list-disc ml-5">
                <li className="font-sans text-sm tracking-tighter">
                  3 Gas Burners and 1 hot plate
                </li>
                <li className="font-sans text-sm tracking-tighter">
                  Auto Ignition
                </li>
                <li className="font-sans text-sm tracking-tighter">
                  Stainless Steel Body
                </li>
                <li className="font-sans text-sm tracking-tighter">
                  Child Lock Valve
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-4 ml-3">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="` w-[100px] h-20 rounded-md relative overflow-hidden"
            >
              <Image
                src={products[index].image}
                alt={products[index].name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </Main>
    </div>
  );
}
