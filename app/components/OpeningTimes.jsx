import { useEffect, useState } from "react";
import Item from "./Item";

const OpeningTimes = ({ registeredId, handleOptionClick }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const timeSlots = [
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
  ];

  useEffect(() => {
    handleOptionClick(registeredId, selectedTimeSlot);
  }, [selectedTimeSlot, handleOptionClick]);

  return (
    <div className="grid grid-cols-3 gap-4 m-4">
      {timeSlots.map((time, index) => (
        <Item onClick={() => setSelectedTimeSlot(time)} key={index}>
          {time}
        </Item>
      ))}
    </div>
  );
};
export default OpeningTimes
