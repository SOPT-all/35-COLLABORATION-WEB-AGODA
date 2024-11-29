import { useParams } from "react-router-dom";

import Header from "@components/Header/Header";
import Highlights from "@pages/HotelDetailPage/components/HotelDetail/Highlights";
import RateReview from "@pages/HotelDetailPage/components/HotelDetail/RateReview";
import Location from "@pages/HotelDetailPage/components/HotelDetail/Location";
import HotelCarousel from "@components/Carousel/HotelCarousel";
import Detail from "@pages/HotelDetailPage/components/HotelDetail/Detail";
import TextReview from "@pages/HotelDetailPage/components/HotelDetail/TextReview";
import HeaderSelection from "@pages/HotelDetailPage/components/HotelDetail/HeaderSelection";
import RoomDetail from "@pages/HotelDetailPage/components/RoomDetail/RoomDetail";
import IsLiked from "./components/HotelDetail/Like/IsLiked";

import {
  HotelDetailContainer,
  HotelDetailLayout,
  CarouselWrapper,
  IsLikedWrapper,

} from "@pages/HotelDetailPage/HotelDetailPage.style";

import { useFetchHotelDetail } from "@apis/hoteldetail/useFetchHotelDetail";
  
  
import { useFetchRoomDetail } from "@apis/hoteldetail/useFetchRoomDetail";
import { useParams } from "react-router-dom";
import RoomDescription from "@pages/HotelDetailPage/components/RoomDescription/RoomDescription";

const HotelDetailPage = () => {
  const { hotelId } = useParams();
  const { data: roomData } = useFetchRoomDetail(Number(hotelId));
  
    const { data: hotelDetail } =
    useFetchHotelDetail(Number(hotelId));

  if (!hotelDetail || !hotelDetail.hotelImages) {
    return <div>No images available</div>;
  }

  const rooms = roomData?.rooms || [];
  const handleScrollToTopButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div css={HotelDetailLayout}>
      <div css={HotelDetailContainer}>
        <Header hasBackButton={true} />
        <HeaderSelection />
        <div css={CarouselWrapper}>
          <HotelCarousel images={hotelDetail.hotelImages} />
          <div css={IsLikedWrapper}>
            <IsLiked
              hotelId={hotelDetail.hotelId}
              isLiked={hotelDetail.isLiked}
            />
          </div>
        </div>
        <Detail
          hotelName={hotelDetail.hotelName}
          reservationCount={hotelDetail.reservationCount}
          star={hotelDetail.star}
        />
        <Highlights />
        <RateReview />
        <TextReview />
        <Location />
      </div>

      <RoomDetail roomData={rooms} />
      <RoomDescription handleScrollToTopButtonClick={handleScrollToTopButtonClick}/>
    </div>
  );
};

export default HotelDetailPage;
