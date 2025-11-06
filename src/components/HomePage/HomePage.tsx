import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import OfferCard from "@/components/OfferCard/OfferCard";
import CategoryFilter from "@/components/CategorySection/CategorySection";

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
    <div className="flex h-screen ">
      <Sidebar />

      <main className="flex flex-col w-6xl jusify-center align-center mr-3 mt-[-13px] ">
        <Navbar />

        <h2 className="font-bold font-sans ml-6 mt-3">Special offers</h2>

        <div className="flex justify-between h-40 mt-4 ml-3  w-[99%] ">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
        <CategoryFilter />
      </main>
    </div>
  );
}
