import express from 'express';
import testController from './test.controller.js';
import schemas from './test.schema.js';
import wrapAsync from '../../../util/common.js';
import validReq from '../../middlewares/validator.js';

export const testRouter = express.Router();

// testRouter.post('/test1', validReq(schemas.memList), wrapAsync(testController.postTest));
testRouter.post('/test1', testController.postTest);
testRouter.get('/test2', testController.getTest);
// testRouter.get('/test2', validReq(schemas.memList),wrapAsync(testController.getTest));
