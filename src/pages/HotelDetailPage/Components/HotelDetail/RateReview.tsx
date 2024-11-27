import {
  RateReviewWrapper,
  RateHeader,
  TitleStyle,
  DetailLink,
  CircleEvaluationContainer,
  CircleContainer,
  EvaluationList,
  EvaluationItem,
  ProgressBarWrapper,
  ProgressBarForeground,
  RectangleBackground,
  CircleWrapper,
  RateText,
  BottomStyle,
} from "./RateReview.style";
import { useTheme } from "@emotion/react";
import { Ellipse27, Ellipse28 } from "@assets/svg";

const RateReview = () => {
  const theme = useTheme();

  const Rate = {
    score: 8.3,
    label: "우수",
  };

  const Evaluations = [
    { label: "숙소 청결 상태", progress: 0.8 },
    { label: "부대시설", progress: 0.7 },
    { label: "위치", progress: 0.9 },
    { label: "서비스", progress: 0.85 },
    { label: "가격대비 만족도", progress: 0.75 },
  ];

  return (
    <div css={RateReviewWrapper}>
      <div css={RateHeader}>
        <h3 css={TitleStyle(theme)}>평가</h3>
        <a css={DetailLink(theme)}>자세히 보기 &gt;</a>
      </div>

      <div css={CircleEvaluationContainer}>
        <div css={CircleContainer}>
          <div css={RectangleBackground(theme)} />
          <div css={CircleWrapper}>
            <Ellipse28 />
            <Ellipse27 />
            <div css={RateText(theme)}>
              <span>{Rate.label}</span>
              <strong>{Rate.score}</strong>
            </div>
          </div>
        </div>

        <ul css={EvaluationList}>
          {Evaluations.map((evaluation, index) => (
            <li css={EvaluationItem} key={index}>
              <span>{evaluation.label}</span>
              <div css={ProgressBarWrapper}>
                <div
                  css={ProgressBarForeground}
                  style={{ width: `${evaluation.progress * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div css={BottomStyle} />
    </div>
  );
};

export default RateReview;
