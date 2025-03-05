import Link from "next/link"; // Dùng next/link thay vì react-router-dom
import { FaSearch } from "react-icons/fa";
import MobileMenu from "./MobileMenu"; // Import Client Component

export default function Navbar() {
  return (
    <div className="w-11/12 mx-auto shadow-md mb-5">
      <nav className="bg-blue-800 text-white rounded-lg">
        <div className="container mx-auto flex justify-between items-center px-6 py-2">
          {/* Mobile Menu Button (Client Component) */}
          <MobileMenu />

          {/* Menu Desktop (Server Component) */}
          <ul className="hidden lg:flex space-x-6 text-sm font-semibold gap-4">
            {[
              { path: "/", label: "TRANG CHỦ" },
              { path: "/lopoto", label: "LỐP Ô TÔ" },
              { path: "/daunhot", label: "DẦU NHỚT" },
              { path: "/acquy", label: "ẮC QUY" },
              { path: "/phutungphukien", label: "PHỤ TÙNG, PHỤ KIỆN" },
              { path: "/cuuho24h", label: "CỨU HỘ 24/7" },
              { path: "/dichvu", label: "DỊCH VỤ" },
              { path: "/tintuc", label: "TIN TỨC" },
            ].map((item) => (
              <li key={item.path} className="relative group mt-2">
                <Link href={item.path} className="hover:text-gray-300">{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Ô tìm kiếm (SEO-friendly) */}
          <div className="flex items-center bg-white px-3 py-1 rounded-lg shadow-md w-80">
            <input
              type="text"
              placeholder="Tìm kiếm ..."
              className="flex-grow outline-none text-gray-700 text-sm"
            />
            <FaSearch className="text-gray-600 ml-2 cursor-pointer" />
          </div>
        </div>
      </nav>
    </div>
  );
};
