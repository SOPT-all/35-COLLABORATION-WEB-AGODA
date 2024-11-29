import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const descriptionCardLayout = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  background-color: ${theme.color.white};
  border-radius: 10px;

  padding: 1.6rem;
`;

export const textWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const titleStyle = (theme: Theme) => css`
  ${theme.font.title5_b_16};
  color: ${theme.color.black};
`;

export const descriptionStyle = (theme: Theme) => css`
  ${theme.font.body2_m_14};
  color: ${theme.color.gray700};
`;

export const allDescriptionStyle = css`
  height: 100%;
`;

export const shortDescriptionStyle = css`
  height: 4rem;
  overflow: hidden;
`;

export const buttonWrapper = css`
  width: 7rem;
`;
