import Joi from 'joi';

const schema = {
  mamList: Joi.object({
    page: Joi.number().required(),
    search: Joi.string().required(),
  }),
};

export default schema;