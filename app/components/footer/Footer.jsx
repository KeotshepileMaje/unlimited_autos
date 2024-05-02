import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <div className="p-4 bg-emerald-900 text-white border-t-4 border-merigold-100">
      <Container>
        <div className="p-4">
          <div className="flex justify-between">
            <FooterList>
              <h3>About</h3>
              <Link href="#"></Link>
              <Link href="#"></Link>
              <Link href="#"></Link>
              <Link href="#"></Link>
              <Link href="#"></Link>
            </FooterList>
            <FooterList>
              <h3>Rent a Car</h3>
              <Link href="#">Request a Quote</Link>
              <Link href="#">Rent a vehicle</Link>
              <Link href="#">Special Offers</Link>
            </FooterList>
            <FooterList>
              <h3>Social Media</h3>
              <Link href="#">Twitter</Link>
              <Link href="#">LinkedIn</Link>
              <Link href="#">TikTok</Link>
              <Link href="#">Instagram</Link>
            </FooterList>
          </div>
          <div
            className="
            flex 
            items-center
            justify-between 
            gap-4
            "
          >
            <div>Intergrity & Compliance</div>
            <div>|</div>
            <div>Legal</div>
            <div>|</div>
            <div>Manage cookies</div>
            <div>|</div>
            <div>Privacy & Safety</div>
          </div>
          <div className="w-fit border-t-4 border-merigold-100  pt-2 mt-2">
            &copy; Unlimited Autos 2024
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
