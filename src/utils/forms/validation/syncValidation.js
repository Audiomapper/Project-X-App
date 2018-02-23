import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import matches from 'validator/lib/matches';
import isCreditCard from 'validator/lib/isCreditCard';
import isURL from 'validator/lib/isURL';
import isNumeric from 'validator/lib/isNumeric';

const syncValidation = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!isEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  const passwordInstructions = 'to be 8 to 30 characters long and must have at least 1 number and 1 letter';

  if (!values.password) {
    errors.password = 'Required';
  } else if (typeof values.password !== 'string' ||
    (values.password.length > 30) ||
    (values.password.length < 8) ||
    !matches(values.password, /[0-9]/i) ||
    !matches(values.password, /[a-z]/i)) {
    errors.password = `This needs ${passwordInstructions}`;
  }

  return errors;
};

export default syncValidation;
