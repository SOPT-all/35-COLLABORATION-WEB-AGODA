import { instance } from "@/apis/instance";
import { ApiResponse } from "@app-types/apiResponseType";
import { CitiesResponse } from "@app-types/city";
import { useQuery } from "@tanstack/react-query";
import { END_POINT } from "@utils/constants/api/api";
import { queryKey } from "@utils/constants/api/queryKey";

const getCities = async (): Promise<CitiesResponse> => {
  try {
    const response = await instance.get<ApiResponse<CitiesResponse>>(
      END_POINT.GET_CITIES
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const useFetchCities = () => {
  return useQuery({
    queryKey: [queryKey.CITIES],
    queryFn: getCities,
  });
};
