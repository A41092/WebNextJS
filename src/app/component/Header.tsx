import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaSearch,
  } from "react-icons/fa";
  import { FiAlignJustify } from "react-icons/fi";
  export default function Header() {
    return (
      <header className="w-11/12 mx-auto shadow-md mb-5">
        {/* Top Header */}
        <div className=" flex justify-between items-center gap-10 mb-2 ">
          <div className="w-1/4 p-4 justify-between  bg-blue-500 rounded-md ">
            <div className="flex items-center w-max h-max font-bold justify-center rounded-md">
              <span>Đây là Logo</span>
            </div>
          </div>
          <div className="hidden md:flex w-1/4 justify-between mt-4 md:mt-0rounded-md ">
            <div className="flex items-center font-bold justify-center  ">
              <FaMapMarkerAlt className="text-blue-900 size-8 m-3" />
              <span className="font-bold">Số 7, Phùng Hưng, Hà Đông, HN</span>
            </div>
          </div>
          <div className="hidden md:flex w-1/4 justify-between mt-4 md:mt-0rounded-md ">
            <div className="flex items-center font-bold justify-center  ">
              <FaEnvelope className="text-blue-900 size-8 m-3" />
              <span className="font-bold">Canhthach10@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:flex w-1/4 justify-between mt-4  md:mt-0 rounded-md  ">
            <div className="flex items-center font-bold justify-center  mt-3">
              <FaPhone className="text-blue-900 size-8 m-3" />
              <span className="font-bold">0349.566.377</span>
            </div>
          </div>
        </div>
  
        {/* Navigation */}
        <nav className="bg-blue-800 text-white  rounded-lg ">
          <div className="container mx-auto flex justify-between items-center px-6 py-2">
            {/* Menu */}
            <ul className="flex space-x-6 text-sm font-semibold gap-4 ">
              <li className="relative group">
                <a href="#" className="hover:text-gray-300">
                  <FiAlignJustify className="size-10" />
                </a>
              </li>
              <li className="relative group mt-2">
                <a href="#" className="hover:text-gray-300 ">
                  TRANG CHỦ
                </a>
              </li>
              <li className="relative group mt-2">
                <a href="#" className="hover:text-gray-300">
                  LỐP Ô TÔ 
                </a>
              </li>
              <li className="relative group mt-2">
                <a href="#" className="hover:text-gray-300">
                  DẦU NHỚT 
                </a>
              </li>
              <li className="relative group mt-2">
                <a href="#" className="hover:text-gray-300">
                  ẮC QUY 
                </a>
              </li>
              <li className="relative group mt-2">
                <a href="#" className="hover:text-gray-300">
                  PHỤ TÙNG, PHỤ KIỆN 
                </a>
              </li>
              <li className="relative group mt-2">
                <a href="#" className="hover:text-gray-300">
                  CỨU HỘ 24/7 
                </a>
              </li>
              <li className="relative group mt-2">
                <a href="#" className="hover:text-gray-300">
                  DỊCH VỤ 
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  TIN TỨC
                </a>
              </li>
            </ul>
  
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
      </header>
    );
  }
  