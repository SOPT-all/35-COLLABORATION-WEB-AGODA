import { css } from '@emotion/react';
import theme from '@styles/theme';

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  width: 35.5rem;
  height: 25.5rem;
  padding: 1.2rem 1.2rem 1.3rem 1.2rem;
  background-color: ${theme.color.white};
  border-radius: 10px;
  gap: 0.8rem;
`;

export const searchIconStyle = css`
  color: ${theme.color.gray600};
`;

export const buttonStyle = css`
  display: flex;
  align-items: center;
  height: 4.8rem;
  padding: 1.3rem 0;
  border-radius: 5px;
  border: 1px solid ${theme.color.blue200};
  background-color: ${theme.color.white};
  color: ${theme.color.gray700};
  cursor: pointer;
`;

export const cityTextStyle = (hasCity: boolean) => css`
  ${hasCity ? theme.font.body1_b_14 : theme.font.body2_m_14};
`;

export const checkStyle = css`
  display: flex;
  align-items: center;
  height: 6.6rem;
  padding: 1.3rem 0;
  border-radius: 5px;
  border: 1px solid ${theme.color.gray300};
  color: ${theme.color.gray700}; 
`;

export const checkLabelStyle = css`
  display: flex;
  align-items: center;
  ${theme.font.body4_m_12} 
  color: ${theme.color.gray700};
`;

export const dateTextStyle = css`
  ${theme.font.title4_b_16} 
  color: ${theme.color.blue300};
`;

export const separatorStyle = css`
  width: 0.15rem;
`;

export const boxStyle = css`
  display: flex;
  align-items: center;
  padding: 1.2rem 0;
  height: 4.4rem;
  border-radius: 5px;
  border: 1px solid ${theme.color.gray300};
`;

export const boxSpanStyle=css`
  gap: 0.4rem;
`;
export const textStyle = css`
  ${theme.font.body2_m_14}
  color: ${theme.color.gray700};
`;

export const dynamicTextStyle = css`
  ${theme.font.body1_b_14}
  color: ${theme.color.blue200}; 
`;
