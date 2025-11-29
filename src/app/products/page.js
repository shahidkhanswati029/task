"use client";

import products from "@/app/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="max-w-9xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">All Plants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
