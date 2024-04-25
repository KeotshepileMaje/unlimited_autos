"use client";

import { useForm } from "react-hook-form";
import Input from "../form/Input";
import { useState } from "react";
import Container from "../Container";
import Button from "../Button";
import { AiOutlineGoogle } from "react-icons/ai";

export default function ActionAreaCard() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <div className="p-4">
        <div className="p-4 border-2 border-indigo-600 rounded-xl ">
        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-around gap-4">
            <div className="w-full">
              <h3>Pick-up & return</h3>
              <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="w-full">
              <h3>Pick-up & return</h3>
              <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <h3>Pick-up date</h3>
              <div className="flex">
                <Input
                  id="name"
                  label="Name"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  roundedCorner="rounded-l-xl"
                />
                <Input
                  id="name"
                  label="Name"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  roundedCorner="rounded-r-xl"
                />
              </div>
            </div>
            <div>
              <h3>Return date</h3>
              <div className="flex">
                <Input
                  id="name"
                  label="Name"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  roundedCorner="rounded-l-xl"
                />
                <Input
                  id="name"
                  label="Name"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  roundedCorner="rounded-r-xl"
                />
              </div>
            </div>
            <div className="  flex flex-grow ">
              <div className="self-end w-full">
                <Button outline label="Show cars" onClick={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </Container>
  );
}
