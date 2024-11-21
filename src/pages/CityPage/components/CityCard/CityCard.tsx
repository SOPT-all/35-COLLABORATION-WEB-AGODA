import {
  cityCardChipStyle,
  cityCardChipWrapper,
  cityCardLayout,
  cityCardsubTitleStyle,
  cityCardTitleStyle,
  cityCardTitleWrapper,
} from "@pages/CityPage/components/CityCard/CityCard.style";

interface CityCardProps {
  cityName: string;
  countryName: string;
}

const CityCard = ({ cityName, countryName }: CityCardProps) => {
  return (
    <article css={cityCardLayout}>
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
