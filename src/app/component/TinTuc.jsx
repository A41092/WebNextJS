"use client";
import { FaNewspaper } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const products = [
  { image: "/images/lop.png", name: "Lốp ô tô cũ giá rẻ tại hà nội", price: "Hà nội" },
  { image: "/images/lopcu1.jpg", name: "Lốp ô tô thanh lý giá rẻ tại hà nội", price: "Hà đông" },
  { image: "/images/lopcu2.jpg", name: "Cứu hộ lốp tại hà đông", price: "Yên Xá" },
  { image: "/images/lopcu3.jpg", name: "Câu bình ắc quy tại hà nội", price: "Văn quán" },
  { image: "/images/lopcu3.jpg", name: "Lốp mới giá ưu đãi dịp tết 2025", price: "Cầu giấy" },
];

export default function ProductSlider() {
  return (
    <div className="container w-11/12 mx-auto  bg-gray-200 p-3">
      {/* Tiêu đề */}
      <div className=" flex text-center items-center justify-center m-3 p-2 border border-gray-300 rounded-2xl  ">
        <FaNewspaper className="text-red-500 text-4xl mx-3 "/>
        <h2 className="text-2xl font-bold  ">TIN TỨC</h2>
      </div>
      

      {/* Swiper */}
      <div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        autoplay={{
          delay: 3000, // Sau 3 giây đổi slide
          disableOnInteraction: false,
        }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 }, // Hiển thị 1 sản phẩm trên mobile
          768: { slidesPerView: 2 }, // Hiển thị 2 sản phẩm trên tablet
          1024: { slidesPerView: 4 }, // Hiển thị 4 sản phẩm trên desktop
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300 transition duration-300 hover:border-orange-500 hover:scale-105">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={150} 
                height={150} 
                className="mx-auto" 
              />
              <h3 className="text-md font-semibold mt-2">{product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      
    </div>
  );
}
