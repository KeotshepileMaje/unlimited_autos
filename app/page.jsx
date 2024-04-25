import Carousel from "./components/Carousel";
import Pagination from "./components/Pagination";
import Testimonials from "./components/Testimonials";
import ActionAreaCard from "./components/cards/BookingCard";

export default function Home() {
  return <div>
    <Carousel/>
    <ActionAreaCard />
    <Testimonials />
    {/* <Pagination /> */}
  </div>;
}
