import { HotelList } from "@app-types/hotelList";
import { IcEmptyHeart, IcFillHeart, IcMap, TagLightred } from "@assets/svg";
import { iconStyle } from "@styles/iconStyles";
import StarRating from "@components/StarRating/StarRating";
import {
  hotelCardWrapper,
  hotelInfoWrapper,
  hotelDescriptionWrapper,
  hotelCardImage,
  hotelTitle,
  hotelDetailWrapper,
  hotelLocation,
  hotelReviewWrapper,
  hotelRating,
  hotelReview,
  hotelHeartIcon,
  hotelPriceWrapper,
  hotelOriginalPrice,
  hotelDiscountPrice,
  hotelTaxPrice,
  hotelTagPrice,
} from "./HotelListCard.style";
import { useNavigate } from "react-router-dom";
import routePath from "@routes/routePath";

const HotelListCard = ({ hotel }: { hotel: HotelList }) => {
  const {
    hotelId,
    hotelName,
    star,
    hotelDistrict,
    rating,
    reviewCount,
    originalPrice,
    discountPrice,
    taxPrice,
    isLiked,
    hotelImage,
    isQuarterDiscount,
  } = hotel;

  const navigate = useNavigate();
  const handleCardClick = (hotelId: number) => {
    navigate(routePath.HOTEL_DETAIL.replace(":hotelId", String(hotelId)));
  };

  return (
    <article css={hotelCardWrapper} onClick={() => handleCardClick(hotelId)}>
      <div>
        <img
          src={hotelImage ?? "https://placehold.co/144x180"}
          alt={hotelName}
          css={hotelCardImage}
        />
      </div>

      <div css={hotelInfoWrapper}>
        <div css={hotelDescriptionWrapper}>
          <h3 css={hotelTitle}>{hotelName}</h3>
          <StarRating rating={star} variant="default" />
          <div css={hotelDetailWrapper}>
            <div css={hotelLocation}>
              <IcMap css={iconStyle(1.2, 2)} />
              <p>{hotelDistrict}</p>
            </div>

            <div css={hotelReviewWrapper}>
              <p css={hotelRating}>{rating}</p>
              <p css={hotelReview}>후기 {reviewCount}건</p>
            </div>
          </div>

          {isLiked ? (
            <IcFillHeart css={[iconStyle(1.6, 1.6), hotelHeartIcon]} />
          ) : (
            <IcEmptyHeart css={[iconStyle(1.6, 1.6), hotelHeartIcon]} />
          )}
        </div>

        <div css={hotelPriceWrapper}>
          {discountPrice > 0 && (
            <p css={hotelOriginalPrice}>₩ {originalPrice.toLocaleString()}</p>
          )}

          {isQuarterDiscount && discountPrice > 0 && (
            <div css={hotelTagPrice}>
              <TagLightred css={iconStyle(5.9, 1.8)} />
              <p css={hotelDiscountPrice}>₩ {discountPrice.toLocaleString()}</p>
            </div>
          )}

          {!isQuarterDiscount && discountPrice > 0 && (
            <p css={hotelDiscountPrice}>₩ {discountPrice.toLocaleString()}</p>
          )}

          {discountPrice <= 0 && (
            <p css={hotelDiscountPrice}>₩ {originalPrice.toLocaleString()}</p>
          )}

          <p css={hotelTaxPrice}>
            1박당 요금 | 세금 포함 ₩ {taxPrice.toLocaleString()}
          </p>
        </div>
      </div>
    </article>
  );
};

export default HotelListCard;
