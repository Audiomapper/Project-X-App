import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import matches from 'validator/lib/matches';
import isNumeric from 'validator/lib/isNumeric';

export const password = (value) => {
  const passwordInstructions = 'to be 8 to 30 characters long and must have at least 1 number and 1 letter';

  if (typeof value !== 'string' ||
    (value.length > 30) ||
    (value.length < 8) ||
    !matches(value, /[0-9]/i) ||
    !matches(value, /[a-z]/i)) {
    return `Password needs ${passwordInstructions}`;
  }

  return undefined;
};

export const maxLength = (field, length) => (value) => {
  const max = length || 64;

  if (value && value.trim().length > max) {
    return `${field} must be no more than ${max} characters`;
  }

  return undefined;
};

export const minLength = (field, length) => (value) => {
  const min = length || 9;

  if (value && value.trim().length < min) {
    return `${field} must be no less than ${min} characters`;
  }

  return undefined;
};

export const exists = value => (!value ? 'This is required' : undefined);

export const required = field => value => (typeof value !== 'string' || isEmpty(value.trim()) ? `${field} is required` : undefined);

export const email = value => (value && !isEmail(value) ? 'Not a valid email address' : undefined);

export const numbers = value => (value && !isNumeric(value) ? 'Please only use numbers and/or "+"' : undefined);
