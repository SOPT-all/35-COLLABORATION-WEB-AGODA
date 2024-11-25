import {
  reviewsWrapper,
  reviewsHeader,
  titleStyle,
  detailLink,
  reviewList,
  reviewItem,
  reviewTitle,
  ratingWrapper,
  reviewContent,
  BottomStyle,
} from "./TextReview.style";
import StarRating from "@components/StarRating/StarRating";

const TextReview = () => {
  const reviews = [
    {
      title: "고1 딸과 엄마의 서울여행",
      rating: 10.0,
      content:
        "아고다를 통해 알게된 호텔인데 롯데월드와 가깝고, 무료 영화관 및 무료 조식식사권은 정말 좋았어요! 다음에도 또 오겠습니다! ",
    },
    {
      title: "위치와 가성비가 좋아요",
      rating: 9.6,
      content:
        "이 가격에 숙박에 영화표까지 제공되는데 더 훌륭한 조식을 생각했다가 생각보다 조식은 별로였네요.. 하지만 좋았어요!",
    },
    {
      title: "집에 가기 싫어요",
      rating: 9.5,
      content:
        "아고다를 통해서 최저가로 예약해서 별 기대 없었는데 정말 좋았어요! 다음에도 여기로 예약할 것 같아요",
    },
  ];

  return (
    <div css={reviewsWrapper}>
      <div css={reviewsHeader}>
        <div css={titleStyle}>투숙객 이용 후기</div>
        <div css={detailLink}>12,274건 &gt;</div>
      </div>
      <div css={reviewList}>
        {reviews.map((review, index) => (
          <div key={index} css={reviewItem}>
            <div css={reviewTitle}>{review.title}</div>
            <div css={ratingWrapper}>
              <StarRating rating={5} variant="blue" />
              <span>{review.rating}</span>
            </div>
            <div css={reviewContent}>{review.content}</div>
          </div>
        ))}
      </div>
      <div css={BottomStyle} />
    </div>
  );
};

export default TextReview;
