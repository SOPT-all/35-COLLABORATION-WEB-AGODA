import StarRating from "@components/StarRating/StarRating";
import { IcGood } from "@assets/svg";

import {
  detailWrapper,
  bestseller,
  title,
  subtitleRow,
  subtitle,
  starRating,
  thumbsUpWrapper,
} from "./Detail.style";

const Detail = () => {
  return (
    <div css={detailWrapper}>
      <span css={bestseller}>베스트셀러</span>
      <h1 css={title}>호텔 파크하비오</h1>
      <div css={subtitleRow}>
        <div css={subtitle}>
          <span>호텔</span>
          <span css={starRating}>
            <StarRating rating={3} />
          </span>
        </div>
        <div css={thumbsUpWrapper}>
          <IcGood />
          <span>오늘 111회 예약됨</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
