"use client";
import React, { useState } from "react";
import { TextField, Autocomplete } from "@mui/material";
const optionsCarBrand = [
 "Toyota", "Honda", "Nissan", "Mazda", "Mitsubishi", "Subaru",
  "Volkswagen", "BMW", "Mercedes-Benz", "Audi", "Porsche", "Ford",
   "Chevrolet", "Tesla", "Jeep", "Dodge", "Hyundai", "Kia",  
    "Maserati",  "Rolls-Royce", "Bentley",
    "Jaguar", "Land Rover",  "Peugeot",
    "VinFast",
];
const optionsCarName = [
"Alphard", "Rush", "Wigo", "Avanza", "Land Cruiser Prado", "Hiace",
 "Granvia", "Trailblazer", "Colorado", "CX-5", "CX-8", "Mazda 3", 
 "Mazda 6", "Kia Morning", "Kia Seltos", "Kia Sorento", "Kia Carnival",
  "Kia K3", "Kia K5", "Kia Sonet", "Mitsubishi Xpander",
   "Mitsubishi Outlander", "Mitsubishi Pajero Sport", "Nissan Navara", 
   "Nissan Terra", "Subaru Forester", "Subaru Outback",
    "Mercedes-Benz C-Class", "Mercedes-Benz E-Class", 
    "Mercedes-Benz GLC", "BMW 3 Series", "BMW 5 Series", 
    "BMW X5", "Audi A4", "Audi Q5", "Lexus RX", "Lexus NX",
];
const optionsCarLife = [
  "2010","2011","2012","2013", "2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025",
];
export default function SeachTypeCar() {
    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    return(
      <>
        <form className="flex flex-col p-1 gap-5  ">
                <span className=" flex items-center justify-center"> Nhập kích thước lốp:</span>
                <Autocomplete
                  options={optionsCarBrand} // Danh sách gợi ý
                  value={value1} // Giá trị đã chọn
                  onChange={(event, newValue) => setValue1(newValue)} // Cập nhật giá trị
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Hãng xe"
                      variant="outlined"
                    />
                  )}
                  size="small"
                />
                <Autocomplete
                  options={optionsCarName} // Danh sách gợi ý
                  value={value2} // Giá trị đã chọn
                  onChange={(event, newValue3) => setValue2(newValue3)} // Cập nhật giá trị
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Tên xe"
                      variant="outlined"
                    />
                  )}
                  size="small"
                />
                <Autocomplete
                  options={optionsCarLife} // Danh sách gợi ý
                  value={value3} // Giá trị đã chọn
                  onChange={(event, newValue3) => setValue3(newValue3)} // Cập nhật giá trị
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Đời xe"
                      variant="outlined"
                    />
                  )}
                  size="small"
                />
              </form>
      </>
    );
}

