import PlantCategories from "@/components/Circle";
import Navbar from "@/components/Navbar";
import PlantBundles from "@/components/Shop";
import ProductsPage from "@/app/products/page";   // <-- import your product grid page
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <PlantBundles />
      <PlantCategories />

    

      {/* ✅ Show the real products */}
      <ProductsPage />
      <Footer/>
    </>
  );
}
