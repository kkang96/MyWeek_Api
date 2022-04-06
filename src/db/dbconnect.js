import mysql from 'mysql';
import { config } from '../config/index.js';

// export default {
//   init: () => {
//     return mysql.createConnection(config);
//   },
//   connect: (conn) => {
//     conn.connect((err) => {
//       if (err) console.log('err', err);
//       else console.log('db connect');
//     })
//   }
// }
let connection =  mysql.createConnection(config);

export { connection }