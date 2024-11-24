import { useState } from "react";
import Card from "@pages/HomePage/components/HomeCard/HomeCard";
import Button from "@components/Button/Button";
import { titleStyle, listStyle } from './ListWithButton.style';

interface ListItem {
  id: number;
  imageUrl: string;
  title: string;
  count: number;
}

interface ListWithButtonProps {
  title: string;
  items: ListItem[];
}

const ListWithButton = ({ title, items }: ListWithButtonProps) => {
  const [visibleCount, setVisibleCount] = useState(5);

  const toggleVisibility = () => {
    if (visibleCount === 5) {
      setVisibleCount(items.length);
    } else {
      setVisibleCount(5);
    }
  };

  return (
    <div css={listStyle}>
      <h2 css={titleStyle}>{title}</h2>
      {items.slice(0, visibleCount).map((item) => (
        <Card 
          key={item.id}
          imageUrl={item.imageUrl} 
          title={item.title} 
          count={item.count} 
        />
      ))}
      <Button variant="outlined" onClick={toggleVisibility}>
        {visibleCount === items.length ? "접기" : "더보기"}
      </Button>
    </div>
  );
};

export default ListWithButton;
