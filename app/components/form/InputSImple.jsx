"use client";

import React from "react";
import { useCallback, useState } from "react";
import Item from "../Item";
import Backdrop from "../Backdrop";
import Calendar from "../Calendar";
import OpeningTimes from '../OpeningTimes'
import Button from "../Button";

const InputSimple = ({
  id,
  icon: Icon,
  type,
  disabled,
  required,
  register,
  errors,
  children,
  value,
  roundedCorner = "rounded-xl",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  return (
    <div className="w-full relative">
      <div className="relative">
        <input
          value={value}
          onFocus={toggleOpen}
          autoComplete="off"
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder=""
          type={type}
          className={`
          z-30 
            peer
            w-full
            p-3 pl-12
            outline-none
            bg-white
            font-light
            border-2
            ${roundedCorner}
            disabled:opacity-70
            disabled:cursor-not-allowed
            ${errors[id] ? "border-rose-400" : "border-slate-300"}
            ${errors[id] ? "focus:border-rose-400" : "focus:border-slate-300"}
          `}
        />
        <label
          className={`
            absolute
            top-0
            left-0
            h-full
            flex
            items-center
            pl-3
            pointer-events-none
            text-gray-800
          `}
        >
          {Icon && <Icon size={24} />}
        </label>

        {isOpen && (
          <div
            className="
            z-30
            absolute left-0 mt-2 w-full
            min-w-[400px]
            rounded-xl
            shadow-md
            bg-white
            overflow-hidden
            right-0
            text-sm
            flex
            flex-col
            cursor-pointer
            "
          >
            <div className="m-4 sticky">
              <Button outline onClick={toggleOpen} label='Close'/>
            </div>

            {children}
          </div>
        )}
      </div>
      {isOpen ? <Backdrop onClick={toggleOpen} /> : null}
    </div>
  );
};

export default InputSimple;
