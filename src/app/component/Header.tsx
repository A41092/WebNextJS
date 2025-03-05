
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaShoppingCart,
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
      
    </header>
  );
}
