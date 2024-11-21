import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const cityHeaderLayout = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  width: 100%;
  height: 11.6rem;
  padding: 2.2rem 1rem 0.6rem 1rem;
  background-color: ${theme.color.blue300};
`;

export const cityHeaderTitleWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const cityHeaderBackIconStyle = css`
  position: absolute;
  left: 1rem;

  width: 2rem;
  height: 2rem;
`;

export const cityHeaderTitleStyle = (theme: Theme) => css`
  color: ${theme.color.white};
  ${theme.font.title4_b_16}
`;

export const cityHeaderInputWrapper = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;

  width: 100%;
  height: 4.8rem;
  padding: 1.4rem;

  background-color: ${theme.color.white};
  border-radius: 5px;
`;

export const cityHeaderSearchIconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const cityHeaderInputStyle = (theme: Theme) => css`
  width: 80%;
  border: none;
  color: ${theme.color.gray400};
  ${theme.font.body2_m_14}

  :focus {
    outline: none;
  }
`;

export const cityHeaderCancleIconStyle = css`
  width: 2rem;
  height: 2rem;
`;
