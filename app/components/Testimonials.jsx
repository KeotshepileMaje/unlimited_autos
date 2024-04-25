import Image from "next/image";
import Container from "./Container";
import { truncateText } from "@/utils/trancate";

const Testimonials = () => {
    return (
      <Container>
          <div className="p-4 border-2 border-indigo-600 rounded-xl max-w-[365px]">
            <div className="flex justify-center">
              <Image
                className="rounded-full"
                src="/profile_1.jpg"
                alt="Profile Image"
                width={130}
                height={130}
              />
            </div>
            <div className="text-center">
              <h3>Ran Segall</h3>
              <h3>Flux Academy</h3><p>
                {truncateText(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar diam id lorem vestibulum, in rutrum purus finibus. Nulla facilisi. Mauris nec tortor ac purus varius sodales. Proin aliquet turpis et accumsan vulputate. Integer vel nisl ut lorem congue vestibulum."
                )}
              </p>
            </div>
          </div>
      </Container>
    );
}
 
export default Testimonials;