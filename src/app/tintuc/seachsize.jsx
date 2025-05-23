"use client";
import React, { useState } from "react";
import { TextField, Autocomplete } from "@mui/material";

const optionsSize1 = [
  "40AH","45AH","50AH","55AH","60AH","65AH","70AH","75AH","80AH","90AH","100AH"
];
const optionsSize2 = [
  "AtlatBX","GS","DongNai","Rocket","Enimac","Amaron","Avarta"
];
// const optionsSize3 = [
//   "R13","R14","R15","R16","R17","R18","R19","R20","R21","R22"
// ];
export default function SeachSizeTire() {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);

  return (
    <>
      <form className="flex flex-col p-1 gap-5  ">
        <span className=" flex items-center justify-center"></span>
        <Autocomplete
          options={optionsSize1} // Danh sách gợi ý
          value={value1} // Giá trị đã chọn
          onChange={(event, newValue) => setValue1(newValue)} // Cập nhật giá trị
          renderInput={(params) => (
            <TextField
              {...params}
              label="Dung lượng"
              variant="outlined"
            />
          )}
          size="small"
        />
        <Autocomplete
          options={optionsSize2} // Danh sách gợi ý
          value={value2} // Giá trị đã chọn
          onChange={(event, newValue3) => setValue2(newValue3)} // Cập nhật giá trị
          renderInput={(params) => (
            <TextField
              {...params}
              label="Hãng"
              variant="outlined"
            />
          )}
          size="small"
        />
        {/* <Autocomplete
          options={optionsSize3} // Danh sách gợi ý
          value={value3} // Giá trị đã chọn
          onChange={(event, newValue3) => setValue3(newValue3)} // Cập nhật giá trị
          renderInput={(params) => (
            <TextField
              {...params}
              label="Vành - Inch"
              variant="outlined"
            />
          )}
          size="small"
        /> */}
      </form>
    </>
  );
}
