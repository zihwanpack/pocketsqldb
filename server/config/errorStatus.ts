import { StatusCodes } from 'http-status-codes';

export const errStatus = {
  // error
  INTERNAL_SERVER_ERROR: {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    isSuccess: false,
    code: 'COMMON000',
    message: '서버 에러, 관리자에게 문의 바랍니다.',
  },
  BAD_REQUEST: {
    status: StatusCodes.BAD_REQUEST,
    isSuccess: false,
    code: 'COMMON001',
    message: '잘못된 요청입니다.',
  },
  UNAUTHORIZED: {
    status: StatusCodes.UNAUTHORIZED,
    isSuccess: false,
    code: 'COMMON002',
    message: '권한이 잘못되었습니다.',
  },
  METHOD_NOT_ALLOWED: {
    status: StatusCodes.METHOD_NOT_ALLOWED,
    isSuccess: false,
    code: 'COMMON003',
    message: '지원하지 않는 Http Method 입니다.',
  },
  FORBIDDEN: {
    status: StatusCodes.FORBIDDEN,
    isSuccess: false,
    code: 'COMMON004',
    message: '금지된 요청입니다.',
  },
  // 회원가입 에러
  AUTHENTICATION_FAILED: {
    status: StatusCodes.UNAUTHORIZED,
    isSuccess: false,
    code: 'MEMBER001',
    message: '인증되지 않았습니다. ID/PW를 확인해주세요.',
  },
  ALREADY_REGISTERED: {
    status: StatusCodes.UNAUTHORIZED,
    isSuccess: false,
    code: 'MEMBER002',
    message: '이미 가입하였습니다.',
  },
  // 로그인 에러
  INVALID_CREDENTIALS: {
    status: StatusCodes.UNAUTHORIZED,
    isSuccess: false,
    code: 'MEMBER002',
    message: '입력하신 정보가 없습니다. 회원가입을 먼저 진행해주세요.',
  },
  //토큰 오류
  TOKEN_VERIFICATION_FAILURE: {
    isSuccess: false,
    code: 'TOKEN401',
    message: 'JWT 토큰 검증 실패',
  },
  // 게시글 오류
  POST_NOT_FOUND: {
    status: StatusCodes.NOT_FOUND,
    isSuccess: false,
    code: 'POST404',
    message: '요청하신 게시글을 찾을 수 없습니다. 게시글이 삭제되었거나 존재하지 않을 수 있습니다.',
  },
  POST_CREATION_FAILED: {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    isSuccess: false,
    code: 'POST500',
    message: '게시글 작성 중 오류가 발생했습니다.',
  },
  POST_UPDATE_FAILED: {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    isSuccess: false,
    code: 'POST500',
    message: '게시글 수정 중 오류가 발생했습니다.',
  },
  POST_DELETE_FAILED: {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    isSuccess: false,
    code: 'POST500',
    message: '게시글 삭제 중 오류가 발생했습니다.',
  },
};
