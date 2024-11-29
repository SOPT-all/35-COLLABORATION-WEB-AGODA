import axios, { AxiosError } from 'axios';
import { ERROR_MESSAGE } from '@utils/constants/api/errorMessage';

export interface ApiErrorResponse {
  code: number;
  message: string;
}

export const onErrorResponse = (error: AxiosError) => {
  if (axios.isAxiosError(error)) {
    const response = error.response as AxiosError['response'] & {
      data: ApiErrorResponse;
    };

    const httpStatus = response?.status;
    const errorCode = response?.data?.code;
    const errorMessage =
      ERROR_MESSAGE[httpStatus]?.[errorCode] ||
      ERROR_MESSAGE[httpStatus]?.default ||
      '알 수 없는 오류입니다';

    return Promise.reject(new Error(errorMessage));
  }

  return Promise.reject(new Error('알 수 없는 오류입니다'));
};
