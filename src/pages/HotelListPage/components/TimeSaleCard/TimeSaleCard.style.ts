import { css } from '@emotion/react';
import theme from '@styles/theme';

const timeSaleCardWrapper = css`
  display: flex;
  flex-direction: column;
  width: 19rem;
  height: 27.3rem;
  border-radius: 16px;
  background-color: ${theme.color.white};
`;

const timeSaleImage = css`
  width: 19rem;
  height: 11.2rem;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
`;

const timeSaleDescriptionWrapper = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 1rem 1rem 1.2rem 1rem;
`;

const timeSaleDetailWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const timeSaleTitle = css`
  ${theme.font.title6_b_14}
`;

const timeSaleRating = css`
  ${theme.font.button2_eb_12}
  color: ${theme.color.blue300};
`;

const timeSaleInfoWrapper = css`
  display: flex;
  gap: 1.2rem;
`;

const timeSalePrice = css`
  margin-top: auto;
  text-align: right;
  ${theme.font.title2_sb_20}
`;

const timeSaleLocation = css`
  display: flex;
  gap: 0.2rem;
  ${theme.font.body4_m_12}
`;

export {
  timeSaleCardWrapper,
  timeSaleImage,
  timeSaleDescriptionWrapper,
  timeSaleDetailWrapper,
  timeSaleTitle,
  timeSaleRating,
  timeSaleInfoWrapper,
  timeSalePrice,
  timeSaleLocation,
};
