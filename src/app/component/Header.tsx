import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
export default function Header() {
  return (
    <header className="w-11/12 mx-auto flex justify-between items-center gap-10  mb-5 h-28 ">
      {/* Top Header */}

      <div className="w-2/5 h-full p-4 justify-start  bg-blue-500 rounded-md ">
        <div className="flex items-center w-max h-max font-bold justify-center rounded-md">
          <span>Đây là Logo</span>
        </div>
      </div>

      <div className="hidden md:flex w-2/5 items-center font-bold justify-start md:mt-0 rounded-md  ">
        <FaMapMarkerAlt className="text-rose-700 size-8 m-3" />
        <div className="flex flex-col ">
          <span className=" mb-1 font-bold text-sm"> Địa chỉ:</span>
          <span className="text-gray-500 text-sm">
            Số 7, Phùng Hưng, Phúc La, Hà Đông, HN
          </span>
        </div>
      </div>
      <div className="hidden md:flex w-1/5 items-center font-bold justify-center md:mt-0 rounded-md ">
        <FaEnvelope className="text-rose-700 size-8 m-3" />
        <div className="flex flex-col">
          <span className=" mb-1 font-bold text-sm"> Email:</span>
          <span className="text-gray-500 text-sm">Canhthach1994@gmail.com</span>
        </div>
      </div>
      <div className="hidden md:flex w-1/5 items-center font-bold justify-center md:mt-0 rounded-md   ">
        <FaPhone className="text-rose-700 size-8 m-3" />
        <div className="flex flex-col">
          <span className=" mb-1 font-bold text-sm"> Hotline:</span>
          <span className="text-gray-500 text-sm">0349.566.377</span>
        </div>
        
      </div>

      {/* Navigation */}
    </header>
  );
}
