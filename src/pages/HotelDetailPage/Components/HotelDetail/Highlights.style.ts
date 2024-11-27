import { css, Theme } from "@emotion/react";
import theme from "@styles/theme";

export const HighlightsWrapper = css`
  margin: 0rem;
`;

export const HighlightsHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1.6rem;
`;

export const TitleStyle = (theme: Theme) => css`
  ${theme.font.title5_b_16};
  color: ${theme.color.black};
`;

export const ServiceStyle = (theme: Theme) => css`
  ${theme.font.title6_b_14};
  color: ${theme.color.gray600};
  text-decoration: none;
  cursor: pointer;
  padding: 1.5rem;
`;

export const HighlightsContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LeftListStyle = (theme: Theme) => css`
  flex: 1;
  padding: 1.6rem;

  li {
    ${theme.font.body2_m_14};
    color: ${theme.color.black};
    display: flex;
    align-items: center;
    margin-bottom: 0.6rem;

    svg {
      margin-right: 0.2rem;
    }
  }
`;

export const RightListStyle = (theme: Theme) => css`
  flex: 1;
  list-style: none;
  padding: 1.6rem; /* LeftList와 동일한 padding 추가 */

  li {
    ${theme.font.body2_m_14};
    color: ${theme.color.black};
    display: flex;
    align-items: center;
    margin-bottom: 0.6rem;

    svg {
      margin-right: 0.2rem;
    }
  }
`;

export const BottomStyle = (theme: Theme) => css`
  border-bottom: 1px solid ${theme.color.gray300};
  width: 90%;
  padding-bottom: 0.6rem;
  margin:0 auto;
}`;
