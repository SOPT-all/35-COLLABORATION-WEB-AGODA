import { IcBath, IcBed, IcPeople, IcRoom } from "@assets/svg";
import { roomDetailCardContainer } from "@pages/HotelDetailPage/components/RoomDetail/RoomDetail.style";
import {
  roomOptionContainer,
  roomOptionIconStyle,
  roomOptionStyle,
  roomOptionTextStyle,
  roomOptionWrapper,
  roomTitleStyle,
} from "@pages/HotelDetailPage/components/RoomDetailCard/RoomDetailCard.style";

const RoomDetailCard = () => {
  return (
    <div>
      <section>
        <div>캐러셀</div>
        <div css={roomDetailCardContainer}>
          <span css={roomTitleStyle}>슈페리어 더블(Superior Double)</span>
          <div css={roomOptionContainer}>
            <div css={roomOptionWrapper}>
              <div css={roomOptionStyle}>
                <IcRoom css={roomOptionIconStyle} />
                <span css={roomOptionTextStyle}>19m</span>
              </div>
              <div css={roomOptionStyle}>
                <IcBath css={roomOptionIconStyle} />
                <span css={roomOptionTextStyle}>욕조 및 샤워실</span>
              </div>
            </div>
            <div css={roomOptionWrapper}>
              <div css={roomOptionStyle}>
                <IcBed css={roomOptionIconStyle} />
                <span css={roomOptionTextStyle}>퀸베드 1개</span>
              </div>
              <div css={roomOptionStyle}>
                <IcPeople css={roomOptionIconStyle} />
                <span css={roomOptionTextStyle}>최대 성인 2명</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetailCard;
