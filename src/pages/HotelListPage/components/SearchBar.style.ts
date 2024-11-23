import { css } from '@emotion/react';
import theme from '@styles/theme';

const hotelListHeaderWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const searchBar = css`
  display: flex;
  align-items: center;
  width: 69%;
  justify-content: space-between;
  padding: 0.4rem 1.5rem;
  border-radius: 24px;
  background-color: ${theme.color.gray200};
`;

const searchInfo = css`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  ${theme.font.body4_m_12}
  color: ${theme.color.gray600};
`;

const dot = css`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: ${theme.color.gray600};
`;

const searchIcon = css`
  margin-right: 0.1rem;
`;

const location = css`
  ${theme.font.body3_sb_12}
`;

const iconBorder = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  padding: 0.4rem;
  background-color: ${theme.color.gray200};
`;

export {
  hotelListHeaderWrapper,
  searchBar,
  searchInfo,
  dot,
  searchIcon,
  location,
  iconBorder,
};
