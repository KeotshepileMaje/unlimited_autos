import Container from "./Container";
import BookingsCard from "./cards/BookingCard";
import BackgroundCarousel from "./carousel/BackgroundCarousel";

const Header = () => {
    return (
      <div>
        <div className="border-b-4 border-merigold-100">
          <BackgroundCarousel>
            <div className=" mb-8 md:mb-0 text-center">
              <h1 className="text-4xl md:text-6xl text-white mb-4">
                DRIVE WITH THE BEST
              </h1>
              <div className="text-lg md:text-xl text-white md-2">
                BEST SERVICE
              </div>
              <p className="text-2xl md:text-5xl text-merigold-100 font-bold">
                BEST PRICES
              </p>
            </div>
          </BackgroundCarousel>
        </div>
        <Container>
          <div className="h-[30vh] px-4">
            <BookingsCard />
          </div>
        </Container>
      </div>
    );
}
 
export default Header;