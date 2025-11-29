import Image from "next/image";
import products from "@/app/data/products";

export default async function ProductDetail({ params }) {
 const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        Product not found! (ID: {params.id})
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">{product.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <Image
          src={product.image}
          alt={product.title}
          width={800}
          height={600}
          className="rounded-xl shadow-lg"
        />

        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-green-700">{product.title}</h2>

          <div className="text-2xl font-semibold flex flex-col">
            <span className="text-green-600">Dhs. {product.price}</span>
            {product.oldPrice && (
              <span className="text-gray-400 line-through text-xl">
                Dhs. {product.oldPrice}
              </span>
            )}
          </div>

          {product.sale && (
            <span className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm">
              SALE
            </span>
          )}

          <p className="text-gray-600 text-lg leading-relaxed">
            This is a beautiful plant with fresh green leaves...
          </p>
        </div>
      </div>
    </div>
  );
}
