'use client';

import { FaOilCan, FaBatteryFull, FaCar, FaBalanceScale, FaCompactDisc } from 'react-icons/fa';
import { PiTireFill } from "react-icons/pi";

const services = [
  {
    icon: <PiTireFill className="text-red-600 text-5xl mb-3 mx-auto " />,
    title: 'THAY THẾ LỐP XE',
    desc: 'Sử dụng máy tháo lắp lốp công nghệ cao, bảo vệ lazang và mép tanh khỏi trầy xước...',
    link: '/dich-vu/thay-lop',
  },
  {
    icon: <FaCar className="text-red-600 text-5xl mb-3 mx-auto" />,
    title: 'CÂN CHỈNH THƯỚC LÁI - GÓC ĐẶT BÁNH XE',
    desc: 'Giúp tránh mòn vẹt lốp, hiện tượng nhao lái và lái xe an toàn.',
    link: '/dich-vu/can-chinh-goc',
  },
  {
    icon: <FaBalanceScale className="text-red-600 text-5xl mb-3 mx-auto" />,
    title: 'CÂN BẰNG ĐỘNG BÁNH XE',
    desc: 'Tạo độ cân bằng, tránh rung lắc và đảo bánh xe khi lái.',
    link: '/dich-vu/can-bang-dong',
  },
  {
    icon: <FaCompactDisc className="text-red-600 text-5xl mb-3 mx-auto" />,
    title: 'LÁNG ĐĨA PHANH',
    desc: 'Loại bỏ tiếng ồn, kéo dài tuổi thọ, xử lý gỉ sét, tiết kiệm chi phí.',
    link: '/dich-vu/lang-dia-phanh',
  },
  {
    icon: <FaBatteryFull className="text-red-600 text-5xl mb-3 mx-auto" />,
    title: 'THAY ẮC QUY',
    desc: 'Phân phối các loại ắc quy chất lượng cao như Amaron, Varta, Atlas...',
    link: '/dich-vu/thay-ac-quy',
  },
  {
    icon: <FaOilCan className="text-red-600 text-5xl mb-3 mx-auto" />,
    title: 'THAY DẦU',
    desc: 'Dầu tổng hợp, bán tổng hợp, dầu khoáng và diesel từ 0W40 tới 20W50.',
    link: '/dich-vu/thay-dau',
  },
];

import Link from 'next/link';

export default function ServiceGrid() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center text-red-600 ">DỊCH VỤ</h2>
      <hr className="border-1 border-gray-500 my-3 w-64  mx-auto mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 ">
        {services.map((item, idx) => (
          <div key={idx} className="text-center border-gray-400 border-1 rounded-2xl">
            {item.icon}
            <h3 className="font-bold text-center ml-2  h-15">{item.title}</h3>
            <p className="text-sm mt-2 mb-2  text-center ml-2  h-15 ">{item.desc}</p>
            <Link href={item.link}>
              <span className="text-red-600 font-semibold hover:underline inline-flex items-center gap-1">
                XEM THÊM →
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
