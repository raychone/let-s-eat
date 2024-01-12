import React from "react";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import About from "@/components/About";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
