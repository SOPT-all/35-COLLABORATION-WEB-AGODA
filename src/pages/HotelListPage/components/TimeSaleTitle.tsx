import { IcClock } from '@assets/svg';
import { iconStyle } from '@styles/iconStyles';
import { timeSaleTitleWrapper } from './TimeSaleTitle.style';

const TimeSaleTitle = () => {
  return (
    <div css={timeSaleTitleWrapper}>
      <IcClock css={iconStyle(1.5, 1.4)} />
      <h2>시간 한정 세일</h2>
    </div>
  );
};

export default TimeSaleTitle;
