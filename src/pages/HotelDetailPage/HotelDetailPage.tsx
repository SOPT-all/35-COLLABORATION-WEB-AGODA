import { css } from "@emotion/react";
import RoomDetail from "@pages/HotelDetailPage/components/RoomDetail/RoomDetail";

const HotelDetailPage = () => {
  return (
    <div
      css={(theme) => css`
        padding: 0rem 2rem;
        background-color: ${theme.color.gray200};
      `}
    >
      <RoomDetail />
    </div>
  );
};

export default HotelDetailPage;
