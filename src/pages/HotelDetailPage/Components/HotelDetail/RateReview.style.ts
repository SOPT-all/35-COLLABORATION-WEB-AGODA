import { css, Theme } from "@emotion/react";

export const RateReviewWrapper = css`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const RateHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

export const TitleStyle = (theme: Theme) => css`
  ${theme.font.title5_b_16};
  color: ${theme.color.black};
  margin-left: 1.6rem;
  margin-top: 1rem;
`;

export const DetailLink = (theme: Theme) => css`
  ${theme.font.title6_b_14};
  color: ${theme.color.gray600};
  text-decoration: none;
  margin-right: 1.7rem;
`;

export const CircleEvaluationContainer = css`
  display: flex;
  align-items: flex-start;
  gap: 2.4rem;
  margin-left: 1.8rem;
`;

export const CircleContainer = css`
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
  margin-bottom: 2.4rem;
`;

export const RectangleBackground = (theme: Theme) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 12rem;
  height: 12rem;
  background-color: ${theme.color.gray100};
  border-radius: 2rem;
  z-index: 0;
`;

export const CircleWrapper = css`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const RateText = (theme: Theme) => css`
  position: absolute;
  z-index: 2;
  text-align: center;

  span {
    ${theme.font.title6_b_14};
    color: ${theme.color.gray700};
    display: block;
  }

  strong {
    ${theme.font.title1_sb_26};
    color: ${theme.color.blue300};
  }
`;

export const EvaluationList = css`
  list-style: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const EvaluationItem = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    margin-right: 1.2rem;
    ${theme.font.detail2_b_12};
    text-align: right;
    flex-grow: 1;
  }
`;

export const ProgressBarWrapper = (theme: Theme) => css`
  margin-right: 3.7rem;
  width: 12.1rem;
  height: 0.6rem;
  display: flex;
  position: relative;
  background-color: ${theme.color.gray200};
  border-radius: 10rem;
  overflow: hidden;
`;

export const ProgressBarForeground = (theme: Theme) => css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${theme.color.blue300};
  border-radius: 0.4rem;
`;

export const BottomStyle = (theme: Theme) => css`
  border-bottom: 1px solid ${theme.color.gray300};
  width: 90%;
  margin: 0 auto;
  margin-top: 1.9rem;
  padding-bottom: 0.6rem;
`;
