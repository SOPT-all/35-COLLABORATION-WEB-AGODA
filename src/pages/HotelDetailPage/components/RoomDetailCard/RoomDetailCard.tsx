import { RoomDataType } from "@app-types/hotelDetail";
import { IcBath, IcBed, IcPeopleBlack, IcRoomBlack } from "@assets/svg";
import Carousel from "@components/Carousel/Carousel";
import { roomDetailCardContainer } from "@pages/HotelDetailPage/components/RoomDetail/RoomDetail.style";
import {
  roomDetailCardLayout,
  roomDetailCarouselLabelStyle,
  roomDetailCarouselStyle,
  roomOptionContainer,
  roomOptionIconStyle,
  roomOptionStyle,
  roomOptionTextStyle,
  roomOptionWrapper,
  roomTitleStyle,
} from "@pages/HotelDetailPage/components/RoomDetailCard/RoomDetailCard.style";

type RoomDetailCardProps = {
  roomData: RoomDataType;
};

const RoomDetailCard = ({ roomData }: RoomDetailCardProps) => {
  const {
    roomName,
    spaceSize,
    bedType,
    bedCount,
    bathInfo,
    maxCapacity,
    roomImages,
  } = roomData;

  const hotelRoomImages = roomImages.map((image) => {
    return image.roomImageUrl;
  });

  return (
    <section css={roomDetailCardLayout}>
      <div css={roomDetailCarouselStyle}>
        <div css={roomDetailCarouselLabelStyle}>커플/2인 여행객이 선호</div>
        <Carousel images={hotelRoomImages} variant="round" />
      </div>
      <div css={roomDetailCardContainer}>
        <span css={roomTitleStyle}>{roomName}</span>
        <div css={roomOptionContainer}>
          <div css={roomOptionWrapper}>
            <div css={roomOptionStyle}>
              <IcRoomBlack css={roomOptionIconStyle} />
              <span css={roomOptionTextStyle}>{spaceSize}㎡</span>
            </div>
            <div css={roomOptionStyle}>
              <IcBath css={roomOptionIconStyle} />
              <span css={roomOptionTextStyle}>{bathInfo}</span>
            </div>
          </div>
          <div css={roomOptionWrapper}>
            <div css={roomOptionStyle}>
              <IcBed css={roomOptionIconStyle} />
              <span css={roomOptionTextStyle}>
                {bedType} {bedCount}개
              </span>
            </div>
            <div css={roomOptionStyle}>
              <IcPeopleBlack css={roomOptionIconStyle} />
              <span css={roomOptionTextStyle}>최대 성인 {maxCapacity}명</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetailCard;
