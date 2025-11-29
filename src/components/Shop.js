// components/PlantBundles.jsx
import Image from "next/image";

const bundles = [
  {
    id: 1,
    title: "Best Seller Large Plants Bundle",
    price: 1050,
    img: "/img1.jpg", // replace with your images in /public folder
  },
  {
    id: 2,
    title: "Home Decorator Bundle",
    price: 799,
    img: "/img2.webp",
  },
  {
    id: 3,
    title: "Urban Jungle Bundle",
    price: 725,
    img: "/img3.webp",
  },
];

export default function PlantBundles() {
  return (
    <section className="py-10 px-4 md:px-20 bg-white">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bundles.map((bundle) => (
          <div
            key={bundle.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={bundle.img}
              alt={bundle.title}
              width={500}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Price */}
            <div className="absolute top-4 right-4 bg-orange-400 text-white font-bold px-3 py-1 rounded-lg text-lg">
              {bundle.price} AED
            </div>
            {/* Title */}
            <div className="absolute bottom-16 left-4 text-white font-medium text-lg drop-shadow-md">
              {bundle.title}
            </div>
            {/* Button */}
            <button className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition cursor-pointer">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
