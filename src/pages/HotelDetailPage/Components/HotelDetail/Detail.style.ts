import { css, Theme } from "@emotion/react";
import theme from "@styles/theme";

export const detailWrapper = css`
  width: 100%;
  padding: 1.6rem;
`;

export const bestseller = css`
  display: inline-block;
  background-color: ${theme.color.red200};
  padding: 1px 8px;
  border-radius: 10rem;
  ${theme.font.body4_m_12}
  margin-bottom: 0.8rem;
  color: #fff;
`;

export const title = (theme: Theme) => css`
  ${theme.font.title2_sb_20};
  color: ${theme.color.black};
  margin: 0.8rem 0;
`;

export const subtitleRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const subtitle = css`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  span {
    color: ${theme.font.detail1_m_14};
    ${theme.font.detail1_m_14}
  }
`;

export const starRating = css`
  display: flex;
  align-items: center;
`;

export const thumbsUpWrapper = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  ${theme.font.body3_sb_12}
  color: ${theme.color.red200};

  svg {
    margin-bottom: 0.4rem;
    width: 1.6rem;
    height: 1.6rem;
  }
`;
