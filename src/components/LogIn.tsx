import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { fromPairs } from 'lodash';
import * as actions from '../actions/index';

const mapStateToProps = (state: any) => {
  return;
};
const actionCreators = {};
interface Props {}
const Login: FunctionComponent<Props> = (props: Props) => {
  return <div></div>;
};

export default connect(mapStateToProps, actionCreators)(Login);
