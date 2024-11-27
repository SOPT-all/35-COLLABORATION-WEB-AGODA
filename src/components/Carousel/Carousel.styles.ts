import { css } from "@emotion/react";

export const carouselContainer = css`
  margin: 0 auto;
  position: relative;

  .slick-slider {
    height: 100%;
  }

  .slick-dots {
    bottom: 10px;

    li {
      margin: 0 0.4rem;

      button:before {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.6);
        transition: color 0.3s ease;
      }
    }

    li.slick-active button:before {
      color: white;
    }
  }
`;

export const image = css`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
