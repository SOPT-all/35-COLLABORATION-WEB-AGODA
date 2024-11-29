import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const roomDescriptionLayout = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  border-top: 4px solid ${theme.color.gray300};
`;
