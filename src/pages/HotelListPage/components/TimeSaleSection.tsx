import { useState, useRef, useLayoutEffect } from 'react';
import TimeSaleCard from './TimeSaleCard/TimeSaleCard';
import {
  timeSaleWrapper,
  dotsWrapper,
  dotStyle,
} from './TimeSaleSection.style';
import TimeSaleTitle from './TimeSaleTitle';
import { calculateScrollIndex } from '@utils/scrollUtils';
import { HOTEL_LIST_DATA } from '@utils/mocks/hotelListData';

const TimeSaleSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timeSaleData = HOTEL_LIST_DATA.data.hotels.filter(
    (hotel) => hotel.isTimeSale
  );

  const handleScroll = () => {
    const container = scrollRef.current;
    const newIndex = calculateScrollIndex(container);
    if (newIndex !== undefined) {
      setActiveIndex(newIndex);
    }
  };

  useLayoutEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section>
      <TimeSaleTitle />

      <div css={timeSaleWrapper} ref={scrollRef}>
        {timeSaleData.map((hotel) => (
          <TimeSaleCard key={hotel.hotelId} hotel={hotel} />
        ))}
      </div>

      <div css={dotsWrapper}>
        {[...Array(3)].map((_, index) => (
          <div key={index} css={dotStyle(activeIndex === index)}></div>
        ))}
      </div>
    </section>
  );
};

export default TimeSaleSection;
