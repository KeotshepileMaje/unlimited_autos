"use client";

import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";
import List from "./List";
import { BiSolidBusiness } from "react-icons/bi";
import { MdGroups2 } from "react-icons/md";
import Button from "./Button";

const AboutUs = () => {
  return (
    <div className="p-6 bg-merigold-100 min-h-[60vh] flex justify-center items-center">
      <Container>
        <div className="m-auto p-4 border-4 rounded-xl">
          <div>
            <Heading title="Unlimited Auto Rentals" />
            <div className="flex">
              <div className="basis-2/3">
                <h3 className="font-bold">
                  Versatile Luxury Car Rental for Every Occasion
                </h3>
                <p>
                  Our luxury vehicles are not just about opulence; they are
                  about versatility and making a statement. Ideal for a variety
                  of events, including but not limited to:
                </p>
                <div className="p-4">
                  <List>
                    <MdGroups2 size={30} />
                    <div>
                      Business meetings: Convey professionalism and class as you
                      drive to your next executive gathering.
                    </div>
                  </List>
                  <List>
                    <BiSolidBusiness size={30} />
                    <div>
                      <span>Corporate functions: </span>Make an impactful
                      entrance at your corporate events.
                    </div>
                  </List>
                  <List>
                    <Image
                      src="/icons/wedding.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <div>
                      Weddings: Add a touch of grandeur to your special day with
                      a sophisticated ride.
                    </div>
                  </List>
                  <List>
                    <Image
                      src="/icons/vacation.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <div>
                      Stylish holidays: Enhance your vacation with the comfort
                      and luxury of our high-end vehicles.
                    </div>
                  </List>
                  <List>
                    <Image
                      src="/icons/dancing.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <div>
                      Matric dances: Arrive in style and create unforgettable
                      memories at your significant school event.
                    </div>
                  </List>
                </div>
              </div>
              <div className="basis-1/3 group">
                <div className="relative flex justify-center w-full h-full overflow-hidden border-4 rounded-xl">
                  <Image
                    src="/cars-for-rent/memories.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute bottom-0 p-4 max-w-[400px] ">
                    <div
                      className="hidden 
                  group-hover:block "
                    >
                      <Button
                        label="View memories of happy client"
                        onClick={() => {}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-4  ">
          <div className="max-w-[500px]">
            <Button label="View All Vehicles" onClick={() => {}} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
