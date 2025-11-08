export default function CategorySection() {
  const categories = [
    "All Products",
    "Electronics",
    "Home Appliances",
    "Kitchen Gadgets",
    "Cleaning Equipments",
    "Smart Home Devices",
    "Heating & Cooling Systems",
    "Laundry Appliances",
  ];

  return (
    <div className="w-full flex gap-2 mt-4 p-4 justify-center overflow-hidden">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`flex-1 min-w-fit px-1 py-1 rounded-2xl font-sans text-sm text-center ml-2
            ${
              index === 0
                ? "border border-green-700 bg-green-100 text-green-700"
                : "border border-gray-700 bg-gray-100 text-gray-700"
            }`}
        >
          {category}
        </div>
      ))}
    </div>
  );
}
