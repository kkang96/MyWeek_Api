/** 오류 정의 */
const ERROR = {
  INVALID_CERTIFICATION: {
    code: 401,
    message: '유효하지 않은 토큰입니다.',
    detail: '관리자에게 문의해 주세요.',
  },
  EXPIRE_CERTIFICATION: {
    code: 419,
    message: '토큰이 만료되었습니다.',
    detail: '토근 재발급 필요합니다.',
  },
};

/** 데이터 베이스 결과 정의 */
const DB_STATUS = {
  SUCCESS: {
    code: 200,
    message: '요청이 정상적으로 처리 되었습니다.',
    detail: '',
  },
  FAILUE: {
    code: 400,
    message: '요청 처리가 실패 했습니다.',
    detail: '',
  },
  NO_DATA: {
    code: 400,
    message: '요청 정보가 존재 하지 않습니다.',
    detail: '',
  },
};

export {
  ERROR,
  DB_STATUS,
}
