import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const HotelDetailLayout = (theme: Theme) => css`
  background-color: ${theme.color.gray200};

  display: flex;
  flex-direction: column;
`;

export const HotelDetailContainer = (theme: Theme) => css`
  background-color: ${theme.color.white};
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  margin-bottom: 7rem;
`;

export const CarouselWrapper = css`
  position: relative;
`;

export const IsLikedWrapper = css`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  z-index: 10;
`;
