import use from 'abrequire';
import { connection } from '../../../db/dbconnect.js';
import { DB_STATUS } from '../../../constants/constants.js';

export default {
  postTestDB: async (param1, param2, param3) => {

  },
  getTestDB: async (param) => {
    try {
      connection.connect();

      connection.query('SELECT * from MYWEEK_MEMBER', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0]);
      });
       
      connection.end();
      
    } catch(err) {
      console.log(err);
    }
  }
}