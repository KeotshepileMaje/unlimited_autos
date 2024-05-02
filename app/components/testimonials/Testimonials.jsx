'use client'

import Image from "next/image";
import Container from "../Container";
import { truncateText } from "@/utils/trancate";
import Testimony from "./Testimony";
import Heading from "../Heading";
import Carousel from "../carousel/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

  const data = [
    {
      name: "Ran Segall",
      location: "Cape Town",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar diam id lorem vestibulum, in rutrum purus finibus. Nulla facilisi. Mauris nec tortor ac purus varius sodales. Proin aliquet turpis...",
    },
    {
      name: "Alice Johnson",
      location: "Johannesburg",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar diam id lorem vestibulum, in rutrum purus finibus. Nulla facilisi. Mauris nec tortor ac purus varius sodales. Proin aliquet turpis...",
    },
    {
      name: "John Doe",
      location: "Pretoria",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar diam id lorem vestibulum, in rutrum purus finibus. Nulla facilisi. Mauris nec tortor ac purus varius sodales. Proin aliquet turpis...",
    },
    {
      name: "Mary Smith",
      location: "Cape Town",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar diam id lorem vestibulum, in rutrum purus finibus. Nulla facilisi. Mauris nec tortor ac purus varius sodales. Proin aliquet turpis...",
    },
    {
      name: "David Brown",
      location: "Johannesburg",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar diam id lorem vestibulum, in rutrum purus finibus. Nulla facilisi. Mauris nec tortor ac purus varius sodales. Proin aliquet turpis...",
    },
  ];

const Testimonials = () => {

  return (
    <div className="py-6 min-h-[50vh] flex items-center bg-merigold-100">
      <Container>
        <div className="flex justify-between items-center m-4">
          <div className="text-6xl flex flex-col">
            <span>What</span>
            <span>People</span>
            <span>Say</span>
            <span>About</span>
            <span>Us</span>
          </div>
          <div
            className="w-full h-350px box-border position: relative;
  height: 100%;"
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {data.map((slide) => (
                <SwiperSlide>
                  <div><Testimony
                    key={slide.name}
                    name={slide.name}
                    location={slide.location}
                    review={slide.review}
                  /></div>
                  
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
