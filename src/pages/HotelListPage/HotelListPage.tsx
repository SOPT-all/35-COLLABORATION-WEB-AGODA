import { HOTEL_LIST_DATA } from '@utils/mocks/hotelListData';
import HotelListCard from './components/HotelListCard/HotelListCard';
import {
  hotelListHeaderContainer,
  cardWrapper,
  hotelListWrapper,
} from './HotelListPage.style';
import Header from '@components/Header/Header';
import SaleBox from './components/SaleBox';
import SearchBar from './components/SearchBar';
import OptionBar from './components/OptionBar';
import HotelListFooter from './components/HotelListFooter';

const HotelListPage = () => {
  return (
    <>
      <Header hasBackButton={true} />

      <div css={hotelListHeaderContainer}>
        <SearchBar />
        <OptionBar />
      </div>

      <div css={hotelListWrapper}>
        <SaleBox />
        <section css={cardWrapper}>
          {HOTEL_LIST_DATA.data.map((hotel) => (
            <HotelListCard key={hotel.hotelId} hotel={hotel} />
          ))}
        </section>
      </div>

      <HotelListFooter />
    </>
  );
};

export default HotelListPage;
