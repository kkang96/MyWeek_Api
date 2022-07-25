import Joi from 'joi';

const schemas = {
  todoUpdate: Joi.object({
    idx: Joi.number.empty(),
  }),
  todoWeekSelect: Joi.object({}),
  todoDaySelect: Joi.object({}),
  todoCheckingSelect: Joi.object({}),
};

export default schemas;