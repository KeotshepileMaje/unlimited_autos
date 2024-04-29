import Testimonials from "./components/testimonials/Testimonials";
import CarsList from "./components/CarsList";
import AboutUs from "./components/AboutUs";
import BackgroundCarousel from "./components/carousel/BackgroundCarousel";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <AboutUs />
      <CarsList />
      <Testimonials />
      </main>
    </div>
  );
}
