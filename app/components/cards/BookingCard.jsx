"use client";
import { FaRegCalendar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { useForm } from "react-hook-form";
import Input from "../form/Input";
import { useState } from "react";
import Container from "../Container";
import Button from "../Button";
import InputSimple from "../form/InputSImple";

export default function BookingsCard() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <div className="mx-auto p-4 border-2 border-indigo-600 rounded-b-xl ">
        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-around gap-4">
            <div className="w-full">
              <p className="font-bold text-sm">Pick-up & return</p>
              <InputSimple
                id="name"
                icon={FaRegCalendar}
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
            <p className="w-full flex items-center">
              + Different return location
              {/* <p className="font-bold text-sm">Pick-up & return</p>
              <InputSimple
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              /> */}
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <div>
              <p className="font-bold text-sm">Pick-up date</p>
              <div className="flex">
                <div className="basis-2/3">
                  <InputSimple
                    id="name"
                    icon={FaRegCalendar}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    roundedCorner="rounded-l-xl"
                  />
                </div>
                <div className="basis-1/3">
                  <InputSimple
                    id="name"
                    icon={MdAccessTime}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    roundedCorner="rounded-r-xl"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold text-sm">Return date</p>
              <div className="flex">
                <div className="basis-2/3">
                  <InputSimple
                    id="name"
                    icon={FaRegCalendar}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    roundedCorner="rounded-l-xl"
                  />
                </div>
                <div className="basis-1/3">
                  <InputSimple
                    id="name"
                    icon={MdAccessTime}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    roundedCorner="rounded-r-xl"
                  />
                </div>
              </div>
            </div>
            <div className="min-w-[200px] flex flex-grow">
              <div className="self-end w-full">
                <Button label="Show cars" onClick={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
