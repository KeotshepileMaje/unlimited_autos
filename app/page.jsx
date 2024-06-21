"use client"

import { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css"
import Testimonials from "./components/Testimonials";
import CarsList from "./components/CarsList";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import GoogleMaps from "./components/GoogleMaps";
import BrandLogos from "./components/BrandLogos";
import Services from "./components/Services";
import LayoutGrid from "./components/LayoutGrid";

export default function Home() {

  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gray-100">
      <Header />
      {/* <BrandLogos /> */}
      <main>
        <Services />
        <AboutUs />
        <LayoutGrid />
        {/* <CarsList /> */}
        <Testimonials />
        <section className="mx-auto">
          <div
            className="
          bg-[url('/car-show.jpg')] bg-fixed bg-cover bg-center h-96 w-full 
          pl-4 pt-4 
          flex justify-center items-center
          text-6xl text-white"
          >
            BEST OF LUXURY
          </div>
        </section>
        <GoogleMaps />
      </main>
    </div>
  );
}
