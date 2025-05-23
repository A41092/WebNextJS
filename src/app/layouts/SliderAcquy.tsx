import { FaCarBattery, FaOilCan, FaTools } from "react-icons/fa";
import { PiTireFill } from "react-icons/pi";

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

const products = [
  {
    name: "Ắc quy Delkor 55B24LS bảo hành 6 tháng",
    price: "$7.99",
    oldPrice: "$11.99",
    discount: "33%",
    rating: 4.33,
    image: "/images/acquy1.jpg",
  },
  {
    name: "Ắc quy Delkor 55B24LS bảo hành 6 tháng",
    price: "$21.99",
    oldPrice: "$25.99",
    discount: "15%",
    rating: 4.33,
    image: "/images/acquy2.jpg",
  },
  {
    name: "Ắc quy Delkor 55B24LS bảo hành 6 tháng",
    price: "$151.99",
    oldPrice: "$162.99",
    discount: "7%",
    rating: 4.0,
    image: "/images/acquy3.jpg",
  },
  {
    name: "Ắc quy Delkor 55B24LS bảo hành 6 tháng",
    price: "$151.99",
    oldPrice: "$162.99",
    discount: "7%",
    rating: 4.0,
    image: "/images/acquy4.jpg",
  },
  {
    name: "Ắc quy Delkor 55B24LS bảo hành 6 tháng",
    price: "$151.99",
    oldPrice: "$162.99",
    discount: "7%",
    rating: 4.0,
    image: "/images/acquy4.jpg",
  },
  {
    name: "Ắc quy Delkor 55B24LS bảo hành 6 tháng",
    price: "$151.99",
    oldPrice: "$162.99",
    discount: "7%",
    rating: 4.0,
    image: "/images/acquy4.jpg",
  },
];
export default function SliderAcquy() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <>
      {/* Popular Categories */}
      <div className="col-span-3 mt-10">
        <div className="flex justify-between items-center mb-4 border-1 border-gray-300">
          <h2 className="text-xl font-bold text-black flex ">
            <FaCarBattery className="text-red-500 text-4xl " />
            <a
              href="#"
              title="Lốp Ô Tô"
              className="text-black hover:text-red-500 transition-colors duration-300 p-2"
            >
              ẮC QUY Ô TÔ
            </a>
          </h2>
          <button className="flex items-center bg-orange-500 text-white px-4 mr-4 py-2 rounded-3xl hover:bg-orange-600 transition duration-300">
            Xem tất cả <FaChevronRight className="ml-2" />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4} // Hiển thị 4 sản phẩm
          autoplay={{
            delay: 3000, // Chuyển tự động sau 3 giây
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation
          onSwiper={(swiper) => {
            if (isPaused) swiper.autoplay.stop();
          }}
          breakpoints={{
            320: { slidesPerView: 1 }, // Hiển thị 1 sản phẩm trên mobile
            768: { slidesPerView: 2 }, // Hiển thị 2 sản phẩm trên tablet
            1024: { slidesPerView: 4 }, // Hiển thị 4 sản phẩm trên desktop
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => {
                setIsPaused(true);
              }}
              onMouseLeave={() => {
                setIsPaused(false);
              }}
            >
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300 transition duration-300 hover:border-orange-500 hover:scale-97">
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded ">
                    {product.discount} OFF
                  </span>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full rounded"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-yellow-500 text-sm font-semibold">
                    ⭐ {product.rating} / 5
                  </p>
                  <h3 className="text-md font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500 line-through">
                    {product.oldPrice}
                  </p>
                  <p className="text-lg text-red-500 font-semibold">
                    {product.price}
                  </p>
                  <button className="mt-3 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300">
                    Liên hệ ngay
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
