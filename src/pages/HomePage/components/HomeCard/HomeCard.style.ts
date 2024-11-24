import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const CardContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6.8rem;
  background-color: ${theme.color.white};
  border-radius: 5px;
  border: 2px solid ${theme.color.gray300};
  box-sizing: border-box;
  overflow: hidden;
  gap: 1.2rem;
`;

export const ImageContainer = css`
  width: 10.1rem;
  margin-left: -0.2rem;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const TextContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = css`
  ${theme.font.body1_b_14}
  color: ${theme.color.gray800};
`;

export const Count = css`
  ${theme.font.detail3_m_12}
  color: ${theme.color.gray700};
`;
