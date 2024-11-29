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
import { ROOM_DETAIL_CHIP_DATA } from "@utils/constants/hotelDetail/roomDetailChipData";
import { RoomDataType } from "@app-types/hotelDetail";

interface RoomDetailProps {
  roomData: RoomDataType[];
}

const RoomDetail = ({ roomData }:RoomDetailProps) => {
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
            {roomData?.map((room) => {
              return (
                <div key={room.roomId}>
                  <RoomDetailCard roomData={room} />
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
