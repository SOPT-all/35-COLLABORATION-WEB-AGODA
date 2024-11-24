import { css } from '@emotion/react';
import theme from '@/styles/theme';
import homeBackground from '@assets/img/home_background.png'; 

export const backgroundContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 56.4rem;
  background-image: url(${homeBackground});
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 1.2rem 0;
`;

export const categoryButtonContainer = css`
  display: flex;
  justify-content: center;
  gap: 0.9rem;
`;

export const text = css`
  ${theme.font.body3_sb_12}
  color: ${theme.color.white};
  text-align: center;
`;

export const chipContainer = css`
  display: flex;
  gap: 0.8rem;
  justify-content: flex-start;
  width: 100%;
  overflow-x: auto; 
  scroll-snap-type: x mandatory;

  > * {
    scroll-snap-align: start;
  }
`;