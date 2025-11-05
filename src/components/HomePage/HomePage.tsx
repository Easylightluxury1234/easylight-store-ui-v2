import Link from "next/link";
import Image from "next/image";
import {
  Home,
  ShoppingBag,
  Wallet,
  Package,
  ClipboardList,
  Search,
} from "lucide-react";

export default function Homepage() {
  const offers = [
    {
      id: 1,
      gradient: "from-[#8CBF22] via-[#00612E] to-[#006161]",
      buttonGradient:
        "bg-gradient-to-r from-[#8CBF22] via-[#00612E] to-[#006161]",
      title: "MacBook Pro 16",
      text: "Buy now, pay later — flexible plans from ₦5,000/month",
      imageSrc: "/images/macbook.png",
      imgAlt: "MacBook Pro 16",
    },
    {
      id: 2,
      gradient: "from-[#7C3AED] via-[#9333EA] to-[#4338CA]",
      buttonGradient:
        "bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#4338CA]",
      title: "MacBook Pro 16",
      text: "Buy now, pay later — flexible plans from ₦5,000/month",
      imageSrc: "/images/macbook.png",
      imgAlt: "MacBook Pro 16",
    },
    {
      id: 3,
      gradient: "from-[#7C3AED] via-[#9333EA] to-[#4338CA]",
      buttonGradient:
        "bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#4338CA]",
      title: "MacBook Pro 16",
      text: "Buy now, pay later — flexible plans from ₦5,000/month",
      imageSrc: "/images/macbook.png",
      imgAlt: "MacBook Pro 16",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="flex flex-col w-[20%] h-100 bg-gray-100 rounded-2xl ml-5 mt-5">
        <Link href="/" className="text-2xl font-bold mt-6 mb-2 ml-10 ">
          <h2 className="text-green-800">EASYLIGHT</h2>
        </Link>

        <div className="flex flex-col items-center gap-4 mt-4 w-full">
          <Link
            href="/"
            className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-800 cursor-pointer transition-colors duration-200 w-[80%]"
          >
            <Home
              size={20}
              className="text-black group-hover:text-white transition-colors duration-200"
            />
            <span className="text-black  group-hover:text-white transition-colors duration-200">
              Home
            </span>
          </Link>

          <Link
            href="/explore"
            className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-800 cursor-pointer transition-colors duration-200 w-[80%]"
          >
            <Package
              size={20}
              className="text-black group-hover:text-white transition-colors duration-200"
            />
            <span className="text-black  group-hover:text-white transition-colors duration-200">
              Explore Products
            </span>
          </Link>

          <Link
            href="/cart"
            className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-800 cursor-pointer transition-colors duration-200 w-[80%]"
          >
            <ShoppingBag
              size={20}
              className="text-black group-hover:text-white transition-colors duration-200"
            />
            <span className="text-black  group-hover:text-white transition-colors duration-200">
              Shopping Cart
            </span>
          </Link>

          <Link
            href="/wallet"
            className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-800 cursor-pointer transition-colors duration-200 w-[80%]"
          >
            <Wallet
              size={20}
              className="text-black group-hover:text-white transition-colors duration-200"
            />
            <span className="text-black  group-hover:text-white transition-colors duration-200">
              Wallet
            </span>
          </Link>

          <Link
            href="/orders"
            className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-800 cursor-pointer transition-colors duration-200 w-[80%]"
          >
            <ClipboardList
              size={20}
              className="text-black group-hover:text-white transition-colors duration-200"
            />
            <span className="text-black  group-hover:text-white transition-colors duration-200">
              Order History
            </span>
          </Link>
        </div>
      </aside>

      {/* Main Section */}
      <main className="flex flex-col jusify-center align-center border border-red-400">
        <nav className="flex justify-between bg-gray-100 mt-6 ml-6 w-5xl h-20 rounded-2xl">
          <div className="w-[50%] h-9 m-5">
            <h2 className="text-black font-sans font-semibold">
              Welcome back, Dwight
            </h2>
            <p className="text-black font-sans leading-tight">
              Discover amazing products with flexible payments plans
            </p>
          </div>

          <div className="flex items-center justify-end space-x-2 my-5 pr-6">
            <div className="flex items-center w-60 h-9 rounded-md bg-gray-300 px-2">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none text-gray-700"
              />
              <Search size={18} className="text-gray-600" />
            </div>
            <div className="w-30 h-9 rounded-md bg-gray-300"></div>
          </div>
        </nav>

        {/* Special Offers */}
        <h2 className="font-bold font-sans ml-6 mt-3">Special offers</h2>

        <div className="flex justify-between h-40 ml-6 mt-5 gap-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`relative rounded-2xl h-40 w-80 bg-gradient-to-r ${offer.gradient} text-white p-5 flex flex-col justify-start overflow-hidden`}
            >
              <h2 className="text-sm font-bold font-sans mb-1 relative z-10">
                {offer.title}
              </h2>
              <p className="text-[11px] font-medium font-sans tracking-tight leading-tight relative z-10 mb-2">
                {offer.text}
              </p>

              {/* Button for Offers */}
              <button
                className={`absolute left-5 outline-none font-sans bottom-[20px] ${offer.buttonGradient} text-white font-semibold text-xs px-5 py-2 rounded-md h-9 border border-white/60 shadow-md shadow-black/30 transition-transform transform hover:scale-105`}
              >
                Start Plan
              </button>

              {/* MacBook Image */}
              <div className="absolute right-3 bottom-[-29px] h-32 w-40">
                <Image
                  src={offer.imageSrc}
                  alt={offer.imgAlt}
                  width={160}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="w-5xl ml-6 h-20 flex wrap justify-between">
          <div className="border border-red-600 w-30 h-8 mt-6 rounded-2xl font-sans text-sm text-center p-1">
            All Products
          </div>

          <div className="border border-red-600 w-30 h-8 mt-6 rounded-2xl font-sans text-sm text-center p-1">
            Electronics
          </div>

          <div className="border border-red-600 w-30 h-8 mt-6 rounded-2xl font-sans text-sm text-center p-1">
            Home Appliances
          </div>

          <div className="border border-red-600 w-30 h-8 mt-6 rounded-2xl font-sans text-sm text-center p-1">
            Kitchen Gadgets
          </div>

          <div className="border border-red-600 w-30 h-8 mt-6 rounded-2xl font-sans text-sm text-center p-1">
            Cleaning Equipments
          </div>

          <div className="border border-red-600 w-30 h-8 mt-6 rounded-2xl font-sans text-sm text-center p-1">
            Smart Home Devices
          </div>

          {/* ✅ Fixed last div text */}
          <div className="border border-red-600 w-30 h-8 mt-6 rounded-2xl font-sans text-sm text-center p-1 whitespace-nowrap overflow-hidden text-ellipsis">
            Heating & Cooling Systems
          </div>

          <div className="border border-red-600 w-30 h-8 mt-6 rounded-2xl font-sans text-sm text-center p-1">
            Laundry Appliances
          </div>
        </div>

        <div></div>
      </main>
    </div>
  );
}
