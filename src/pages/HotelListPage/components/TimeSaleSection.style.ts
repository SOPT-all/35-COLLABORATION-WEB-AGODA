import { css } from '@emotion/react';
import theme from '@styles/theme';

const timeSaleWrapper = css`
  display: flex;
  gap: 1.2rem;
  padding: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

const dotsWrapper = css`
  display: flex;
  justify-content: center;
  padding: 0.3rem;
  gap: 0.8rem;
`;

const dotStyle = (isActive: boolean) => css`
  margin-bottom: 1.9rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${isActive ? theme.color.blue400 : theme.color.gray400};
  transition: background-color 0.3s;
`;

export { timeSaleWrapper, dotsWrapper, dotStyle };
