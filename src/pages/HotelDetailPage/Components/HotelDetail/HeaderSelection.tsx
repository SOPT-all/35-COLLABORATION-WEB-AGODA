import { IcCalendar, IcPeople, IcKrw, IcRoom } from "@assets/svg";
import {
  headerSelectionWrapper,
  dateSelection,
  iconWrapper,
} from "./HeaderSelection.style";

const HeaderSelection = () => {
  return (
    <div css={headerSelectionWrapper}>
      <div css={dateSelection}>
        <IcCalendar />
        <span>11월 23일 - 11월 24일</span>
      </div>

      <div css={iconWrapper}>
        <div>
          <IcPeople />
          <span>2</span>
        </div>
        <div>
          <IcRoom />
          <span>1</span>
        </div>
        <div>
          <IcKrw />
        </div>
      </div>
    </div>
  );
};

export default HeaderSelection;
