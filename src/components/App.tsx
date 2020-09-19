import React, { FunctionComponent, useEffect } from 'react';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import Tasks from './Tasks/Tasks';
import NewTaskForm from './newTaskForm/newTaskForm';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom';

const actionCreators = {
  fetchLogged: actions.fetchLogged
};
const mapStateToProps = (state: any) => {
  const props = {
    logged: state.logged,
    loggedState: state.loggedState
  };
  return props;
};
const App: FunctionComponent<any> = (props: any) => {
  const { fetchLogged, loggedState, logged } = props;
  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem('token');
      await fetchLogged(token);
    };
    fetchData();
    return;
  }, []);
  if (loggedState === 'request') {
    return <p>WAIT</p>;
  }
  const tasksManager = (
    <>
      <Router>
        <div>
          <NewTaskForm />
          <Tasks />
        </div>
        <div className="app">
          <Switch>
            <Route path="tasks">
              <div>HELOOSUKA</div>
            </Route>
            <Redirect to="/tasks"></Redirect>
          </Switch>
        </div>
      </Router>
    </>
  );
  const result = logged ? (
    tasksManager
  ) : (
    <Router>
      <div className="app">
        <div className="wrapper">
          <nav>
            <ul>
              <li>
                <Link to="/signup"> Sign Up </Link>
              </li>
              <li>
                <Link to="/login"> Log In </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/signup">
              <Registration />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Redirect to="/signup"></Redirect>
          </Switch>
        </div>
      </div>
    </Router>
  );
  return result;
};

export default connect(mapStateToProps, actionCreators)(App);
