import Joi from 'joi';

export const createProductSchema = Joi.object({
  name: Joi.string().min(3).max(25).required(),
  count: Joi.number().required(),
  weight: Joi.string().required(),
  size: Joi.object({
    width: Joi.number().required(),
    height: Joi.number().required(),
  }).required(),
});

export const editProductSchema = Joi.object({
  name: Joi.string().min(3).max(25),
  count: Joi.number(),
  weight: Joi.string(),
  size: Joi.object({
    width: Joi.number(),
    height: Joi.number(),
  }),
});
