import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TinTuc() {
  return (
    <>
      <div className="space-y-3">
        <Link href="Lop275/45r18Bridgestone" className="block">
          <div className="flex  border-gray-300 border-1 rounded-2xl ">
            <div className="relative w-1/4 h-55 m-2 ">
              <Image
                src="/images/lop.png" // Đường dẫn ảnh trong thư mục public
                alt="Lốp 275/45r18 Bridgestone"
                width={300}
                height={200}
                className="w-55 h-55 p-1 rounded-xl object-cover"
              />
              <div className="absolute top-2 left-2 bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded ">
                <div className="text-center leading-4">
                  <div>28</div>
                  <div>Th11</div>
                </div>
              </div>
            </div>
            {/* Tiêu đề và mô tả */}
            <div className="ml-4 w-3/4 m-2 ">
              <h3 className="text-lg font-semibold">
                Lốp 275/45r18 Bridgestone mới thanh lý giá rẻ
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Lốp 275/45r18 Bridgestone mới thanh lý giá rẻ luôn đạt đúng tiêu
                chuẩn thông số Lốp 275/45r18 Bridgestone mới thanh lý giá rẻ
                luôn đạt đúng tiêu chuẩn thông số Lốp 275/45r18 Bridgestone mới
                thanh lý giá rẻ luôn đạt đúng tiêu chuẩn thông số
              </p>
            </div>
          </div>
        </Link>
        
        <Link href="Lop275/45r18Bridgestone " className="block">
          <div className="flex  border-gray-300 border-1 rounded-2xl ">
            <div className="relative w-1/4 h-55 m-2 ">
              <Image
                src="/images/lop.png" // Đường dẫn ảnh trong thư mục public
                alt="Lốp 275/45r18 Bridgestone"
                width={300}
                height={200}
                className="w-55 h-55 p-1 rounded-xl object-cover"
              />
              <div className="absolute top-2 left-2 bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded ">
                <div className="text-center leading-4">
                  <div>28</div>
                  <div>Th11</div>
                </div>
              </div>
            </div>
            {/* Tiêu đề và mô tả */}
            <div className="ml-4 w-3/4 m-2 ">
              <h3 className="text-lg font-semibold">
                Lốp 275/45r18 Bridgestone mới thanh lý giá rẻ
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Lốp 275/45r18 Bridgestone mới thanh lý giá rẻ luôn đạt đúng tiêu
                chuẩn thông số Lốp 275/45r18 Bridgestone mới thanh lý giá rẻ
                luôn đạt đúng tiêu chuẩn thông số Lốp 275/45r18 Bridgestone mới
                thanh lý giá rẻ luôn đạt đúng tiêu chuẩn thông số
              </p>
            </div>
          </div>
        </Link>

        <Link href="Lop275/45r18Bridgestone">
          <div className="flex  border-gray-300 border-1 rounded-2xl ">
            <div className="relative w-1/4 h-55 m-2 ">
              <Image
                src="/images/lop.png" // Đường dẫn ảnh trong thư mục public
                alt="Lốp 275/45r18 Bridgestone"
                width={300}
                height={200}
                className="w-55 h-55 p-1 rounded-xl object-cover"
              />
              <div className="absolute top-2 left-2 bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded ">
                <div className="text-center leading-4">
                  <div>28</div>
                  <div>Th11</div>
                </div>
              </div>
            </div>
            {/* Tiêu đề và mô tả */}
            <div className="ml-4 w-3/4 m-2 ">
              <h3 className="text-lg font-semibold">
                Lốp 275/45r18 Bridgestone mới thanh lý giá rẻ
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Lốp 275/45r18 Bridgestone mới thanh lý giá rẻ luôn đạt đúng tiêu
                chuẩn thông số Lốp 275/45r18 Bridgestone mới thanh lý giá rẻ
                luôn đạt đúng tiêu chuẩn thông số Lốp 275/45r18 Bridgestone mới
                thanh lý giá rẻ luôn đạt đúng tiêu chuẩn thông số
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
