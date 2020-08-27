import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';

const actionCreators = {
  fetchRegister: actions.fetchRegister
};

const Auth: FunctionComponent = (props: any) => {
  const handleSignUp = async (values: any) => {
    const { fetchRegister } = props;
    fetchRegister(values);
  };
  const { handleSubmit, submitting, pristine, error } = props;
  return (
    <form className="form-inline" onSubmit={handleSubmit(handleSignUp)}>
      <div className="form-group mx-3">
        <Field
          name="email"
          required={true}
          type="text"
          component="input"
          value=""
        />
        <Field name="name" type="text" component="input" value="" />
        <Field name="password" type="password" component="input" value="" />
        <Field name="age" type="text" component="input" value="" />
      </div>
      <input
        type="submit"
        disabled={submitting || pristine}
        className="btn btn-primary btn-sm"
        value="Sign up"
      />
    </form>
  );
};

const ConnectedAuth = connect(null, actionCreators)(Auth);
export default reduxForm({
  form: 'Auth'
})(ConnectedAuth);
