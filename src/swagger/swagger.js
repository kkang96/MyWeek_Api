// import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

// const __dirname = path.resolve();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MyWeek',
      description: 'MyWeek에서 사용하는 API 입니다. ',
      version: '0.0.1',
    },
    servers: [
      {
        url: `http://localhost:${config.port}`, // 요청 URL
        description: "local Server"
      },
    ],
  },
  // apis: [path.join(__dirname + '/src/api/routes/*.js'),path.join(__dirname + '/src/api/routes/user/*.js'),],
  apis: ["src/swagger/*", "src/api/*.js", "src/api/routes/*.js"],
};

const specs = await swaggerJsdoc(options);
// const specs = YAML.load(path.join(__dirname,'/src/swagger/openapi.yaml'));

export { swaggerUi, specs };
