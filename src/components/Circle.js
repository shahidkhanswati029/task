// components/PlantCategories.jsx
import Image from "next/image";

const categories = [
  { title: "Plant Bundles", img: "/img1.jpg" },
  { title: "Seasonal Flowering Plants", img: "/img2.webp" },
  { title: "Beautiful Indoor Plants", img: "/img3.webp" },
  { title: "Soil and Fertilizers", img: "/img4.webp" },
  { title: "Outdoor Plants", img: "/img2.webp" },
  { title: "Plant Pots", img: "/img4.webp" },
  { title: "Herbs and Vegetables", img: "/img1.jpg" },
  { title: "Plant Pots", img: "/img4.webp" },
//   { title: "Garden Accessories", img: "" },
];

export default function PlantCategories() {
  return (
    <div className="max-w-9xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden mb-2 shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src={category.img}
                alt={category.title}
                width={160}
                height={340}
                className="object-cover "
              />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
