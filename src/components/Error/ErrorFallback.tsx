import { FallbackProps } from 'react-error-boundary';
import { buttonWrapper, errorContainer, errorImg, errorTitle, retryButton } from './ErrorFallback.style';
import { useNavigate } from 'react-router-dom';
import errorEmoji from '@assets/img/img_error.png';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <div css={errorContainer}>
      <img css={errorImg} src={errorEmoji} alt='error' />
      <div css={errorTitle}>{error?.message}</div>
      <div css={buttonWrapper}>
        <button css={retryButton} type={'button'} onClick={resetErrorBoundary}>
          다시 시도하기
        </button>
        <button css={retryButton} type='button' onClick={handleNavigateHome}>
          홈으로 이동
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
