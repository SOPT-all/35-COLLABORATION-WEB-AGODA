import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { CategoryProps } from './CategoryButton';

export const CategoryButtonContainer = ({ isActive }: CategoryProps) => {
  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1.1rem 0.4rem 0.6rem;
    gap: 0.5rem;
    width: 8.2rem;
    height: 6.4rem;
    border-radius: 10px;
    cursor: ${isActive ? 'pointer' : 'default'};
    ${theme.font.button3_sb_12}
    background-color: ${isActive ? theme.color.white : theme.color.bluegreen100};
    color: ${isActive ? theme.color.blue300 : theme.color.white};
  `;
};
