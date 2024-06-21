"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/LayoutGrid";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <div className="text-center">
        <TextGenerateEffect words="Versatile Luxury Car Rental for Every Occasion" />
        <TextGenerateEffect words="Memories you can count on" />
      </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Business meetings</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Convey professionalism and class as you drive to your next executive
        gathering.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Corporate functions</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Make an impactful entrance at your corporate events.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Weddings</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Add a touch of grandeur to your special day with a sophisticated ride.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Stylish holidays</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Enhance your vacation with the comfort and luxury of our high-end
        vehicles.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Matric dances</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Arrive in style and create unforgettable memories at your significant
        school event.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.pexels.com/photos/8425018/pexels-photo-8425018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.pexels.com/photos/5717583/pexels-photo-5717583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.pexels.com/photos/6500685/pexels-photo-6500685.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:
      // "https://images.pexels.com/photos/16033917/pexels-photo-16033917/free-photo-of-black-4x4-ford-driving-off-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/9869547/pexels-photo-9869547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail:
      "https://images.pexels.com/photos/5290054/pexels-photo-5290054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
