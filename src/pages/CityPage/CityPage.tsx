import {
  CityCardWrapper,
  CityPageLayout,
} from "@pages/CityPage/CityPage.style";
import CityCard from "@pages/CityPage/components/CityCard/CityCard";
import CityHeader from "@pages/CityPage/components/CityHeader/CityHeader";
import { cities } from "@utils/mocks/cities";

const CityPage = () => {
  return (
    <div css={CityPageLayout}>
      <CityHeader />
      <section css={CityCardWrapper}>
        {cities.map((cities) => {
          return (
            <CityCard
              key={cities.cityId}
              cityName={cities.cityName}
              countryName={cities.countryName}
            />
          );
        })}
      </section>
    </div>
  );
};

export default CityPage;
