"use client";
import React, { useState } from "react";
import { TextField, Autocomplete } from "@mui/material";

const DoNhot = [
"5W-30","10W-40","15W-30","20W-50"
];
const HangDau = [
  "Castrol ","Motul","Eneo","PV Oil","ENEOS","Kixx"
];
const optionsSize3 = [
  "R13","R14","R15","R16","R17","R18","R19","R20","R21","R22"
];
export default function SeachSizeTire() {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);

  return (
    <>
      <form className="flex flex-col p-1 gap-5  ">
        <span className=" flex items-center justify-center"></span>
        <Autocomplete
          options={DoNhot} // Danh sách gợi ý
          value={value1} // Giá trị đã chọn
          onChange={(event, newValue) => setValue1(newValue)} // Cập nhật giá trị
          renderInput={(params) => (
            <TextField
              {...params}
              label="Độ nhớt"
              variant="outlined"
            />
          )}
          size="small"
        />
        <Autocomplete
          options={HangDau} // Danh sách gợi ý
          value={value2} // Giá trị đã chọn
          onChange={(event, newValue3) => setValue2(newValue3)} // Cập nhật giá trị
          renderInput={(params) => (
            <TextField
              {...params}
              label="Hãng dầu nhớt"
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
