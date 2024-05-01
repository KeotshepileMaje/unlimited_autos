import Image from "next/image";
import Container from "../Container";
import { truncateText } from "@/utils/trancate";
import Testimony from "./Testimony";
import Heading from "../Heading";

const Testimonials = () => {
  return (
    <Container>
      <Heading
      title='What People Say About Us'
      />
      <div className="flex justify-center gap-2">
        <Testimony />
        <Testimony />
        <Testimony />
      </div>
    </Container>
  );
};

export default Testimonials;
