
import AutoCompleteTireBrand from "./tirebrandfilter";
import AutoCompleteTireType from "./tiretypefilter";
import ArrangeFiter from "./arrangefilter";
import Image from "next/image";
import SetActiveForm from "./setActiveForm";
import TinTuc from "./TinTuc";

export default function Acquy() {
  

  return (
    <>
      
      <div className="w-11/12  mx-auto h-auto rounded-lg container flex mb-5 gap-2">
        {/* Sidebar */}
        <SetActiveForm />

        {/* Nội dung chính */}
        <div className="flex flex-col gap-6 flex-1 mt-5 mb-5  font-medium rounded-r-lg">
          <div className="h-14 flex border-1 border-gray-200 rounded-lg">
            <div className="w-3/4 flex gap-5 ml-5">
              <AutoCompleteTireBrand />
              <AutoCompleteTireType />
            </div>
            <div className="w-1/4 ml-5">
              <ArrangeFiter />
            </div>
          </div>
          <div className=" h-auto border-1 border-gray-200 rounded-lg">
            <div className="container mx-auto p-4">
              <h2 className="text-2xl  font-semibold text-center  ">
                Tin tức - sự kiện
              </h2>
              <hr className="border-1 border-gray-500 my-3 w-64  mx-auto mb-7" />
              {/* nội dung trang tin tức */}
              <TinTuc/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

 
