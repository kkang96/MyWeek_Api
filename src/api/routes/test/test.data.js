import use from 'abrequire';
import { connection } from '../../../db/dbconnect.js';
import { DB_STATUS } from '../../../constants/constants.js';

export default {
  postTestDB: (param1, param2, param3) => {

  },
  getTestDB: (param) => {
    let jsonRes = { status : null, data : {  } };  
    try {
      connection.connect();

      // https://flymogi.tistory.com/60
      connection.query('SELECT * from MYWEEK_MEMBER', (error, results, fields) => {
        if (error) throw error;
        const rowcnt = results.length;
        if (rowcnt > 0) {
          jsonRes.status = DB_STATUS.SUCCESS;
          let resultArray = Object.values(JSON.parse(JSON.stringify(results)));
          jsonRes.data = resultArray;
        } else {
          jsonRes.status = DB_STATUS.NO_DATA;
        }
        return results;
      });

      connection.end();
    } catch(err) {
      console.log(`err - ${err}`);
      jsonRes.status = DB_STATUS.FAILUE;
    }
    return jsonRes;
  }
}
