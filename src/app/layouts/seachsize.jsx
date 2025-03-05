"use client";
import React, { useState } from "react";
import { TextField, Autocomplete } from "@mui/material";

const optionsSize1 = [
  "-----","155","165","175","185","195","205","215","225","235","245","255","265","275","285","295","305"
];
const optionsSize2 = [
  "-----","50","55","60","65","70","75","80"
];
const optionsSize3 = [
  "-----","R13","R14","R15","R16","R17","R18","R19","R20","R21","R22"
];
export default function SeachSizeTire() {
  const [value1, setValue1] = useState(optionsSize1[0]);
  const [value2, setValue2] = useState(optionsSize2[0]);

  const [value3, setValue3] = useState(optionsSize3[0]);

  return (
    <>
      <form className="flex flex-col p-3 gap-2">
        <Autocomplete
          options={optionsSize1} // Danh sách gợi ý
          value={value1} // Giá trị đã chọn
          onChange={(event, newValue) => setValue1(newValue)} // Cập nhật giá trị
          renderInput={(params) => (
            <TextField
              {...params}
              label="Chiều rộng"
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
              label="Chiều cao"
              variant="outlined"
            />
          )}
          size="small"
        />
        <Autocomplete
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
        />
      </form>
    </>
  );
}
