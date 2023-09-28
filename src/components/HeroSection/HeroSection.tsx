import React from "react";

import { Button } from "@/components/Button";

import "./styles.css";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="hero-content">
        <h3>
          Creamos soluciones informáticas que impulsan el futuro de tu negocio
        </h3>
        <Button />
      </div>
    </section>
  );
};

export default HeroSection;
