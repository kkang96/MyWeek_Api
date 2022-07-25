import memberService from './member.service.js';

export default {
  // 회원가입
  memberJoin_ctrl: async (req, res) => {
    const result = await memberService.memberJoin_svc(req.body);
    res.json(result);
  },
  // 회원탈퇴
  memberOut_ctrl: async (req, res) => {
    const result = await memberService.memberOut_svc(req.body);
    res.json(result);
  },
  // 로그인
  memberLogin_ctrl: async (req, res) => {
    const result = await memberService.memberLogin_svc(req.body);
    res.json(result);
  },
  // 로그아웃
  memberLogout_ctrl: async (req, res) => {
    const result = await memberService.memberLogout_svc(req.body);
    res.json(result);
  },
  // 알림설정
  memberAlarm_ctrl: async (req, res) => {
    const result = await memberService.memberAlarm_svc(req.body);
    res.json(result);
  },
};