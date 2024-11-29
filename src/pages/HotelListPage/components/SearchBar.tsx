import { IcFilter, IcMap, IcSearch } from "@assets/svg";
import { iconStyle } from "@styles/iconStyles";
import {
  hotelListHeaderWrapper,
  location,
  searchBar,
  searchInfo,
  searchIcon,
  dot,
  iconBorder,
} from "./SearchBar.style";

const cityNames: Record<number, string> = {
  1: '서울',
  2: '제주',
  6: '부산',
};

const SearchBar = ({ cityId }: { cityId: number }) => {
  const cityName = cityNames[cityId];

  return (
    <div css={hotelListHeaderWrapper}>
      <div css={searchBar}>
        <div>
          <h1 css={location}>{cityName}</h1>
          <div css={searchInfo}>
            <p>11월 23일 - 11월 24일</p>
            <div css={dot} />
            <p>투숙객 2명</p>
          </div>
        </div>

        <IcSearch css={[iconStyle(2.2, 2.2), searchIcon]} />
      </div>

      <div css={iconBorder}>
        <IcFilter css={iconStyle(2.2, 2.2)} />
      </div>

      <div css={iconBorder}>
        <IcMap css={iconStyle(3.5, 3.5)} />
      </div>
    </div>
  );
};

export default SearchBar;
