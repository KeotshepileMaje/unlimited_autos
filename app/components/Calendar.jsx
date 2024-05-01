"use client";
/*
  Disclaimer:
  The code in this component was originally sourced from [source], 
  and has been modified to suit the requirements of this application.

  Original Source:
  - [source]: [tailwind](https://tailwindui.com/components/application-ui/data-display/calendars)

  Modifications:
  - Removed unused imports and dependencies not relevant to the current functionality.
  - Removed hardcoded data and logic related to displaying meetings.
  - Renamed function and component names to match the context of this application.
  - Removed context menu logic and related components.
  - Removed unused styling classes and constants.

  Please note that while efforts have been made to adapt the code to the specific needs of this project, some elements may still remain from the original source.
*/

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  parse,
  parseISO,
  startOfMonth,
  startOfToday,
  startOfWeek,
  isPast,
} from "date-fns";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar({ registeredId, handleOptionClick }) {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayOfCurrentMonth = startOfMonth(
    parse(currentMonth, "MMM-yyyy", new Date())
  );
  let days = eachDayOfInterval({
    start: startOfWeek(firstDayOfCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayOfCurrentMonth)),
  }).map((date) => ({
    date,
  }));

  function next() {
    let firstDayOfNextMonth = add(firstDayOfCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  }

  function previous() {
    let firstDayOfNextMonth = add(firstDayOfCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  }
  // console.log(selectedDay);

  useEffect(() => {
    handleOptionClick(registeredId, selectedDay);
  }, [selectedDay, handleOptionClick]);

  return (
    <div className="w-fit m-4 boreder-2 rounded-xl p-4">
      <div className=" md:px-6">
        <div className=" md:divide-gray-200">
          <div className="">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayOfCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                onClick={previous}
                type="button"
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <BiChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={next}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <BiChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => {
                return (
                  <div
                    key={day.date}
                    className={classNames(
                      dayIdx === 0 && colStartClasses[getDay(day.date)],
                      "pb-2 pr-2 pt-4"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        !isPast(day.date) && setSelectedDay(day.date)
                      }
                      }
                      className={classNames(
                        isPast(day.date) && "text-gray-200",
                        isEqual(day.date, selectedDay) && "text-black",
                        isEqual(day.date, selectedDay) &&
                          !isEqual(day.date, today) &&
                          !isPast(day.date) &&
                          "bg-merigold",
                        !isEqual(day.date, selectedDay) && "hover:bg-gray-200",
                        (isEqual(day.date, selectedDay) ||
                          isEqual(day.date, today)) &&
                          "font-semibold",
                        "mx-auto flex h-8 w-8 items-center justify-center rounded-full",
                        // Add class to highlight today's date
                        isEqual(day.date, today) && "bg-emerald-600"
                      )}
                    >
                      <time dateTime={day.date}>{format(day.date, "d")}</time>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
