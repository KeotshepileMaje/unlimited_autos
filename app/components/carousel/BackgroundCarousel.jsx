"use client";

import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxShadowOuter } from "react-icons/rx";
import Container from "../Container";

export const LeftArrow = ({ prevSlide }) => {
  return (
    <div>
      <div
        className=" 
                  hidden
                  group-hover:block
                  text-2xl
                  rounded-full
                  p-2
                  bg-black/20
                   text-white
                   cursor-pointer"
      >
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
    </div>
  );
};

export const RightArrow = ({ nextSlide }) => {
  return (
    <div>
      <div
        className="
                  hidden 
                  group-hover:block
                  text-2xl
                  rounded-full
                  p-2
                  bg-black/20
                  text-white
                  cursor-pointer"
      >
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

const BackgroundCarousel = ({children}) => {
  const slides = [
    {
      url: "/header/header-2.jpg",
    },
    {
      url: "/header/header-1.jpg",
    },
    {
      url: "/header/header-3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
      <div className="relative">
        <div className="mx-auto">
          <div className="relative">
            <div className=" w-full m-auto  relative group">
              <div
                style={{
                  backgroundImage: `url(${slides[currentIndex].url})`,
                }}
                className="w-full bg-center bg-cover duration-500"
              >
                <Container>
                  <div className="flex  justify-between items-center h-[60vh]">
                    <LeftArrow prevSlide={prevSlide} />
                    {children}
                    <RightArrow nextSlide={nextSlide} />
                  </div>
                  <div className=" flex justify-end  p-2">
                    <div  className="flex w-fit rounded-xl bg-blue-100">{slides.map((slide, slideIndex) => {
                      return (
                        <div
                          key={slideIndex}
                          onClick={() => goToSlide(slideIndex)}
                          className="text-2xl cursor-pointer"
                        >
                          {currentIndex === slideIndex ? (
                            <RxShadowOuter />
                          ) : (
                            <RxDotFilled />
                          )}
                        </div>
                      );
                    })}</div>
                    
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BackgroundCarousel;
