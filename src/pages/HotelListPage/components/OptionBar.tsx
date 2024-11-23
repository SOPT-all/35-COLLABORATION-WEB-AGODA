import {
  optionButton,
  optionWrapper,
  activeBorderButton,
  activeText,
} from './OptionBar.style';

interface OptionBarProps {
  toggleTimeSale: () => void;
  showTimeSale: boolean;
}

const OptionBar = ({ toggleTimeSale, showTimeSale }: OptionBarProps) => {
  return (
    <div css={optionWrapper}>
      <button css={optionButton}>
        <span>정렬</span>
        <span>|</span>
        <span css={activeText}>추천순</span>
      </button>

      <button
        css={[optionButton, showTimeSale && activeBorderButton]}
        onClick={toggleTimeSale}
      >
        시간 한정 세일 보기
      </button>
    </div>
  );
};

export default OptionBar;
