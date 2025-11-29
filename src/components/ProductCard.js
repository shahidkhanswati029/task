"use client";

import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ProductCard({ product }) {
  if (!product) return null; // safety check

  return (
    <div className="border rounded-xl shadow-sm hover:shadow-lg transition bg-white group relative">

      {/* Favorite Button */}
      <div className="absolute top-3 right-3 z-10">
        <FavoriteButton productId={product.id} />
      </div>

      {/* Image - Opens Detail Page */}
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={350}
          className="w-full h-60 object-cover rounded-t-xl group-hover:scale-105 transition-transform"
        />
      </Link>

      <div className="p-4">
        {product.sale && (
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
            Sale
          </span>
        )}

        <h3 className="text-md font-medium mt-2">{product.title}</h3>

        <div className="mt-2 text-gray-700">
          {product.oldPrice && (
            <p className="line-through text-sm text-gray-400">
              Dhs. {product.oldPrice}
            </p>
          )}
          <p className="font-semibold">Dhs. {product.price}</p>
        </div>
      </div>
    </div>
  );
}
