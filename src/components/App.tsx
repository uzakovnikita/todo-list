import React, { FunctionComponent } from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';
import { newTaskForm } from './newTaskForm';
import { tasks } from './tasks';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
interface Props {
  isAuth: boolean;
}

const mapStateToProps = (state: any) => {
  const props = {
    isAuth: state.auth.isAuth
  };
  return props;
};

const App: FunctionComponent<Props> = (props: Props) => {
  const { isAuth } = props;
  const tasksManager = (
    <Router>
      <div className="app">
        <Route path="tasks">
          <NewTaskForm />
          <Tasks />
        </Route>
      </div>
    </Router>
  );
  const result = isAuth ? null : (
    <Router>
      <div className="app">
        <Route path="/registration">
          <Auth />
        </Route>
        <Redirect to="/registration"></Redirect>
      </div>
    </Router>
  );
  return result;
};

export default connect(mapStateToProps)(App);
