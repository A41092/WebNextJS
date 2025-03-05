"use client"; // Chỉ phần này là Client Component

import React, { useState } from "react";
import Link from "next/link"; // Dùng next/link thay vì react-router-dom
import { FiAlignJustify } from "react-icons/fi";
import { X } from "lucide-react";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleCloseMenu = () => setIsOpen(false);

  return (
    <>
      {/* Nút mở menu trên mobile */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <FiAlignJustify className="size-10" />}
      </button>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 text-white flex flex-col items-center py-2">
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
            <li key={item.path} className="relative group mt-2" onClick={handleCloseMenu}>
              <Link href={item.path} className="hover:text-gray-300">{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MobileMenu;
