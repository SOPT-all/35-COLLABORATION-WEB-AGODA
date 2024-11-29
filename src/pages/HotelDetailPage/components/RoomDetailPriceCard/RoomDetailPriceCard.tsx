import { IcCart2, IcTicketGreen, IcTicketRed } from "@assets/svg";
import {
  buyButtonStyle,
  cardButtonIcon,
  cardButtonWrapper,
  cartButtonStyle,
  detailInfoButtonStyle,
  discountPriceTextStyle,
  originalPriceTextStyle,
  priceCardButtonContainer,
  priceCardInfoCashbackTextStyle,
  priceCardInfoCashbackWrapper,
  priceCardInfoContainer,
  priceCardInfoCouponTextStyle,
  priceCardInfoCouponWrapper,
  priceCardInfoLabelIconStyle,
  priceCardInfoLeftWrapper,
  priceCardInfoRightWrapper,
  priceCardInfoText,
  priceCardInfoTitle,
  priceCardLayout,
  priceInfoTextStyle,
  PriceInfoWrapper,
} from "@pages/HotelDetailPage/components/RoomDetailPriceCard/RoomDetailPriceCard.style";
import { ROOM_DETAIL_CARD_PRICE_DATA } from "@utils/constants/hotelDetail/roomDetailPriceData";

const RoomDetailPriceCard = () => {
  const randomIndex = Math.floor(
    Math.random() * ROOM_DETAIL_CARD_PRICE_DATA.length
  );
  const selectedRoomData = ROOM_DETAIL_CARD_PRICE_DATA[randomIndex];

  const { roomName, roomCount, saleType, originalPrice, discountPrice } =
    selectedRoomData;

  return (
    <section css={priceCardLayout}>
      <section css={priceCardInfoContainer}>
        <div css={priceCardInfoLeftWrapper}>
          <span css={priceCardInfoTitle}>{roomName}</span>
          <span css={priceCardInfoText}>예약 가능한 객실 {roomCount}개</span>
        </div>

        <div css={priceCardInfoRightWrapper}>
          {saleType === "cashback" ? (
            <div css={priceCardInfoCashbackWrapper}>
              <IcTicketGreen css={priceCardInfoLabelIconStyle} />
              <span css={priceCardInfoCashbackTextStyle}>
                캐시백 ₩ 32,995 자동 적용
              </span>
            </div>
          ) : (
            <div css={priceCardInfoCouponWrapper}>
              <IcTicketRed css={priceCardInfoLabelIconStyle} />
              <span css={priceCardInfoCouponTextStyle}>
                할인쿠폰 ₩ 32,995 자동 적용
              </span>
            </div>
          )}

          <div css={PriceInfoWrapper}>
            <span css={originalPriceTextStyle}>₩ {originalPrice}</span>
            <span css={discountPriceTextStyle}>₩ {discountPrice}</span>
            <span css={priceInfoTextStyle}>
              1박당 요금 (세금 및 봉사료 제외)
            </span>
          </div>
        </div>
      </section>

      <section css={priceCardButtonContainer}>
        <span css={detailInfoButtonStyle}>객실 정보 자세히 보기</span>
        <div css={cardButtonWrapper}>
          <button css={cartButtonStyle}>
            <IcCart2 css={cardButtonIcon} />
          </button>
          <button css={buyButtonStyle}>지금 예약하기</button>
        </div>
      </section>
    </section>
  );
};

export default RoomDetailPriceCard;
