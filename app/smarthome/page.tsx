import SmartHome from "@/windows/smartHome/SmartHome";
import Experience from "@/components/Experience/Experience";
import HouseProducts from "@/components/products/houseProducts/HouseProducts";
import React from "react";

const page = () => {
  return (
    <div>
      <SmartHome />
      <Experience />
      <HouseProducts />
    </div>
  );
};

export default page;
