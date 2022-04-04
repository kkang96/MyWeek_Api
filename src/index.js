import config from './config/index.js';
import appManager from './app.js';
import { router } from './api/routes/index.js';
import { jsonRes } from './util/common.js';

const app = appManager.setup(config);

/* Route handling */
app.use('/', (req, res, next) => {
  let { method, url, query, params, body } = req || {};
  console.log('\n');
  console.log(
    '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
  );
  console.log('- req ', { method, url, query, params, body });
  console.log(
    '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
  );
  next();
});

/* Api Router */
app.use(config.api.prefix, router);

/* Swagger 세팅 */
import { swaggerUi, specs } from './swagger/swagger.js';
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

/* 404 표시 */
app.use((req, res, next) => {
  return jsonRes(res.status(404), { success: false, status: { code: 404, message: "Invalid route", detail: req.url } });
});

/* error 표시 */
app.use(function (error, req, res, next) {
  let { message, detail } = error;
  return jsonRes(res.status(500), { success: false, status: { code: 500, message, detail } });
});

/* Server Start */
app.listen(config.port, () =>{
  console.log("\n");
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(`🛡️  Server listening on port: ${config.port} 🛡️`);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
}).on('error', err => {
    console.error(err);
    process.exit(1);
});
