"use client";
import SeachTypeCar from "./seachtypecar";
import SeachSizeTire from "./seachsize";
import { useState } from "react";
export default function SetActiveForm() {
  const [ActiveForm, setActiveForm] = useState(() => SeachSizeTire);
  console.log("ActiveForm:", ActiveForm);
  return (
    <>
      <div className=" hidden md:flex flex-col w-1/5 p-4 mt-5 mr-5 mb-5 font-semibold rounded-l-l bg-gray-400">
        <h2 className="mx-auto mb-2 font-bold ">Bộ lọc - Tìm kiếm</h2>
        <div className="flex  gap-1">
          <button
            onClick={() => setActiveForm(() => SeachSizeTire)}
            className="bg-green-600 w-1/2 rounded-xl size-10"
          >
            Theo lốp
          </button>
          <button
            onClick={() => setActiveForm(() => SeachTypeCar)}
            className="bg-blue-600 w-1/2 rounded-xl size-10 "
          >
            Theo dòng xe
          </button>
        </div>
        <div className=" bg-red-400 h-4/5 mt-3">
          <div className=" bg-blue-300 m-2">
            <ActiveForm />
          </div>

          <div className=" flex bg-blue-300 m-2 p-2 gap-2">
            <button className="bg-blue-500 w-1/2  font-bold p-2 items-center  rounded-lg">
              X
            </button>
            <button className="bg-blue-500 w-1/2  font-bold p-2 items-center  rounded-lg">
              Lọc
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
