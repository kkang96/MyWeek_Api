import todoData from './todo.data.js';

export default {
  // 할일 등록 / 수정 / 삭제
  todoUpdate_svc: async (param) => {
    const result = await todoData.todoUpdate_db(param);
    return result;
  },
  // 할일 조회 (주 단위)
  todoWeekSelect_svc: async (param) => {
    const result = await todoData.todoWeekSelect_db(param);
    return result;
  },
  // 할일 조회 (일 단위)
  todoDaySelect_svc: async (param) => {
    const result = await todoData.todoDaySelect_db(param);
    return result;
  },
  // 할일 상세 조회
  todoDetailSelect_svc: async (param) => {
    const result = await todoDate.todoDetailSelect_db(param);
    return result;
  },
  // 완료 유무 업데이트
  todoChecking_svc: async (param) => {
    const result = await todoData.todoChecking_db(param);
    return result;
  },
};