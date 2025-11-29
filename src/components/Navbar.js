"use client";

import { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

const categories = [
  { name: "Indoor Plants", items: ["Ferns", "Succulents", "Cacti"] },
  { name: "Outdoor Plants", items: ["Trees", "Bushes", "Flowers"] },
  { name: "Soil & Stones", items: ["Soil", "Sand", "Rocks"] },
  { name: "Fertilizer & Pesticides", items: ["Fertilizer", "Pesticides"] },
  { name: "Pots & Planters", items: ["Ceramic", "Plastic", "Metal"] },
  { name: "Seeds", items: ["Vegetables", "Fruits", "Herbs"] },
  { name: "Hydroponics", items: ["NFT Systems", "DWC Systems"] },
  { name: "Garden Services", items: ["Landscaping", "Maintenance"] },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-green-500 text-black shadow-md">
      {/* Top contact bar */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs md:text-sm">
        <span>+92 3231501511</span>
        <span>shahidkhan13501@gmail.com</span>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/image.png" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Search bar (desktop only) */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full p-3 rounded-l-lg outline-none border border-gray-300"
          />
          <button className="bg-black text-white px-5 rounded-r-lg flex items-center justify-center">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Icons + Login button */}
        <div className="flex items-center gap-4">
          <FiUser className="text-2xl cursor-pointer hover:text-white transition" />
          <FiShoppingCart className="text-2xl cursor-pointer hover:text-white transition" />

          {/* Login Button (desktop only) */}
          <button
            onClick={() => router.push("/auth/login")}
            className="hidden md:block bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Category menu (desktop only) */}
      <div className="hidden md:flex bg-green-400 justify-center px-6 py-2 space-x-6 text-sm font-medium">
        {categories.map((cat) => (
          <div key={cat.name} className="relative group">
            <span className="cursor-pointer hover:text-white">{cat.name}</span>

            {/* Dropdown */}
            <div className="absolute left-0 mt-2 w-44 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
              {cat.items.map((item) => (
                <div key={item} className="px-4 py-2 hover:bg-green-100 cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-green-400 px-4 py-4 space-y-4 shadow-inner animate-slideDown">
          {/* Mobile search */}
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 rounded-lg outline-none border border-gray-300"
            />
          </div>

          {/* Categories (accordion-like list) */}
          <div className="space-y-3">
            {categories.map((cat) => (
              <div key={cat.name}>
                <p className="font-semibold">{cat.name}</p>
                <div className="ml-3 mt-1 space-y-1">
                  {cat.items.map((item) => (
                    <div key={item} className="text-sm cursor-pointer">
                      - {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Login button */}
          <button
            onClick={() => router.push("/auth/login")}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
