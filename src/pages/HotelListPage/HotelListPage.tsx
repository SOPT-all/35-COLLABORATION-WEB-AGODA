import { useState } from "react";
import { useParams } from "react-router-dom";

import Header from "@components/Header/Header";
import SaleBox from "./components/SaleBox";
import SearchBar from "./components/SearchBar";
import OptionBar from "./components/OptionBar";
import HotelListFooter from "./components/HotelListFooter";
import TimeSaleSection from "./components/TimeSaleSection";
import HotelListCard from "@pages/HotelListPage/components/HotelListCard/HotelListCard";
import {
  hotelListHeaderContainer,
  cardWrapper,
  hotelListWrapper,
} from "./HotelListPage.style";
import { useFetchHotelList } from "@apis/hotel/useFetchHotelList";

const HotelListPage = () => {
  const [showTimeSale, setShowTimeSale] = useState(false);
  const { cityId } = useParams();
  const { data } = useFetchHotelList(Number(cityId), "timeLimit");

  const toggleTimeSale = () => {
    setShowTimeSale((prev) => !prev);
  };

  return (
    <>
      <Header hasBackButton={true} />

      <div css={hotelListHeaderContainer}>
        <SearchBar cityId={Number(cityId)} />
        <OptionBar
          toggleTimeSale={toggleTimeSale}
          showTimeSale={showTimeSale}
        />
      </div>

      <div css={hotelListWrapper}>
        <SaleBox />
        {showTimeSale && data && <TimeSaleSection data={data.timeSaleHotels} />}
        <section css={cardWrapper}>
          {data?.nonTimeSaleHotels.map((hotel) => (
            <HotelListCard key={hotel.hotelId} hotel={hotel} />
          ))}
        </section>
      </div>

      <HotelListFooter />
    </>
  );
};

export default HotelListPage;
