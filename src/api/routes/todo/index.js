import express from 'express';
import todoController from './todo.controller.js';
import schemas from './todo.schema.js';
import wrapAsync from '../../../util/common.js';
import validReq from '../../middlewares/validator.js';

export const todoRouter = express.Router();

todoRouter.post('/todoUpdate', validReq(schemas.todoUpdate), wrapAsync(todoController.todoUpdate_ctrl));
todoRouter.post('/todoWeekSelect', validReq(schemas.todoWeekSelect), wrapAsync(todoController.todoWeekSelect_ctrl));
todoRouter.post('/todoDaySelect', validReq(schemas.todoDaySelect), wrapAsync(todoController.todoDaySelect_ctrl));
todoRouter.post('/todoChecking', validReq(schemas.todoChecking), wrapAsync(todoController.todoChecking_ctrl));
