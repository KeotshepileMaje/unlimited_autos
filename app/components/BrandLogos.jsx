import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const brands = [
  { name: "Chery", logo: "/cars-logos/chery.png" },
  { name: "Lamborghini", logo: "/cars-logos/lamborghini.png" },
  { name: "Mercedes-Benz", logo: "/cars-logos/mercedes-benz.png" },
  { name: "Porsche", logo: "/cars-logos/porsche.png" },
];

const BrandLogos = () => {
  return (
    <Container>
      <div className="min-h-[20vh]">
        <Heading title="Available Brands" />
        <div className="flex justify-evenly items-center gap-4 p-4">
          {brands.map((brand, index) => (
            <div className="relative group">
              <div
                className="
              hover-buzz
              hover-sweep
              p-4
              border-2
              border-gray-300
              w-24
              h-24
              rounded-full
              overflow-hidden
            "
                key={index}
              >
                <Image src={brand.logo} alt={brand.name} fill />
              </div>
              {/* <div className="hidden group-hover:block absolute top-0 right-0">
                <BsBoxArrowInUpRight />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BrandLogos;
