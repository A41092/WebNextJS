import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          Car Shop
        </a>

        {/* Thanh tìm kiếm */}
        <div className="hidden md:flex items-center bg-white text-black px-3 py-1 rounded-full">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="outline-none bg-transparent px-2"
          />
          <Search size={20} />
        </div>

        {/* Menu trên desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="hover:underline">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Lốp ô tô
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Dầu nhớt
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Ắc quy
            </a>
          </li>
        </ul>

        {/* Nút menu mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 text-white flex flex-col items-center py-2">
          <li>
            <a href="#" className="py-2">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="#" className="py-2">
              Lốp ô tô
            </a>
          </li>
          <li>
            <a href="#" className="py-2">
              Dầu nhớt
            </a>
          </li>
          <li>
            <a href="#" className="py-2">
              Ắc quy
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
