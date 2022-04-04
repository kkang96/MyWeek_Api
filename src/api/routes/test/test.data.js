import use from 'abrequire';
import { sql, connPool } from '../../../db/dbconnect.js';
import { DB_STATUS } from '../../../constants/constants.js';

export default {
  postTestDB: async (param1, param2, param3) => {
    let jsonRes = { status : null, data : { result: [] } };

    try {
      const pool = await connPool;
      const result = await pool.request()
      .input('', sql.Text, param1)
      .input('', sql.Text, param2)
      .input('', sql.Text, param3)
      .query()
      .then((result) => {
        const row_cnt = result.recordset.length;

        if (row_cnt > 0){
          jsonRes.status = DB_STATUS.SUCCESS;
          jsonRes.data.result = result.recordset[0];
        } else {
          jsonRes.status = DB_STATUS.NO_DATA;
        }
        return jsonRes;
      })
      .catch((err) => {
        console.log('err', err);
      });
      return result;
    } catch (err) {
      console.log(err);
    }
  },
  getTestDB: async (param) => {
    try {
      const pool = await connPool;
      await pool.request()
      .input('', sql.Text, param)
      .output()
      .execute()
    } catch (err) {
      console.log(err);
    }
  }
}