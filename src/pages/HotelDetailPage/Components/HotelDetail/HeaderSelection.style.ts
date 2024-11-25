import { css } from "@emotion/react";
import theme from "@styles/theme";

export const headerSelectionWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 1.1rem;
  background-color: ${theme.color.gray200};
`;

export const dateSelection = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    width: 2rem;
    height: 2rem;
  }

  span {
    ${theme.font.body3_sb_12}
    color:${theme.color.blue300}
  }
`;

export const iconWrapper = css`
  display: flex;
  align-items: center;
  gap: 1.3rem;

  div {
    display: flex;
    align-items: center;
    gap: 1.3rem;

    span {
      ${theme.font.body3_sb_12}
      color:${theme.color.blue300}
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
    &::before {
      content: "|";
      color: ${theme.color.gray300};
    }
  }
`;
