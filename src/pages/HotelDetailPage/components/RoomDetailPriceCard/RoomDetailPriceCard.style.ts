import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const priceCardLayout = (theme: Theme) => css`
  background-color: ${theme.color.white};
  width: 100%;
  height: 17.1rem;
  border-radius: 10px;
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 1rem;
`;

export const priceCardInfoContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const priceCardInfoLeftWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const priceCardInfoTitle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font.title4_b_16}
`;

export const priceCardInfoText = (theme: Theme) => css`
  color: ${theme.color.red200};
  ${theme.font.body3_sb_12}
`;

export const priceCardInfoRightWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.9rem;
`;

export const priceCardInfoCashbackWrapper = (theme: Theme) => css`
  display: flex;
  gap: 0.3rem;
  padding: 0.1rem 0.6rem;
  background-color: ${theme.color.green100};
`;

export const priceCardInfoCouponWrapper = (theme: Theme) => css`
  display: flex;
  gap: 0.3rem;
  padding: 0.1rem 0.6rem;
  background-color: ${theme.color.red100};
`;

export const priceCardInfoLabelIconStyle = css`
  width: 2rem;
  height: 2rem;
`;

export const priceCardInfoCashbackTextStyle = (theme: Theme) => css`
  ${theme.font.detail2_b_12}
  color: ${theme.color.green400};
`;

export const priceCardInfoCouponTextStyle = (theme: Theme) => css`
  ${theme.font.detail2_b_12}
  color: ${theme.color.red300};
`;

export const PriceInfoWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const originalPriceTextStyle = (theme: Theme) => css`
  ${theme.font.body3_sb_12}
  color: ${theme.color.gray600};
  text-decoration: line-through;
`;

export const discountPriceTextStyle = (theme: Theme) => css`
  ${theme.font.title2_sb_20}
  color: ${theme.color.black};
`;

export const priceInfoTextStyle = (theme: Theme) => css`
  ${theme.font.detail5_m_10}
  color: ${theme.color.gray600};
`;

export const priceCardButtonContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const detailInfoButtonStyle = (theme: Theme) => css`
  color: ${theme.color.blue200};
  ${theme.font.detail4_m_12}
`;

export const cardButtonWrapper = css`
  display: flex;
  gap: 0.8rem;
`;

export const cartButtonStyle = (theme: Theme) => css`
  padding: 0.7rem;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.blue200};
  border-radius: 5px;
  height: 3.4rem;
`;

export const cardButtonIcon = css`
  width: 2rem;
  height: 2rem;
`;

export const buyButtonStyle = (theme: Theme) => css`
  padding: 0.7rem 2rem;
  background-color: ${theme.color.blue200};
  color: ${theme.color.white};
  ${theme.font.body1_b_14}

  border: none;
  border-radius: 5px;
  height: 3.4rem;
`;
