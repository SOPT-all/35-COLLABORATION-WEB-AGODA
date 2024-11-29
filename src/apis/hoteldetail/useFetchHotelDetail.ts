import { useQuery } from "@tanstack/react-query";
import { instance } from "@apis/instance";
import { END_POINT } from "@utils/constants/api/api";

const getHotelDetail = async (hotelId: number) => {
  try {
    const response = await instance.get(END_POINT.GET_HOTEL_DETAIL(hotelId));
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const useFetchHotelDetail = (hotelId: number) => {
  return useQuery({
    queryKey: ["hotelDetail", hotelId],
    queryFn: () => getHotelDetail(hotelId),
  });
};
