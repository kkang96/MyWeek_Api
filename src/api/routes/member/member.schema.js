import Joi from 'joi';

const schemas = {
  memberJoin: Joi.object({}),
  memberOut: Joi.object({}),
  memberLogin: Joi.object({}),
  memberLogout: Joi.object({}),
  memberAlarm: Joi.object({})
}

export default schemas;