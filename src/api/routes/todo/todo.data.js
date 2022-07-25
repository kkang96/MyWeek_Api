import use from 'abrequire';
import { connection } from '../../../db/dbconnect.js';
import { DB_STATUS } from '../../../constants/constants.js';

export default {
  // 할일 등록 / 수정 / 삭제
  todoUpdate_db: async (param) => {
    // key X => 등록
    // key O, status UPDATE => 수정
    // key O, status DELETE => 삭제    
  },
  // 할일 조회 (주 단위)
  todoWeekSelect_db: async (param) => {
    /**
     * SELECT     *
     * FROM       MYWEEK_TODO
     * WHERE      (1=1)
     * AND        MEM_KEY = ?
     * AND        (TODODATE BETWEEN '' AND '')
     * ORDER BY   TODODATE ASC
     */
  },
  // 할일 조회 (일 단위)
  todoDaySelect_db: async (param) => {
    /**
     * SELECT     *
     * FROM       MYWEEK_TODO
     * WHERE      (1=1)
     * AND        MEM_KEY = ?
     * AND        (TODODATE = ?)
     * AND        REGDATE ASC 
     */
  },
  // 할일 상세 조회
  todoDetailSelect_db: async (param) => {
    /**
     * SELECT     *
     * FROM       MYWEEK_TODO
     * WHERE      (1=1)
     * AND        TODO_KEY = ?
     */
  },
  // 완료 유무 업데이트
  todoChecking_db: async (param) => {
    /**
     * UPDATE     MYWEEK_TODO
     * SET
     *    CHECK_TN = ?
     * WHERE      (1=1)
     * AND        TODO_KEY = ?
     */
  },
};

