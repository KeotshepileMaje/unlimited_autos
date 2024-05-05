import List from "@/app/components/List";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Heading from "../../components/Heading";

const BookingCar = () => {
  return (
    <Container>
      <div>
        <div>
          <div>Bigger Image</div>
          <div>Small images</div>
        </div>
        <div>
          <div>
            <Heading title="Lamborghini Gallardo" />
          </div>
          <div>
            <div>
              <h2>Specifications</h2>
              <div><List>
                  <div className="flex justify-between">
                    <div>Engine</div>
                    <div>Answer</div>
                  </div>
                </List></div>
            </div>
          </div>
        </div>
        <div>
          <span>Description</span>
          <h2>Lamborghini Gallardo LP550-2 Rental</h2>
          <p>
            Lamborghini rental in Cape Town. In all history, Lamborghini is
            possibly the most legendary supercar manufacturer, and this model is
            one of their best creations. Lamborghini’s emblem is a bull and all
            their vehicles are named after fighting bulls. Bulls are a sign of
            strength, power, and virility. The Gallardo is named after the
            Gallardo bulls that were used to create the Miura line of fighting
            bulls in the mid-1800s. There are few things as exhilarating as
            driving a Lamborghini. Hire a Lamborghini in Cape Town for a day or
            more and partake of an unforgettable experience. Lamborghini’s
            beautiful machines are in a league all by themselves. This
            Lamborghini Gallardo has a 5.2-liter V-10 engine that sends large
            doses of power to the rear wheels via a six-speed dual-clutch
            transmission. The Gallardo is a sports car extraordinaire, from the
            powerful engine, the beautiful cabin, the sharp handling, and the
            exotic looks. The Gallardo performs well in all aspects, design,
            performance, looks, interior, functionality and power. Lamborghini
            builds cars for performance, and this model certainly performs. Even
            though the Gallardo goes from 0-100km’s an hour in a crazy 3.4
            seconds there is more to driving a Lamborghini than speed. It’s also
            about the style, the feel, and the image of driving a Lamborghini.
            Simply put there is nothing quite like driving a Lamborghini. For
            looks, the dramatic wedge shape, eye-popping factory color, and
            aggressive, flight-inspired details all turn heads and draw eyes.
            The seats are comfortable and the car is low to the ground. This
            vehicle is one of the most striking cars on the road. It also comes
            with numerous features such as: 4-wheel anti-lock braking system
            w/electronic brake-force distribution, Electronic stability control
            program, Viscous and brake-traction control system, Driver &
            passenger multi-stage front airbags, LED daytime running lights and
            much more. For those who want to drive the best, the Lamborghini
            Gallardo is a smart choice. Rent a Lamborghini in Cape Town.
          </p>
          <Button outline label="Learn More" />
        </div>
        <div>
          <h2>You might also like this</h2>
          <p>List of similar cars</p>
        </div>
      </div>
    </Container>
  );
};

export default BookingCar;
