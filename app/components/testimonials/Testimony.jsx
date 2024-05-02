import { truncateText } from "@/utils/trancate";
import Image from "next/image";

const Testimony = ({ name, location, review }) => {
  return (
    <div className="p-4 border-2 border-navy w-[300px] h-[300px] bg-white rounded-xl">
      
      <div className="text-center mt-4">
        <h3>{name}</h3>
        <h4>{location}</h4>
        <p>{truncateText(review)}</p>
      </div>
    </div>
  );
};

export default Testimony;
