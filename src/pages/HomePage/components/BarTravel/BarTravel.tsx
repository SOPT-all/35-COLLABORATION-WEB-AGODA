import { useNavigate, useLocation } from "react-router-dom";
import Button from "@components/Button/Button";
import {
  IcCheckin,
  IcCheckout,
  IcPerson,
  IcSearch,
  IcSeparator,
} from "@assets/svg";
import Spacing from "../Spacing";
import routePath from "@routes/routePath";
import { iconStyle } from "@styles/iconStyles";
import {
  searchIconStyle,
  containerStyle,
  buttonStyle,
  checkStyle,
  boxStyle,
  textStyle,
  dynamicTextStyle,
  checkLabelStyle,
  dateTextStyle,
  separatorStyle,
  boxSpanStyle,
  cityTextStyle,
} from "./BarTravel.style";

const BarTravel = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city");

  const handleSearchClick = () => {
    const cityIdMap: { [key: string]: string } = {
      서울: "1",
      제주: "2",
      부산: "6",
    };

    if (city && cityIdMap[city]) {
      navigate(routePath.HOTEL_LIST.replace(":cityId", cityIdMap[city]));
    }
  };

  return (
    <div css={containerStyle}>
      <button css={buttonStyle} onClick={() => navigate(routePath.CITY)}>
        <Spacing width={12} height={0} />
        <IcSearch css={[iconStyle(2.2, 2.2), searchIconStyle]} />
        <Spacing width={12} height={0} />

        <span css={cityTextStyle(!!city)}>
          {city || "여행지/호텔명/프라이빗 하우스 검색"}
        </span>
      </button>

      <div css={checkStyle}>
        <Spacing width={12} height={0} />
        <IcCheckin css={iconStyle(2, 2)} />
        <Spacing width={12} height={0} />
        <div>
          <div css={checkLabelStyle}>체크인</div>
          <div css={dateTextStyle}>11월 23일 (토)</div>
        </div>

        <Spacing width={30} height={0} />
        <IcSeparator css={separatorStyle} />
        <Spacing width={12} height={0} />

        <IcCheckout css={iconStyle(2, 2)} />
        <Spacing width={12} height={0} />
        <div>
          <div css={checkLabelStyle}>체크아웃</div>
          <div css={dateTextStyle}>11월 24일 (일)</div>
        </div>
        <Spacing width={28} height={0} />
      </div>

      <div css={boxStyle}>
        <Spacing width={12} height={0} />

        <IcPerson css={[iconStyle(2, 2)]} />
        <Spacing width={12} height={0} />
        <div css={boxSpanStyle}>
          <span css={dynamicTextStyle}>1 </span>
          <span css={textStyle}>객실, </span>
          <span css={dynamicTextStyle}>2 </span>
          <span css={textStyle}>성인, </span>
          <span css={dynamicTextStyle}>0 </span>
          <span css={textStyle}>아동</span>
        </div>
      </div>

      <Button variant="filled" disabled={!city} onClick={handleSearchClick}>
        검색하기
      </Button>
    </div>
  );
};

export default BarTravel;
