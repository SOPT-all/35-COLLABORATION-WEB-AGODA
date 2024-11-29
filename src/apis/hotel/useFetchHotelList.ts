import { useQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';
import { END_POINT } from '@utils/constants/api/api';
import { queryKey } from '@utils/constants/api/queryKey';
import { HotelListResponse } from '@app-types/hotelList';
import { ApiResponse } from '@app-types/apiResponseType';

const getHotelsList = async (
  cityId: number,
  saleType: 'default' | 'timeLimit'
): Promise<HotelListResponse> => {
  try {
    const response = await instance.get<ApiResponse<HotelListResponse>>(
      END_POINT.GET_HOTELS_LIST(cityId, saleType)
    );

    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const useFetchHotelList = (
  cityId: number,
  saleType: 'default' | 'timeLimit'
) => {
  return useQuery({
    queryKey: [queryKey.HOTELS_LIST, cityId],
    queryFn: () => getHotelsList(cityId, saleType),
    select: (data) => {
      const timeSaleHotels = data.hotels.filter((hotel) => hotel.isTimeSale);
      const nonTimeSaleHotels = data.hotels.filter(
        (hotel) => !hotel.isTimeSale
      );
      return { timeSaleHotels, nonTimeSaleHotels };
    },
    staleTime: 5 * 60 * 1000,
  });
};
