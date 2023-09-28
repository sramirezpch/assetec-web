"use client";

import { useState } from "react";
import Image from "next/image";
import { LogoAssetec } from "@/assets";
import { NavbarMenu } from "@/components/Navbar/Menu";

import "./styles.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav style={{ backgroundColor: `rgb(0,0,0,${isVisible ? "1" : ".2"}` }}>
      <Image src={LogoAssetec} alt="Logo Assetec" width="200" height="67" />
      <NavbarMenu isVisible={isVisible} setIsVisible={setIsVisible} />
    </nav>
  );
};

export default Navbar;
