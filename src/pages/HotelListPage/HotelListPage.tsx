import { HOTEL_LIST_DATA } from "@utils/mocks/hotelListData";
import HotelListCard from "./components/HotelListCard/HotelListCard";
import {
  hotelListHeaderContainer,
  cardWrapper,
  hotelListWrapper,
} from "./HotelListPage.style";
import Header from "@components/Header/Header";
import SaleBox from "./components/SaleBox";
import SearchBar from "./components/SearchBar";
import OptionBar from "./components/OptionBar";
import HotelListFooter from "./components/HotelListFooter";
import { useState } from "react";
import TimeSaleSection from "./components/TimeSaleSection";

const HotelListPage = () => {
  const [showTimeSale, setShowTimeSale] = useState(false);

  const toggleTimeSale = () => {
    setShowTimeSale((prev) => !prev);
  };

  return (
    <>
      <Header hasBackButton={true} />

      <div css={hotelListHeaderContainer}>
        <SearchBar />
        <OptionBar
          toggleTimeSale={toggleTimeSale}
          showTimeSale={showTimeSale}
        />
      </div>

      <div css={hotelListWrapper}>
        <SaleBox />

        {showTimeSale && <TimeSaleSection />}

        <section css={cardWrapper}>
          {HOTEL_LIST_DATA.data.hotels.map((hotel) => (
            <HotelListCard key={hotel.hotelId} hotel={hotel} />
          ))}
        </section>
      </div>

      <HotelListFooter />
    </>
  );
};

export default HotelListPage;
