import { Theme, css } from "@emotion/react";

export const cityCardLayout = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1.5rem;
  cursor: pointer;
`;

export const cityCardTitleWrapper = css`
  display: flex;
  flex-direction: column;
`;

export const cityCardTitleStyle = (theme: Theme) => css`
  ${theme.font.title5_b_16};
  color: ${theme.color.blue300};
`;

export const cityCardsubTitleStyle = (theme: Theme) => css`
  ${theme.font.button4_m_12};
  color: ${theme.color.gray500};
`;

export const cityCardChipWrapper = (theme: Theme) => css`
  width: 8rem;
  height: 2.4rem;

  border: 1px solid ${theme.color.gray600};
  border-radius: 5px;
`;

export const cityCardChipStyle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.color.gray600};
  ${theme.font.button3_sb_12}
`;
