import express from 'express';
import { testRouter } from './test/index.js';
import { todoRouter } from './todo/index.js';

export const router = express.Router();

router.use('/test', testRouter);
router.use('/todo', todoRouter);