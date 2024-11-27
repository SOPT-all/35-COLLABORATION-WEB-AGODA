import { css, Theme } from "@emotion/react";

export const LocationWrapper = css`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
`;

export const Header = css`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-bottom: 1rem;
`;

export const Title = (theme: Theme) => css`
  ${theme.font.title5_b_16};
  color: ${theme.color.black};
`;

export const Address = (theme: Theme) => css`
  ${theme.font.detail5_m_10};
  color: ${theme.color.gray600};
`;

export const ContentWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

export const MapContainer = css`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const NearbyContainer = css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const NearbyList = css`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const NearbyItem = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  ${theme.font.body4_m_12};
  color: ${theme.color.black};

  span:first-of-type {
    width: 8rem;
    white-space: nowrap;
  }

  span:last-of-type {
    width: 12rem;
    text-align: right;
    ${theme.font.body3_sb_12}
  }
`;

export const IconWrapper = css`
  width: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NearbyLink = (theme: Theme) => css`
  ${theme.font.body3_sb_12};
  color: ${theme.color.blue300};
  text-align: right;
`;

export const MapWrapper = css`
  width: 7.5rem;
  height: 7.5rem;
`;

export const MapButton = (theme: Theme) => css`
  position: absolute;
  bottom: 0.5rem;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  background-color: ${theme.color.white};
  color: ${theme.color.blue300};
  ${theme.font.detail2_b_12};
  border-radius: 10rem;
  z-index: 1; 
  }
`;
