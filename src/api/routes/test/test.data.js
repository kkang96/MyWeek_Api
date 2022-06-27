import use from 'abrequire';
import { connection } from '../../../db/dbconnect.js';
import { DB_STATUS } from '../../../constants/constants.js';

export default {
  postTestDB: async (param1, param2, param3) => {

  },
  getTestDB: async (param) => {
    
    let jsonRes = { status : null, data : { list: []  } };  
    try {
      connection.connect();

      connection.query('SELECT * from MYWEEK_MEMBER', function (error, results, fields) {
        const rowcnt = results.recordset.length;
        if (rowcnt > 1){
          jsonRes.data.list = results.recordset;
          jsonRes.status = DB_STATUS.SUCCESS;
        } else {
          jsonRes.status = DB_STATUS.NO_DATA;
        }
      });
      connection.end();
      
    } catch(err) {
      console.log(`err - ${err}`);
      jsonRes.status = DB_STATUS.FAILUE;
    }
    
    return jsonRes;
  }

}
