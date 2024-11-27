import { roomDetailChipLayout } from "@pages/HotelDetailPage/components/RoomDetailChip/RoomDetailChip.style";

interface RoomDetailChipProps {
  chipText: string;
  chipNumber: string;
}

const RoomDetailChip = ({ chipText, chipNumber }: RoomDetailChipProps) => {
  return (
    <div css={roomDetailChipLayout}>
      <span>
        {chipText} ({chipNumber})
      </span>
    </div>
  );
};

export default RoomDetailChip;
