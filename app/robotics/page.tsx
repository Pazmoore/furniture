import Experience from "@/components/Experience/Experience";
import HouseProducts from "@/components/products/houseProducts/HouseProducts";
import Robotics from "@/windows/robotics/Robotics";
import React from "react";

const page = () => {
  return (
    <div>
      <Robotics />
      <Experience />
      <HouseProducts />
    </div>
  );
};

export default page;
