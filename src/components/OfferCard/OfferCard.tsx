import Image from "next/image";

interface Offer {
  id: number;
  gradient: string;
  buttonGradient: string;
  title: string;
  text: string;
  imageSrc: string;
  imgAlt: string;
}

interface OfferCardProps {
  offer: Offer;
}

export default function OfferCard({ offer }: OfferCardProps) {
  return (
    <div
      className={`relative rounded-2xl h-40 w-88 bg-gradient-to-r ${offer.gradient} text-white p-5 flex flex-col justify-start overflow-hidden`}
    >
      <h2 className="text-sm font-bold font-sans mb-1 relative z-10">
        {offer.title}
      </h2>
      <p className="text-[11px] font-medium font-sans tracking-tight leading-tight relative z-10 mb-2">
        {offer.text}
      </p>

      <button
        className={`absolute left-5 outline-none font-sans bottom-[20px] ${offer.buttonGradient} text-white font-semibold text-xs px-5 py-2 rounded-md h-9 border border-white/60 shadow-md shadow-black/30 transition-transform transform hover:scale-105`}
      >
        Start Plan
      </button>

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
  );
}
