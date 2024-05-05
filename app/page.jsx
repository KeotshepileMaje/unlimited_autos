import Testimonials from "./components/testimonials/Testimonials";
import CarsList from "./components/CarsList";
import AboutUs from "./components/AboutUs";
import BackgroundCarousel from "./components/carousel/BackgroundCarousel";
import Header from "./components/Header";
import GoogleMaps from "./components/GoogleMaps";
import BrandLogos from "./components/BrandLogos";

export default function Home() {
  return (
    <div>

      
      <Header />
      <BrandLogos />
      <main>
        <AboutUs />
        <CarsList />
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
