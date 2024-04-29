import Image from "next/image";
import Container from "../Container";
import { truncateText } from "@/utils/trancate";
import Testimony from "./Testimony";

const Testimonials = () => {
  return (
    <Container>
      <div className="flex justify-center gap-2">
        <Testimony />
      <Testimony />
      <Testimony />
      </div>
    </Container>
  );
};

export default Testimonials;
