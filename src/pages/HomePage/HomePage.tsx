import Header from "@components/Header/Header";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import ListWithButton from "./components/ListWithButton/ListWithButton";
import Spacing from "./components/Spacing";
import { useFetchBestCountries } from '@/apis/home/bestCountries';
import { useFetchPopularCities } from "@/apis/home/popularCity";
import { BestCountry, PopularCity } from "@app-types/homeList";

const HomePage = () => {
  const { data: bestCountries, isLoading: bestCountriesLoading} = useFetchBestCountries();
  const { data: popularCities, isLoading: popularCitiesLoading} = useFetchPopularCities();

  const formattedBestCountries = bestCountries?.bestCountries?.map((item: BestCountry) => ({
    id: item.countryId,
    imageUrl: item.countryImage,
    title: item.countryName,
    count: item.hotelCount,
  })) ?? [];

  const formattedPopularCities = popularCities?.popularCities?.map((item: PopularCity) => ({
    id: item.cityId,
    imageUrl: item.cityImage,
    title: item.cityName,
    count: item.hotelCount,
  })) ?? [];

  if (bestCountriesLoading || popularCitiesLoading) {
    return <span>로딩 중</span>;
  }

  return (
    <>
      <Header />
      <HomeHeader />
      <ListWithButton title="베스트 여행지" items={formattedBestCountries} />
      <ListWithButton title="인기 도시" items={formattedPopularCities} />
      <Spacing width={0} height={10} />
    </>
  );
};

export default HomePage;
