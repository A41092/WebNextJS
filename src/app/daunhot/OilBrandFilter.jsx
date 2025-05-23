"use client";
import React, { useState } from "react";
import { TextField, Autocomplete } from "@mui/material";

const options = [
  "Tất cả",
  "Dầu nhớt động cơ",
  "Dung dịch xúc rửa kim phun",
  "Dung dịch xúc rửa động cơ"
];

export default function AutoCompleteTireBrand() {
  const [value, setValue] = useState(options[0]);

  return (
    <div className="w-44 m-2 ">
        <Autocomplete
        options={options} // Danh sách gợi ý
        value={value} // Giá trị đã chọn
        onChange={(event, newValue) => setValue(newValue)} // Cập nhật giá trị
        renderInput={(params) => (
          <TextField {...params} label="Chọn chủng loại"  variant="outlined"  />
        )}
        size="small" 
        
        
      />
    </div>
  );
}
