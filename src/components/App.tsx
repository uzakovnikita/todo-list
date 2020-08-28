import React, { FunctionComponent } from 'react';
import Registration from './Registration/Registration';
import { connect } from 'react-redux';
// import { newTaskForm } from './newTaskForm';
// import { tasks } from './tasks';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
interface Props {
  isAuth: boolean;
}

const mapStateToProps = (state: any) => {
  const props = {
    isAuth: state.registration.isAuth
  };
  return props;
};

const App: FunctionComponent<Props> = (props: Props) => {
  const { isAuth } = props;
  const tasksManager = (
    <Router>
      <div className="app">
        <Route path="tasks">{/* <NewTaskForm />
          <Tasks /> */}</Route>
      </div>
    </Router>
  );
  const result = isAuth ? null : (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="authorization">{/* <Auth/> */}</Route>
          <Redirect to="/registration"></Redirect>
        </Switch>
      </div>
    </Router>
  );
  return result;
};

export default connect(mapStateToProps)(App);
