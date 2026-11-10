import { AppError } from '../utils/AppError.js';

export const validateRequest = (schema, property = 'body') => async (req, res, next) => {
  try {
    const target = req[property];
    const value = await schema.validateAsync(target, {
      abortEarly: false,
      allowUnknown: false,
      stripUnknown: true,
    });

    req[property] = value;
    next();
  } catch (error) {
    const details = error.details?.map((detail) => detail.message).join(', ') || error.message;
    next(new AppError(`Validation failed: ${details}`, 400));
  }
};

export default validateRequest;
