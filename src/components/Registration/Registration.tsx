import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/index.js';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import './Registration.scss';
const actionCreators = {
  fetchRegister: actions.fetchRegister
};

const mapStateToProps = (state: { registrationState: string }) => {
  const { registrationState } = state;
  const props = {
    registrationState
  };
  return props;
};

const Registration: FunctionComponent<any> = (props: any) => {
  const handleSignUp = async (values: any) => {
    const { fetchRegister } = props;
    fetchRegister(values);
  };
  const { handleSubmit, submitting, pristine, registrationState } = props;
  console.log(registrationState);
  if (registrationState === 'failed') {
    return <p className="registration__failed">FAILED</p>;
  }
  if (registrationState === 'request') {
    return <p className="registation__request">REQUEST, PLEASE WAIT</p>;
  }
  return (
    <div className="registration">
      <p className="registration__title">Sign up</p>
      <form
        className="form-inline registration__form"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <div className="form-group mx-3 registration__fields">
          <div className="registration__input">
            <Field
              name="email"
              required={true}
              type="text"
              component="input"
              value=""
            />
            <label htmlFor="email">email</label>
          </div>
          <div className="registration__input">
            <Field name="name" type="text" component="input" value="" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="registration__input">
            <Field name="password" type="password" component="input" value="" />
            <label htmlFor="password">Password</label>
          </div>
          <div className="registration__input">
            <Field name="age" type="text" component="input" value="" />
            <label htmlFor="age">Age</label>
          </div>
        </div>
        <input
          type="submit"
          disabled={submitting || pristine}
          className="btn btn-primary btn-sm registration__submit"
          value="Sign up"
        />
      </form>
    </div>
  );
};

const ConnectedAuth = connect(mapStateToProps, actionCreators)(Registration);
export default reduxForm({
  form: 'Registration'
})(ConnectedAuth);
