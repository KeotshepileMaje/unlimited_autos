"use client";
import { FaRegCalendar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Button from "../Button";
import InputSimple from "../form/InputSImple";
import Calendar from "../Calendar";
import OpeningTimes from "../OpeningTimes";
import Item from "../Item";
import { IoIosReturnLeft } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

export default function BookingsCard() {
  const [isLoading, setIsLoading] = useState(false);
  const [differentReturnLocation, setDifferentReturnLocation] = useState(false);
  const {
    register,setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pickUpLocation: "",
      returnLocation: "",
      pickUpDate: "",
      pickUpTime: "",
      returnDate: "",
      returnTime: "",
    },
  });

  const locations = [
    { value: "Cape Town", label: "Cape Town" },
    { value: "Sandton City", label: "Sandton City" },
    { value: "Pretoria", label: "Pretoria" }
  ];

  const onSubmit = (data) => console.log(data);

  const handleOptionClick = (fieldName,value) => {
    setValue(fieldName, value);
  };

  return (
    <Container>
      <div className="mx-auto p-4 border-l-2 border-r-2 border-b-2 border-merigold-100 rounded-b-xl ">
        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-around gap-4">
            <div className="w-full">
              <p className="font-bold text-sm">
                Pick-up & {!differentReturnLocation && "return"}
              </p>
              <InputSimple
                id="pickUpLocation"
                icon={IoLocationOutline}
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              >
                <div className="flex flex-col gap-4 m-4">
                  {locations.map((location) => (
                    <Item
                      key={location.value}
                      onClick={() =>
                        handleOptionClick("pickUpLocation", location.value)
                      }
                    >
                      {location.label}
                    </Item>
                  ))}
                </div>
              </InputSimple>
            </div>
            <div className={`${differentReturnLocation && "w-full"}`}>
              <p className="font-bold text-sm">Pick-up & return</p>
              {!differentReturnLocation ? (
                <p
                  onClick={() => setDifferentReturnLocation(true)}
                  className="w-[250px] text-center hover:text-merigold-100 cursor-pointer"
                >
                  + Different return location
                </p>
              ) : (
                <InputSimple
                  id="returnLocation"
                  icon={IoLocationOutline}
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                >
                  <div className="flex flex-col gap-4 m-4">
                    <Item onClick={() => setDifferentReturnLocation(false)}>
                      <div className="flex items-center gap-4">
                        <IoIosReturnLeft size={36} />
                        <span>Retun at pick-up</span>
                      </div>
                    </Item>
                    <div className="flex flex-col gap-4">
                      {locations.map((location) => (
                        <Item
                          key={location.value}
                          onClick={() =>
                            handleOptionClick("returnLocation", location.value)
                          }
                        >
                          {location.label}
                        </Item>
                      ))}
                    </div>
                  </div>
                </InputSimple>
              )}
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div>
              <p className="font-bold text-sm">Pick-up date</p>
              <div className="flex">
                <div className="basis-2/3">
                  <InputSimple
                    id="pickUpDate"
                    icon={FaRegCalendar}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    roundedCorner="rounded-l-xl"
                  >
                    <Calendar
                      registeredId="pickUpDate"
                      handleOptionClick={handleOptionClick}
                    />
                  </InputSimple>
                </div>
                <div className="basis-1/3">
                  <InputSimple
                    id="pickUpTime"
                    icon={MdAccessTime}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    roundedCorner="rounded-r-xl"
                  >
                    <OpeningTimes
                      registeredId="pickUpTime"
                      handleOptionClick={handleOptionClick}
                    />
                  </InputSimple>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold text-sm">Return date</p>
              <div className="flex">
                <div className="basis-2/3">
                  <InputSimple
                    id="returnDate"
                    icon={FaRegCalendar}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    roundedCorner="rounded-l-xl"
                  >
                    <Calendar
                      registeredId="returnDate"
                      handleOptionClick={handleOptionClick}
                    />
                  </InputSimple>
                </div>
                <div className="basis-1/3">
                  <InputSimple
                    id="returnTime"
                    icon={MdAccessTime}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    roundedCorner="rounded-r-xl"
                  >
                    <OpeningTimes
                      registeredId="returnTime"
                      handleOptionClick={handleOptionClick}
                    />
                  </InputSimple>
                </div>
              </div>
            </div>
            <div className="min-w-[200px] flex flex-grow">
              <div className="self-end w-full">
                <Button
                  onClick={handleSubmit(onSubmit)}
                  label="Show cars"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
