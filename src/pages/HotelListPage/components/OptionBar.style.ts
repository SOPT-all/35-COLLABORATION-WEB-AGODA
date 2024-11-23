import { css } from '@emotion/react';
import theme from '@styles/theme';

const optionWrapper = css`
  display: flex;
  gap: 0.6rem;
`;

const optionButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1.5rem;
  gap: 0.4rem;

  border-radius: 100px;
  border: 1px solid ${theme.color.gray300};
  background-color: ${theme.color.white};
  ${theme.font.body4_m_12}
  color: ${theme.color.gray600};
  cursor: pointer;
`;

const activeText = css`
  color: ${theme.color.black};
`;

const activeBorderButton = css`
  border: 1px solid ${theme.color.gray800};
  color: ${theme.color.gray700};
`;

export { optionWrapper, optionButton, activeText, activeBorderButton };
