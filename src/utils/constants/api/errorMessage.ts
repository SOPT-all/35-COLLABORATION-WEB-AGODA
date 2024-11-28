export const ERROR_MESSAGE: Record<
  number,
  Record<number | 'default', string>
> = {
  400: {
    40000: '잘못된 요청입니다',
    40001: 'Request body 검증에 실패했습니다',
    40002: 'Request param 검증에 실패했습니다',
    40003: '필수 param이 없습니다',
    40004: '메서드 인자 타입이 잘못되었습니다',
    40005: 'JSON 형식에 오류가 있습니다',
    40006: '잘못된 SaleType(enum)입니다',
    default: '요청이 올바르지 않습니다',
  },
  404: {
    40400: '대상을 찾을 수 없습니다',
    40401: '잘못된 API입니다',
    40402: '인기도시가 없습니다',
    40403: '베스트여행지가 없습니다',
    40404: '검색도시 리스트가 없습니다',
    40405: '호텔 리스트가 없습니다',
    40406: '호텔 정보가 없습니다',
    40407: '호텔 이미지가 없습니다',
    40408: '방 정보가 없습니다',
    40409: '방 이미지가 없습니다',
    default: '요청한 데이터를 찾을 수 없습니다',
  },
  405: {
    405: 'HTTP Method가 잘못되었습니다',
    default: '허용되지 않는 HTTP Method입니다',
  },
  409: {
    40900: '이미 존재하는 리소스입니다',
    40901: '데이터 무결성이 위반되었습니다',
    default: '데이터 충돌이 발생했습니다',
  },
  500: {
    500: '서버 내부 오류가 발생했습니다',
    default: '서버 오류가 발생했습니다',
  },
};