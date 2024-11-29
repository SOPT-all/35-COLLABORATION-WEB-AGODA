import { Theme } from '@emotion/react';
import { css } from '@emotion/react';

const errorContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const errorImg = css`
  width: 20rem;
  height: 20rem;
`;

const errorTitle = (theme: Theme) => css`
  margin-bottom: 2rem;
  ${theme.font.title1_sb_26}
`;

const buttonWrapper = css`
  display: flex;
  gap: 1rem;
`;

const retryButton = (theme: Theme) => css`
  width: 13rem;
  margin-bottom: 7rem;
  padding: 1rem 2.4rem;
  color: #fff;
  background-color: ${theme.color.blue300};
  border: none;
  border-radius: 10px;
  ${theme.font.button1_m_14}
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.blue400};
  }

  &:active {
    background-color: #003f7f;
  }
`;

export { errorContainer, errorImg, errorTitle, buttonWrapper, retryButton };
