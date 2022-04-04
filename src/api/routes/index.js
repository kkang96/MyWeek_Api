import express from 'express';
import { testRouter } from './test/index.js';

export const router = express.Router();

router.use('/test', testRouter);