import { IcBackWhite, IcCancle, IcCitySearch } from "@assets/svg";
import {
  cityHeaderBackIconStyle,
  cityHeaderCancleIconStyle,
  cityHeaderInputStyle,
  cityHeaderInputWrapper,
  cityHeaderLayout,
  cityHeaderSearchIconStyle,
  cityHeaderTitleStyle,
  cityHeaderTitleWrapper,
} from "@pages/CityPage/components/CityHeader/CityHeader.style";
import routePath from "@routes/routePath";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CityHeader = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleBackClick = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(routePath.HOME);
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClearInput = () => {
    setValue("");
  };

  return (
    <header css={cityHeaderLayout}>
      <div css={cityHeaderTitleWrapper}>
        <IcBackWhite css={cityHeaderBackIconStyle} onClick={handleBackClick} />
        <span css={cityHeaderTitleStyle}>여행지 선택</span>
      </div>

      <div css={cityHeaderInputWrapper}>
        <IcCitySearch css={cityHeaderSearchIconStyle} />
        <input
          placeholder="도시, 숙소명, 관광 또는 여행지"
          css={cityHeaderInputStyle}
          value={value}
          onChange={handleChangeInput}
        />
        <IcCancle css={cityHeaderCancleIconStyle} onClick={handleClearInput} />
      </div>
    </header>
  );
};

export default CityHeader;
