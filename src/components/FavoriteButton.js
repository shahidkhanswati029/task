"use client";

import { useState } from "react";

export default function FavoriteButton({ productId }) {
  const [fav, setFav] = useState(false);

  async function toggleFavorite() {
    setFav(!fav);

    await fetch("/api/favorites", {
      method: fav ? "DELETE" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    });
  }

  return (
    <button
      onClick={toggleFavorite}
      className="p-2 rounded-full bg-white shadow hover:scale-110 transition"
    >
      {fav ? (
        <span className="text-red-600 text-xl">♥</span>
      ) : (
        <span className="text-gray-400 text-xl">♡</span>
      )}
    </button>
  );
}
