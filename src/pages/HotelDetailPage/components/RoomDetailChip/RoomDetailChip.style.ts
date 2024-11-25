import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const roomDetailChipLayout = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space : nowrap;

  padding: 0.4rem 1.2rem 0.2rem 1.2rem;
  width: 100%;
  height: 2.6rem;

  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.gray300};
  border-radius: 60px;

  ${theme.font.body1_b_14};
  color: ${theme.color.black};
`;
