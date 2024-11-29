import {
  errorContainer,
  errorImg,
  errorTitle,
  retryButton,
} from './ErrorFallback.style';
import { useNavigate } from 'react-router-dom';
import errorEmoji from '@assets/img/img_error.png';

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <div css={errorContainer}>
      <img css={errorImg} src={errorEmoji} alt='error' />
      <div css={errorTitle}>페이지를 찾을 수 없습니다.</div>
      <div>
        <button css={retryButton} type='button' onClick={handleNavigateHome}>
          홈으로 이동
        </button>
      </div>
    </div>
  );
};

export default NotFound;
