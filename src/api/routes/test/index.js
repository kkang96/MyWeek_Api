import express from 'express';
import testController from './test.controller.js';

export const testRouter = express.Router();

testRouter.post('/test1', testController.postTest);
testRouter.get('/test2', testController.getTest);
