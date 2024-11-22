import Carousel from "./Carousel";
import { fakeHotelData } from "../../utils/mocks/fakeHotelData";

const HotelCarousel = () => {
  const { hotelImages } = fakeHotelData;

  return (
    <div>
      <Carousel images={hotelImages.map((image) => image.hotelImageUrl)} />
    </div>
  );
};

export default HotelCarousel;
