import memberData from './member.data.js';

export default {
  // 회원가입
  memberJoin_svc: async (param) => {
    const result = await memberData.memberJoin_db(param);
    return result;
  },
  // 회원탈퇴
  memberOut_svc: async (param) => {
    const result = await memberData.memberOut_db(param);
    return result;
  },
  // 로그인
  memberLogin_svc: async (param) => {
    const result = await memberData.memberLogin_db(param);
    return result;
  },
  // 로그아웃
  memberLogout_svc: async (param) => {
    const result = await memberData.memberLogout_db(param);
    return result;
  },
  // 알림설정
  memberAlarm_svc: async (param) => {
    const result = memberData.memberAlarm_db(param);
    return result;
  },
};