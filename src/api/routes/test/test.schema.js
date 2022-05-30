import Joi from 'joi';

const schema = {
  memList: Joi.object({
    page: Joi.number().required(),
    search: Joi.string().required(),
  }),
};

export default schema;