import {
  cityCardChipStyle,
  cityCardChipWrapper,
  cityCardLayout,
  cityCardsubTitleStyle,
  cityCardTitleStyle,
  cityCardTitleWrapper,
} from "@pages/CityPage/components/CityCard/CityCard.style";
import routePath from "@routes/routePath";
import { useNavigate } from "react-router-dom";

interface CityCardProps {
  cityName: string;
  countryName: string;
}

const CityCard = ({ cityName, countryName }: CityCardProps) => {
  const navigate = useNavigate();

  const handleCityButtonClick = (city: string) => {
    if (city === "제주" || city === "부산" || city === "서울") {
      navigate(`${routePath.HOME}?city=${city}`);
    }
  };

  return (
    <article
      css={cityCardLayout}
      onClick={() => handleCityButtonClick(cityName)}
    >
      <div css={cityCardTitleWrapper}>
        <span css={cityCardTitleStyle}>{cityName}</span>
        <span css={cityCardsubTitleStyle}>
          도시: {cityName}, {countryName}
        </span>
      </div>
      <div css={cityCardChipWrapper}>
        <span css={cityCardChipStyle}>도시</span>
      </div>
    </article>
  );
};

export default CityCard;
