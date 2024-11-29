export interface HotelDetail {
  hotelId: number;
  isLiked: boolean;
  hotelName: string;
  star: number;
  reservationCount: number;
  hotelImages?: hotelImages;
}

export interface hotelImages {
  hotelImageId: number;
  hotelImageUrl: string;
}

export type RoomDataType = {
  roomId: number;
  roomName: string;
  spaceSize: number;
  bedType: string;
  bedCount: number;
  bathInfo: string;
  maxCapacity: number;
  roomImages: RoomImageType[];
};

export type RoomImageType = {
  roomImageId: number;
  roomImageUrl: string;
};

export interface RoomDetailResponse {
  rooms: RoomDataType[];
}