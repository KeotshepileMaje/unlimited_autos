"use client";
import Image from "next/image";
import Button from "./Button";
import Container from "./Container";

const data = {
  id: "64a6b8652a1c9b3717e2c1a4",
  name: "Audi A4 Luxury Car Rental",
  description: "Experience luxury with the Audi A4.",
  price: 250,
  brand: "Audi",
  category: "Car Rental",
  images: ["/cars-for-rent/2017-Mercedes-Benz-GLE-GLE500-1.png"],
  features: {
    transmission: "Automatic",
    passengers: 5,
    luggage: "x3",
    aircon: true,
    doors: 5,
  },
  reviews: [],
};

const CarsListCard = ({ data }) => {
  return (
    <div className="grid grid-flow-col m-4 p-4 border-2 border-indigo-600 rounded-xl">
      <div>
        <Image src={data.images[0]} alt={data.name} width={400} height={400} />
      </div>
      <div>
        <h2>{data.name}</h2>
        <div>
          <div>
            <div>Passengers: {data.features.passengers}</div>
            <div>Transmission: {data.features.transmission}</div>
            <div>Doors: {data.features.doors}</div>
            <div>{data.features.aircon ? "Aircon" : ""}</div>
          </div>
          <div className="flex gap-4">
            <Button outline label="More information" onClick={() => {}} />
            <Button label="BOOK NOW" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

const CarsList = () => {
  return (
    <div>
      <Container>
        <CarsListCard data={data} />
        <CarsListCard data={data} />
        <CarsListCard data={data} />
      </Container>
    </div>
  );
};

export default CarsList;
