import React from 'react';
import {Field} from 'redux-form';

const WrappedInput = ({
                        input, ...props
                      }) => (
  <div>
    <input
      className="input"
      type="text"
      {...input}
      {...props}
    />
  </div>
);

const FormField = props => (
  <Field
    component={WrappedInput}
    {...props}
  />
);

export default FormField;
