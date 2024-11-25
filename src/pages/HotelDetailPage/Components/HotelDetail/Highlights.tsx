import {
  HighlightsWrapper,
  HighlightsHeader,
  TitleStyle,
  HighlightsContainer,
  LeftListStyle,
  RightListStyle,
  ServiceStyle,
  BottomStyle,
} from "./Highlights.style";
import IcCheck from "@assets/svg/IcCheck";
import { Vector48 } from "@assets/svg";

const Highlights = () => {
  const leftItems = [
    "예약 무료 취소 가능",
    "대중교통 (410m 거리)",
    "24시간 프런트 데스크",
  ];
  const rightItems = [
    "무료 Wi-Fi (모든 객실)",
    "주차장 | 주차 가능",
    "스파/스팀룸/한증실",
  ];

  return (
    <div css={HighlightsWrapper}>
      <div css={HighlightsHeader}>
        <h3 css={TitleStyle}>숙소 하이라이트</h3>
        <a css={ServiceStyle}>시설/서비스 전체보기 &gt;</a>
      </div>
      <div css={HighlightsContainer}>
        <ul css={LeftListStyle}>
          {leftItems.map((item, index) => (
            <li key={index}>
              <IcCheck width="20px" height="20px" /> {item}
            </li>
          ))}
        </ul>
        <ul css={RightListStyle}>
          {rightItems.map((item, index) => (
            <li key={index}>
              <IcCheck width="20px" height="20px" /> {item}
            </li>
          ))}
        </ul>
      </div>
      <div css={BottomStyle} />
    </div>
  );
};

export default Highlights;
