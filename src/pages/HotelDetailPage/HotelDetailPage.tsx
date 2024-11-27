import Highlights from "./Components/HotelDetail/Highlights";
import RateReview from "./Components/HotelDetail/RateReview";
import Location from "./Components/HotelDetail/Location";
import HotelCarousel from "@components/Carousel/HotelCarousel";
import Detail from "./Components/HotelDetail/Detail";
import TextReview from "./Components/HotelDetail/TextReview";
import Header from "@components/Header/Header";
import HeaderSelection from "./Components/HotelDetail/HeaderSelection";

const HotelDetailPage = () => {
  return (
    <>
      <Header hasBackButton={true} />
      <HeaderSelection />
      <HotelCarousel />
      <Detail />
      <Highlights />
      <RateReview />
      <TextReview />
      <Location />
    </>
  );
};

export default HotelDetailPage;
