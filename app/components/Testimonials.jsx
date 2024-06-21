"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import Heading from "./Heading";

export default function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <div className="p-4 text-yellow-500">
        <Heading 
        title="Happy Customers"
        Center
        />
      </div>
      <InfiniteMovingCards
        items={testimonialsDetails}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonialsDetails = [
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
