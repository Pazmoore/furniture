import Experience from "@/components/Experience/Experience";
import HouseProducts from "@/components/products/houseProducts/HouseProducts";
import Automation from "@/windows/automation/Automation";
import React from "react";

const page = () => {
  return (
    <>
      <Automation />
      <Experience />
      <HouseProducts />
    </>
  );
};

export default page;
