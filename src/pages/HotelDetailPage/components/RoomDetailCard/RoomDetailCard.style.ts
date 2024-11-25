import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const roomDetailCardLayout = css`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 100%;

  margin-bottom: 1.6rem;
`;

export const roomDetailCarouselStyle = css`
  width: 100%;

  position: relative;
`;

export const roomDetailCarouselLabelStyle = (theme: Theme) => css`
  background-color: ${theme.color.purple200};
  color: ${theme.color.white};
  padding: 0.1rem 0.6rem;
  ${theme.font.detail3_m_12};
  width: 12.3rem;
  height: 2.2rem;

  position: absolute;
  top: 2rem;
  z-index: 1;
`;

export const roomDetailCardContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const roomTitleStyle = (theme: Theme) => css`
  ${theme.font.title3_sb_18};
  color: ${theme.color.black};
`;

export const roomOptionContainer = css`
  display: flex;
  gap: 2rem;
`;

export const roomOptionWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const roomOptionStyle = css`
  display: flex;
  gap: 0.9rem;
`;

export const roomOptionIconStyle = css`
  width: 2rem;
  height: 2rem;
`;

export const roomOptionTextStyle = (theme: Theme) => css`
  ${theme.font.body2_m_14};
  color: ${theme.color.black};
`;
