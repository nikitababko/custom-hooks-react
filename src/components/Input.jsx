import React from 'react';
import { useInput } from '../hooks';

const Input = () => {
  const email = useInput('', {
    isEmpty: true,
    minLength: 10,
    isEmail: true,
  });
  const password = useInput('', {
    isEmpty: true,
    minLength: 8,
    maxLength: 12,
  });

  return (
    <div>
      <h1>Registration</h1>
      {/* Email */}
      <input {...email} type="text" placeholder="Email" />
      {email.isDirty && email.isEmpty && (
        <span style={{ color: 'red' }}>The field cannot be empty.</span>
      )}
      {email.isDirty && email.minLengthError && (
        <span style={{ color: 'red' }}>
          Email must contain at least 10 characters.
        </span>
      )}
      {email.isDirty && email.emailError && (
        <span style={{ color: 'red' }}>
          Must be a valid email address.
        </span>
      )}

      {/* Password */}
      <input {...password} type="text" placeholder="Password" />
      {password.isDirty && password.isEmpty && (
        <span style={{ color: 'red' }}>The field cannot be empty.</span>
      )}
      {password.isDirty && password.minLengthError && (
        <span style={{ color: 'red' }}>
          Password must contain at least 8 characters.
        </span>
      )}
      {password.isDirty && password.maxLengthError && (
        <span style={{ color: 'red' }}>
          Password must contain no more 12 characters.
        </span>
      )}
      <button
        type="submit"
        disabled={!email.inputValid || !password.inputValid ? true : false}
      >
        Registration
      </button>
    </div>
  );
};

export default Input;
