import express from 'express';
import memberController from './member.controller.js';
import schemas from './member.schema.js';
import wrapAsync from '../../../util/common.js';
import validReq from '../../middlewares/validator.js';

export const memberRouter = express.Router();

memberRouter.post('/memberJoin', validReq(schemas.memberJoin), wrapAsync(memberController.memberJoin_ctrl));
memberRouter.post('/memberOut', validReq(schemas.memberOut), wrapAsync(memberController.memberOut_ctrl));
memberRouter.post('/memberLogin', validReq(schemas.memberLogin), wrapAsync(memberController.memberLogin_ctrl));
memberRouter.post('/memberLogout', validReq(schemas.memberLogout), wrapAsync(memberController.memberLogout_ctrl));
memberRouter.post('/memberAlarm', validReq(schemas.memberAlarm), wrapAsync(memberController.memberAlarm_ctrl));