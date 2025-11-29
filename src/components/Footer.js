
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-4">Follow us</h3>
          <div className="flex flex-wrap gap-2">
            <a href="#" className="bg-gray-300 p-2 rounded-full hover:bg-gray-400">
              <FaEnvelope size={16} />
            </a>
            <a href="#" className="bg-gray-300 p-2 rounded-full hover:bg-gray-400">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="bg-gray-300 p-2 rounded-full hover:bg-gray-400">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="bg-gray-300 p-2 rounded-full hover:bg-gray-400">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#" className="bg-gray-300 p-2 rounded-full hover:bg-gray-400">
              <FaPinterestP size={16} />
            </a>
            <a href="#" className="bg-gray-300 p-2 rounded-full hover:bg-gray-400">
              <FaTiktok size={16} />
            </a>
            <a href="#" className="bg-gray-300 p-2 rounded-full hover:bg-gray-400">
              <FaWhatsapp size={16} />
            </a>
            <a href="#" className="bg-gray-300 p-2 rounded-full hover:bg-gray-400">
              <FaYoutube size={16} />
            </a>
          </div>
        </div>

        {/* Find It Fast */}
        <div>
          <h3 className="font-semibold mb-4">Find It Fast</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Latest Blogs</a></li>
            <li><a href="#" className="hover:underline">FAQ’s</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Shipping charges</a></li>
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
          </ul>
        </div>

        {/* Hot Links */}
        <div>
          <h3 className="font-semibold mb-4">Hot Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">My Account</a></li>
            <li><a href="#" className="hover:underline">Checkout</a></li>
            <li><a href="#" className="hover:underline">Your Cart</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <p>Mobile: +92 3231501511</p>
          <p>Email: shahidkhan@gmail.com</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-300 pt-4 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Copyright © 2025 Greensouq.</p>
        <p>Powered by Shopify</p>
        <div className="flex gap-2">
          <img src="/image.png" alt="Amex" className="h-6" />
          <img src="/image.png" alt="Mastercard" className="h-6" />
          <img src="/image.png" alt="WhatsApp" className="h-10" />
        </div>
      </div>
    </footer>
  );
}
