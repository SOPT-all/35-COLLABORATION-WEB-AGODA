import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const ChipContainer = css`
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.3rem;
  gap: 0.5rem;
  border-radius: 5px;
  ${theme.font.button1_m_14}
  background-color: ${theme.color.bluegreen200};
  color: ${theme.color.white}; 
  white-space: nowrap;
`;
