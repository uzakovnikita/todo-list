import React, { FunctionComponent } from "react";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import { connect } from "react-redux";

import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Link,
} from "react-router-dom";
import Axios from "axios";
interface Props {
  token: string | null;
}

// const mapStateToProps = (state: any) => {
//   const props = {
//     token: state.authorization.token,
//   };
//   return props;
// };

const App: FunctionComponent<Props> = (props: Props) => {
  const { token } = props;

  console.log(`${token} token nahuy`);
  const config = {
    mehtod: "get",
    url: "https://api-nodejs-todolist.herokuapp.com/user/me",
    headers: {
      Authorization: token,
    },
  };
  Axios(config);
  const isAuth = false;
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
            <Redirect exact from="/" to="/signup"></Redirect>
          </Switch>
        </div>
      </div>
    </Router>
  );
  return result;
};

export default connect(null)(App);
