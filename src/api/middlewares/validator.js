import _ from 'lodash';
import { jsonRes } from '../../util/common.js';

// 요청 파라미터 검증
const validReq = (schema) => {
  return (req, res, next) => {
    let { query, params, body } = req;
    let _params = _.merge({}, body, params, query);

    //console.log("_params", _params, "\n");

    let result = schema.validate(_params);

    //console.log("---> validReq", result, "\n");

    if (result.error) {
      let message = String(result.error.message || '').replace(
        /(\\"|\")/gi,
        "'"
      );
      let detail = result.error.context;

      return jsonRes(res.status(400), {
        success: false,
        status: { code: 400, message, detail },
      });
    }

    if (!req.value) req.value = {};

    req.value['body'] = result.value;
    next();
  };
};

export {
  validReq,
};
