import _ from 'lodash';
import moment from 'moment';
import { DB_STATUS } from '../constants/constants.js';

// 응답값 상태에 따라 json 형태로 응답하기
const resultRes = (res, result) => {
  if (result.status.message === DB_STATUS.SUCCESS.message) {
    jsonRes(res, { status: DB_STATUS.SUCCESS, data: result.data });
  } else if (result.status.message === DB_STATUS.FAILUE.message) {
    jsonRes(res, { status: DB_STATUS.FAILUE });
  } else if (result.status.message === DB_STATUS.NO_DATA.message) {
    jsonRes(res, { status: DB_STATUS.NO_DATA });
  }
};

// 응답값 json 형태 및 Date Type 포맷 변경
const jsonRes = (
  res,
  {
    status = { code: 200, message: 'Api Request Success', detail },
    data = null,
  }
) => {
  let logData = null;

  if (data) {
    let rows = data.rows || data;

    if (rows.length) {
      logData = `total: [${rows.length}] \n`;

      _.each(rows, (row, k) => {
        if (k < 3) logData += JSON.stringify(row) + '\n';
        _.map(row, (v, i) => {
          // console.log(v, v instanceof Date);
          if (v instanceof Date) v = moment(v).format('YYYY-MM-DD HH:mm:ss');
          (data.rows || data)[k][i] = v;
        });
      });

      if (rows.length > 3) logData += `... more ${rows.length - 3} rows ...`;
    } else {
      _.map(data, (v, k) => {
        // console.log(v, v instanceof Date);
        if (v instanceof Date) v = moment(v).format('YYYY-MM-DD HH:mm:ss');
        data[k] = v;
      });
    }
  }

  // console.log('- statusCode', res.statusCode, status.code);

  let success = status.code === 200;

  //console.log("- jsonRes", res.statusCode, "\n", { success, status, data: logData || data }, "\n");

  return res.json({ success, status, data });
};

// 에러 헬퍼
/* Error 헬퍼함수 */
function wrapAsync(fn) {
  return function (req, res, next) {
    // 모든 오류를 .catch() 처리하고 체인의 next() 미들웨어에 전달
    // (이 경우에는 오류 처리기)
    fn(req, res, next).catch(next);
  };
}

module.exports = {
  jsonRes,
  wrapAsync,
  resultRes,
};
