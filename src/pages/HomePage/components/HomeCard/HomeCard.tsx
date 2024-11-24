import { CardContainer, ImageContainer, TextContainer, Title, Count } from './HomeCard.style';

interface CardProps {
  imageUrl: string;
  title: string;
  count: number;
}

const Card = ({ imageUrl, title, count }: CardProps) => {
  return (
    <div css={CardContainer}>
      <div css={ImageContainer}>
        <img src={imageUrl} alt={title} />
      </div>
      <div css={TextContainer}>
        <h3 css={Title}>{title}</h3>
        <p css={Count}>{count}개</p>
      </div>
    </div>
  );
};

export default Card;
