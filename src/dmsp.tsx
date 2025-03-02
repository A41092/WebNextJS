import React from "react";
import { PiTireFill } from "react-icons/pi";
import { FaCarBattery, FaOilCan, FaTools } from "react-icons/fa";

const products = [
    { name: "Lốp Michelin", price: "2.500.000", image: "/images/1.jpg" },
    { name: "Lốp Bridgestone", price: "2.800.000", image: "/images/2.jpg" },
    { name: "Lốp Pirelli", price: "3.000.000", image: "/images/3.jpg" },
    { name: "Lốp Pirelli", price: "3.000.000", image: "/images/lop.png" },
    
];

export default function DMSP() {
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     arrows: true,
    // };
    
    return (
        <div className="container w-11/12 mx-auto  bg-gray-200">
            <section className="w-full h-auto mb-5 ">
                <div className="w-auto h-auto p-3">
                    <img
                        src="https://placehold.co/1920x500"
                        alt="Banner placeholder"
                        className="w-full max-h-[400px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] object-cover rounded-lg"
                    />
                </div>
            </section>
            <section className="w-full h-[500px]mb-5 rounded-lg">
                <div className="w-full h-10 m-2 p-3">
                    <h2 className="text-2xl font-bold text-black flex items-center gap-2">
                        <PiTireFill className="text-red-500 text-3xl  " />
                        <a
                            href="#"
                            title="Lốp Ô Tô"
                            className="text-black hover:text-blue-800 transition-colors duration-300"
                        >
                            LỐP Ô TÔ THANH LÝ GIÁ RẺ
                        </a>
                    </h2>
                </div>
                <div className="grid grid-cols-4 gap-4 m-5">
                    {products.map((product, index) => (
                        console.log(product.image),
                        <div
                            key={index}
                            className="border rounded-lg shadow-lg p-4  w-full h-[420px] bg-white "
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-[320px] h-[320px] object-contain mb-2"

                            />
                            <h3 className="text-md font-semibold">{product.name}</h3>
                            <p className="text-blue-600 font-bold">{product.price}₫</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full h-[500px] bg-gray-300  mb-5 rounded-lg">
                <div className="w-full h-10 m-2 p-3">
                    <h2 className="text-2xl font-bold text-black flex items-center gap-2">
                        <PiTireFill className="text-red-500 text-3xl  " />
                        <a
                            href="#"
                            title="Lốp Ô Tô"
                            className="text-black hover:text-blue-800 transition-colors duration-300"
                        >
                            LỐP Ô TÔ MỚI
                        </a>
                    </h2>
                </div>
                <div className="grid grid-cols-4 gap-4 m-5">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="border rounded-lg shadow-lg p-4  w-full h-[420px] bg-white "
                        >
                            <img
                                src="https://placehold.co/800x1066"
                                alt={product.name}
                                className="w-[320px] h-[320px] object-contain mb-2"
                            />
                            <h3 className="text-md font-semibold">{product.name}</h3>
                            <p className="text-blue-600 font-bold">{product.price}₫</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full h-[500px] bg-gray-300  mb-5 rounded-lg">
                <div className="w-full h-10 m-2 p-3">
                    <h2 className="text-2xl font-bold text-black flex items-center gap-2">
                        <PiTireFill className="text-red-500 text-3xl  " />
                        <a
                            href="#"
                            title="Lốp Ô Tô"
                            className="text-black hover:text-blue-800 transition-colors duration-300"
                        >
                            LỐP Ô TÔ ĐÃ QUA SỬ DỤNG - LƯỚT
                        </a>
                    </h2>
                </div>
                <div className="grid grid-cols-4 gap-4 m-5">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="border rounded-lg shadow-lg p-4  w-full h-[420px] bg-white "
                        >
                            <img
                                src="https://placehold.co/800x1066"
                                alt={product.name}
                                className="w-[320px] h-[320px] object-contain mb-2"
                            />
                            <h3 className="text-md font-semibold">{product.name}</h3>
                            <p className="text-blue-600 font-bold">{product.price}₫</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full h-[500px] bg-gray-300  mb-5 rounded-lg">
                <div className="w-full h-10 m-2 p-3">
                    <h2 className="text-2xl font-bold text-black flex items-center gap-2">
                        <FaCarBattery className="text-red-500 text-3xl  " />
                        <a
                            href="#"
                            title="Lốp Ô Tô"
                            className="text-black hover:text-blue-800 transition-colors duration-300"
                        >
                            BÌNH ẮC QUY Ô TÔ
                        </a>
                    </h2>
                </div>
                <div className="grid grid-cols-4 gap-4 m-5">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="border rounded-lg shadow-lg p-4  w-full h-[420px] bg-white "
                        >
                            <img
                                src="https://placehold.co/800x1066"
                                alt={product.name}
                                className="w-[320px] h-[320px] object-contain mb-2"
                            />
                            <h3 className="text-md font-semibold">{product.name}</h3>
                            <p className="text-blue-600 font-bold">{product.price}₫</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full h-[500px] bg-gray-300  mb-5 rounded-lg">
                <div className="w-full h-10 m-2 p-3">
                    <h2 className="text-2xl font-bold text-black flex items-center gap-2">
                        <FaOilCan className="text-red-500 text-3xl  " />
                        <a
                            href="#"
                            title="Lốp Ô Tô"
                            className="text-black hover:text-blue-800 transition-colors duration-300"
                        >
                            DẦU NHỚT ĐỘNG CƠ Ô TÔ
                        </a>
                    </h2>
                </div>
                <div className="grid grid-cols-4 gap-4 m-5">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="border rounded-lg shadow-lg p-4  w-full h-[420px] bg-white "
                        >
                            <img
                                src="https://placehold.co/800x1066"
                                alt={product.name}
                                className="w-[320px] h-[320px] object-contain mb-2"
                            />
                            <h3 className="text-md font-semibold">{product.name}</h3>
                            <p className="text-blue-600 font-bold">{product.price}₫</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full h-[500px] bg-gray-300  mb-5 rounded-lg">
                <div className="w-full h-10 m-2 p-3">
                    <h2 className="text-2xl font-bold text-black flex items-center gap-2">
                        <FaTools className="text-red-500 text-3xl  " />
                        <a
                            href="#"
                            title="Lốp Ô Tô"
                            className="text-black hover:text-blue-800 transition-colors duration-300"
                        >
                            PHỤ TÙNG - PHỤ KIỆN Ô TÔ
                        </a>
                    </h2>
                </div>
                <div className="grid grid-cols-4 gap-4 m-5">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="border rounded-lg shadow-lg p-4  w-full h-[420px] bg-white "
                        >
                            <img
                                src="https://placehold.co/800x1066"
                                alt={product.name}
                                className="w-[320px] h-[320px] object-contain mb-2"
                            />
                            <h3 className="text-md font-semibold">{product.name}</h3>
                            <p className="text-blue-600 font-bold">{product.price}₫</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}