import Header from "@components/Header/Header";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import ListWithButton from "./components/ListWithButton/ListWithButton";
import Spacing from "./components/Spacing";
import { bestDestinations, popularCities } from "@/utils/mocks/homeData";

const HomePage = () => {
  // bestDestinations 변환
  const formattedBestDestinations = bestDestinations.map(item => ({
    id: item.countryId,
    imageUrl: item.countryImage,
    title: item.countryName,
    count: item.hotelCount
  }));

  // popularCities 변환
  const formattedPopularCities = popularCities.map(item => ({
    id: item.cityId,
    imageUrl: item.cityImage,
    title: item.cityName,
    count: item.hotelCount
  }));

  return (
    <>
      <Header />
      <HomeHeader />
      
      <ListWithButton title="베스트 여행지" items={formattedBestDestinations} />
      <ListWithButton title="인기 도시" items={formattedPopularCities} />
      <Spacing width={0} height={10} />
    </>
  );
};

export default HomePage;
