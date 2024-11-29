import { useQuery } from '@tanstack/react-query'; 
import { instance } from '@/apis/instance'; 
import { END_POINT } from '@utils/constants/api/api'; 
import { ApiResponse } from '@app-types/apiResponseType';
import { queryKey } from '@utils/constants/api/queryKey';
import { BestCountryResponse } from '@app-types/homeList';

const getBestCountries = async (): Promise<BestCountryResponse> => {
  try {
    const response = await instance.get<ApiResponse<BestCountryResponse>>(
      END_POINT.GET_BEST_LOCATIONS
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};


export const useFetchBestCountries = () => {
  return useQuery({
    queryKey: [queryKey.BEST_COUNTRIES], 
    queryFn: getBestCountries,
  });
};
