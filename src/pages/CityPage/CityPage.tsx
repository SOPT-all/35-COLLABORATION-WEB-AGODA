import { useFetchCities } from "@apis/city/useFetchCities";
import { CitiesType } from "@app-types/city";
import {
  CityCardWrapper,
  CityPageLayout,
} from "@pages/CityPage/CityPage.style";
import CityCard from "@pages/CityPage/components/CityCard/CityCard";
import CityHeader from "@pages/CityPage/components/CityHeader/CityHeader";

const CityPage = () => {
  const { data, isLoading } = useFetchCities();

  if (!data || isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <div css={CityPageLayout}>
      <CityHeader />
      <section css={CityCardWrapper}>
        {data.cities.map((city: CitiesType) => {
          return (
            <CityCard
              key={city.cityId}
              cityName={city.cityName}
              countryName={city.countryName}
            />
          );
        })}
      </section>
    </div>
  );
};

export default CityPage;
