import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { fromPairs } from 'lodash';
import * as actions from '../../actions/index';
import { Field, reduxForm } from 'redux-form';

const actionCreators = {
  fetchAuth: actions.fetchAuth
};
const mapStateToProps = (state: any) => {
  const props = {
    autorizationState: state.autorizationState
  };
  return props;
};
const Login: FunctionComponent<any> = (props: any) => {
  const handleAuth = async (values: any) => {
    const { fetchAuth } = props;
    fetchAuth(values);
  };
  const { handleSubmit, submitting, pristine, autorizationState } = props;
  console.log(autorizationState);
  if (autorizationState === 'failed') {
    return <p>AUTH FAILED</p>;
  }
  if (autorizationState === 'request') {
    return <p>PLEASE, WAIT, AUTH IN PROCESSING</p>;
  }
  return (
    <div className="auth">
      <p className="auth__title">Log In</p>
      <form className="auth__form" onSubmit={handleSubmit(handleAuth)}>
        <div className="form-group mx-3 auth__fields">
          <div className="auth__input">
            <Field
              name="email"
              required={true}
              type="text"
              component="input"
              value=""
            />
            <label htmlFor="email">email</label>
          </div>
          <div className="auth__input">
            <Field name="password" type="password" component="input" value="" />
            <label htmlFor="name">password</label>
          </div>
        </div>
        <input
          type="submit"
          disabled={submitting || pristine}
          className="btn btn-primary btn-sm auth__submit"
          value="Log In"
        />
      </form>
    </div>
  );
};

const connectLogin = connect(mapStateToProps, actionCreators)(Login);
export default reduxForm({
  form: 'auth'
})(connectLogin);
