import Button from "@components/Button/Button";
import { roomDescriptionLayout } from "@pages/HotelDetailPage/components/RoomDescription/RoomDescription.style";
import RoomDescriptionCard from "@pages/HotelDetailPage/components/RoomDescriptionCard/RoomDescriptionCard";
import {
  HOTEL_DESCRIPTION,
  HOTEL_POLICY,
} from "@utils/constants/hotelDetail/hotelInfoData";

interface RoomDescriptionProps {
  handleScrollToTopButtonClick: () => void;
}

const RoomDescription = ({
  handleScrollToTopButtonClick,
}: RoomDescriptionProps) => {
  return (
    <div css={roomDescriptionLayout}>
      <RoomDescriptionCard title="호텔 정책">
        {HOTEL_DESCRIPTION}
      </RoomDescriptionCard>

      <RoomDescriptionCard title="호텔 정보 살펴보기">
        {HOTEL_POLICY}
      </RoomDescriptionCard>

      <Button variant="outlined" onClick={handleScrollToTopButtonClick}>
        페이지 상단으로 이동하기
      </Button>
    </div>
  );
};

export default RoomDescription;
