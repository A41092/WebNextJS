"use client";
import SeachTypeCar from "./seachtypecar";
import { FaFilter } from "react-icons/fa";
import SeachBattery from "./seachsize";
import { useState } from "react";
export default function SetActiveForm() {
  const [ActiveForm, setActiveForm] = useState(() => SeachBattery);
  const [Boderbtn1, setBoderbtn1] = useState(true);
  const [Boderbtn2, setBoderbtn2] = useState(false);
  return (
    <>
      <div className=" hidden md:flex flex-col w-1/5 mt-5 font-semibold ">
        <h2 className="text-xl font-semibold text-center rounded-xl h-11 flex items-center justify-center">
          <FaFilter className=" mr-3" />
          Tìm kiếm Ắc quy
        </h2>
        <hr className="border-1 border-gray-500 my-3" />
        <div className="flex gap-1  ">
          <button
            onClick={() => {
              setActiveForm(() => SeachBattery);
              // click vào btn1 thêm boder btn1 và bỏ boderbtn2
              if (Boderbtn1 == true) {
                setBoderbtn2(false);
              } else {
                setBoderbtn1(true);
                setBoderbtn2(false);
              }
            }}
            // className=" size-10 font-semibold text-center w-1/2  border-t border-l border-r border-gray-700 "
            className={` ${
              Boderbtn1
                ? "size-10 font-semibold text-center w-1/2 border-t border-l border-r border-gray-400 rounded-tl-lg rounded-tr-lg bg-gray-300"
                : "size-10 font-semibold text-center w-1/2 "
            }`}
          >
            Ắc quy
          </button>

          <button
            onClick={() => {
              setActiveForm(() => SeachTypeCar);
              // nếu click vào btn2 thì thêm boder btn2 và bỏ boder btn1
              if (Boderbtn2 == true) {
                setBoderbtn1(false);
              } else {
                setBoderbtn2(true);
                setBoderbtn1(false);
              }
            }}
            className={` ${
              Boderbtn2
                ? "size-10 font-semibold text-center w-1/2  border-t border-l border-r border-gray-400 rounded-tl-lg rounded-tr-lg bg-gray-300"
                : "size-10 font-semibold text-center w-1/2  "
            }`}
          >
            Theo dòng xe
          </button>
        </div>

        <div className=" h-80  border-t  border-r border-b border-l border-gray-400 rounded-bl-lg rounded-br-lg ">
          <ActiveForm/>
          <div className=" flex text-amber-50 m-2 p-2 gap-2">
            <button className="bg-rose-700 w-1/2  font-bold p-2 items-center  rounded-lg">
              Xóa bỏ
            </button>
            <button className="bg-rose-700 w-1/2  font-bold p-2 items-center  rounded-lg">
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
