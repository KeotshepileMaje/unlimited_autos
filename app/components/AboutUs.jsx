"use client";

import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";
import List from "./List";
import { BiSolidBusiness } from "react-icons/bi";
import { MdGroups2 } from "react-icons/md";
import Button from "./Button";
import { BackgroundBoxes } from "./ui/BackgroundBoxes";
import { cn } from "@/utils/cn";

const AboutUs = () => {
  return (

    <div
      data-aos="flip-right"
      className=" relative overflow-hidden w-full p-6 bg-merigold-100 min-h-[80vh] flex justify-center items-center"
    >
        <div className="absolute inset-0 w-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Container>
          <BackgroundBoxes />

          <div className="dark:bg-dark sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
            <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                <div>
                  <div className="space-y-5 sm:p-16 pb-6">
                    <h1
                      data-aos="fade-up"
                      className="text-3xl sm:text-4xl font-bold font-serif"
                    >
                      About us
                    </h1>

                    <p data-aos="fade-up" className="leading-6 tracking-wide">
                      At Unlimited Auto Rental, we redefine luxury by making it
                      accessible and affordable. Our carefully curated selection
                      of luxury car rentals is designed to suit every occasion.
                    </p>
                    <p data-aos="fade-up">
                      Whether you need to make an impression at a business
                      meeting, arrive in style at a matric dance, or simply
                      indulge in a touch of elegance for your travels, our
                      premium car hire range has you covered.
                    </p>
                    <button data-aos="fade-up" className="button-outline">
                      Get Started
                    </button>
                  </div>
                </div>
                <div data-aos="slide-left" data-aos-duration="1500">
                  <div className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]">
                    <Image
                      src="/about-car-pic.png"
                      alt=""
                      width={500}
                      height={500}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

    </div>
  );
};

export default AboutUs;
