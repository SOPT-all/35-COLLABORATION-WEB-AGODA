import Button from "@components/Button/Button";
import { titleStyle } from "@pages/HomePage/components/ListWithButton/ListWithButton.style";
import {
    allDescriptionStyle,
  buttonWrapper,
  descriptionCardLayout,
  descriptionStyle,
  shortDescriptionStyle,
  textWrapper,
} from "@pages/HotelDetailPage/components/RoomDescriptionCard/RoomDescriptionCard.style";
import { HTMLProps, useState } from "react";

interface RoomDescriptionCardProps extends HTMLProps<HTMLDivElement> {
  title: string;
}

const RoomDescriptionCard = ({ title, children }: RoomDescriptionCardProps) => {
  const [isSpread, setIsSpread] = useState(false);

  const handleButtonClick = () => {
    setIsSpread(!isSpread);
    console.log(isSpread);
  };

  return (
    <div css={descriptionCardLayout}>
      <div css={textWrapper}>
        <span css={titleStyle}>{title}</span>
        <span css={[descriptionStyle, isSpread ? allDescriptionStyle : shortDescriptionStyle]}>{children}</span>
      </div>

      <div css={buttonWrapper}>
        <Button variant="outlined" onClick={handleButtonClick}>
          {isSpread ? "닫기" : "더보기"}
        </Button>
      </div>
    </div>
  );
};

export default RoomDescriptionCard;
