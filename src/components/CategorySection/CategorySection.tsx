import Link from "next/link";

export default function CategorySection() {
  const categories = [
    { label: "All Products", path: "/" },
    { label: "Electronics", path: "/electronics" },
    { label: "Home Appliances", path: "/home-appliances" },
    { label: "Kitchen Gadgets", path: "/kitchen-gadgets" },
    { label: "Cleaning Equipments", path: "/cleaning-equipments" },
    { label: "Smart Home Devices", path: "/smart-home-devices" },
    { label: "Heating & Cooling Systems", path: "/heating-cooling-systems" },
    { label: "Laundry Appliances", path: "/laundry-appliances" },
  ];

  return (
    <div className="w-full flex gap-2 mt-4 p-4 justify-center overflow-hidden">
      {categories.map((category, index) => (
        <Link
          key={index}
          href={category.path}
          className={`flex-1 min-w-fit px-1 py-1 rounded-2xl font-sans text-sm text-center ml-2
            ${
              index === 0
                ? "border border-green-700 bg-green-100 text-green-700"
                : "border border-gray-700 bg-gray-100 text-gray-700"
            }`}
        >
          {category.label}
        </Link>
      ))}
    </div>
  );
}
