"use client";

import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 1200, dateAdded: "2024-02-01" },
  { id: 2, name: "Smartphone", price: 800, dateAdded: "2024-02-10" },
  { id: 3, name: "Tablet", price: 500, dateAdded: "2024-01-20" },
  { id: 4, name: "Headphones", price: 200, dateAdded: "2024-02-15" },
];

export default function ArrangeFiter() {
  const [sortType, setSortType] = useState("price-asc");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "price-asc") return a.price - b.price;
    if (sortType === "price-desc") return b.price - a.price;
    if (sortType === "date-newest") return new Date(b.dateAdded) - new Date(a.dateAdded);
    if (sortType === "date-oldest") return new Date(a.dateAdded) - new Date(b.dateAdded);
  });

  return (
    <div className=" flex  m-3">
      <h3 className="text-black mx-auto ">Sắp xếp theo: </h3>
      <select onChange={(e) => setSortType(e.target.value)} value={sortType} className=" mx-auto text-black rounded-lg">
        <option value="date-newest">Mới nhất</option>
        <option value="price-asc">Giá thấp → cao</option>
        <option value="price-desc">Giá cao → thấp</option>
        <option value="date-oldest">Cũ nhất</option>
      </select>
     
    </div>
  );
}
