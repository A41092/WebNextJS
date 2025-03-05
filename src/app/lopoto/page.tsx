"use client"
import { useState } from "react";
import AutoCompleteTireBrand from "../layouts/tirebrandfilter";
import AutoCompleteTireType from "../layouts/tiretypefilter";
import ArrangeFiter from "../layouts/arrangefilter";
import Image from "next/image";
import SetActiveForm from "../layouts/setActiveForm";

const Lopoto = () => {
  // Danh sách sản phẩm đầy đủ
  const allProducts = [
    { name: "LỐP ROADX 255/55R18 105V DU02", price: "3.250.000₫", img: "/images/1.jpg" },
    { name: "LỐP ROADX 245/40ZR18 97Y DU01", price: "2.630.000₫", img: "/images/2.jpg" },
    { name: "LỐP BRIDGESTONE 225/45R17", price: "2.800.000₫", img: "/images/3.jpg" },
    { name: "LỐP MICHELIN 195/65R15", price: "2.500.000₫", img: "/images/lop.png" },
    { name: "LỐP DUNLOP 205/55R16", price: "2.900.000₫", img: "/images/1.jpg" },
    { name: "LỐP CONTINENTAL 235/50R18", price: "3.100.000₫", img: "/images/2.jpg" },
    { name: "LỐP BRIDGESTONE 225/45R17", price: "2.800.000₫", img: "/images/3.jpg" },
    { name: "LỐP MICHELIN 195/65R15", price: "2.500.000₫", img: "/images/lop.png" },
    { name: "LỐP DUNLOP 205/55R16", price: "2.900.000₫", img: "/images/1.jpg" },
    { name: "LỐP CONTINENTAL 235/50R18", price: "3.100.000₫", img: "/images/2.jpg" },
  ];

  const productsPerPage = 4; // Số sản phẩm trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán sản phẩm của trang hiện tại
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = allProducts.slice(startIndex, startIndex + productsPerPage);

  // Tính tổng số trang
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  return (
    <>
      <div className="w-11/12 bg-gray-100 mx-auto h-auto rounded-lg container flex shadow-lg mb-5 gap-2">
        {/* Sidebar */}
        <SetActiveForm />

        {/* Nội dung chính */}
        <div className="flex flex-col gap-6 flex-1 mt-5 mb-5 text-white font-medium rounded-r-lg">
          <div className="h-14 flex bg-gray-300 rounded-lg">
            <div className="w-3/4 flex gap-5 ml-5">
              <AutoCompleteTireBrand />
              <AutoCompleteTireType />
            </div>
            <div className="w-1/4 ml-5">
              <ArrangeFiter />
            </div>
          </div>

          <div className="bg-yellow-400 h-auto">
            <div className="container mx-auto p-4">
              <h2 className="text-2xl font-bold mb-4 text-center">Danh sách sản phẩm</h2>

              <div className="grid grid-cols-4 gap-6">
                {currentProducts.map((product, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                    <Image src={product.img} alt={product.name} width={300} height={200} className="rounded-md" />
                    <h3 className="text-lg font-semibold mt-2 text-amber-950">{product.name}</h3>
                    <p className="text-blue-600 font-bold text-xl">{product.price}</p>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-6 gap-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 bg-gray-500 text-white rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Trang trước
                </button>

                <span className="text-lg font-semibold">Trang {currentPage} / {totalPages}</span>

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 bg-gray-500 text-white rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  Trang sau
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lopoto;
