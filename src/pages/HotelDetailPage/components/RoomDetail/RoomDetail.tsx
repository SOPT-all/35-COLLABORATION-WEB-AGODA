import {
  rommDetailOneClickTextStyle,
  roomDetailCardContainer,
  roomDetailCardStyle,
  roomDetailCardWrapper,
  roomDetailChipWrapper,
  roomDetailLayout,
  roomDetailNumberTextStyle,
  roomDetailOneClickWrapper,
} from "@pages/HotelDetailPage/components/RoomDetail/RoomDetail.style";
import RoomDetailCard from "@pages/HotelDetailPage/components/RoomDetailCard/RoomDetailCard";
import RoomDetailChip from "@pages/HotelDetailPage/components/RoomDetailChip/RoomDetailChip";
import RoomDetailPriceCard from "@pages/HotelDetailPage/components/RoomDetailPriceCard/RoomDetailPriceCard";
import { ROOM_DETAIL_CHIP_DATA } from "@utils/constants/roomDetailChipData";
import { ROOM_DATA } from "@utils/mocks/roomData";

const RoomDetail = () => {
  return (
    <div css={roomDetailLayout}>
      <section css={roomDetailOneClickWrapper}>
        <span css={rommDetailOneClickTextStyle}>
          원클릭으로 원하는 객실 보기
        </span>
        <div css={roomDetailChipWrapper}>
          {ROOM_DETAIL_CHIP_DATA.map((data) => {
            return (
              <RoomDetailChip
                key={data.id}
                chipText={data.text}
                chipNumber={data.number}
              />
            );
          })}
        </div>
      </section>

      <section css={roomDetailCardContainer}>
        <span css={roomDetailNumberTextStyle}>총 12개 중 12개 객실 보기</span>
        <div css={roomDetailCardWrapper}>
          <div css={roomDetailCardStyle}>
            {ROOM_DATA.map((roomData) => {
              return (
                <div key={roomData.roomId}>
                  <RoomDetailCard roomData={roomData} />
                  <RoomDetailPriceCard />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetail;
