import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const roomDetailLayout = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  padding: 0rem 2rem;
  margin-bottom: 1rem;
`;

export const roomDetailOneClickWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const rommDetailOneClickTextStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font.title5_b_16}
`;

export const roomDetailChipWrapper = css`
  display: flex;
  gap: 0.4rem;
  overflow-x: scroll;
`;

export const roomDetailCardContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const roomDetailNumberTextStyle = (theme: Theme) => css`
  ${theme.font.detail3_m_12}
  color: ${theme.color.black};
`;

export const roomDetailCardWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

export const roomDetailCardStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
