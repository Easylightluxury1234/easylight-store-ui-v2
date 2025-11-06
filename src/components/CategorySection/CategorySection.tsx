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
    <div className="w-full flex flex-wrap gap-4 p-4 border border-black rounded-xl justify-center">
      {categories.map((category, index) => (
        <div
          key={index}
          className="border border-red-600 px-4 py-2 rounded-2xl font-sans text-sm text-center bg-white hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-200"
        >
          {category}
        </div>
      ))}
    </div>
  );
}
