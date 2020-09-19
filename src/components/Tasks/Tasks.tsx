import React, { FunctionComponent, useEffect } from 'react';
import './TasksView.scss';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

const mapStateToProps = (state: any) => {
  const props = {
    tasks: state.tasks.byId
  };
  return props;
};
const actionCreators = {
  removeTask: actions.removeTask,
  fetchTask: actions.fetchTask
};
const Tasks: FunctionComponent = (props: any) => {
  const { tasks, removeTask, fetchTask } = props;
  const handleRemoveTask = (id: number) => () => {
    removeTask(id);
  };
  useEffect(() => {
    const getTasks = async () => {
      const token = sessionStorage.getItem('token');
      await fetchTask(token);
    };
    getTasks();
  }, []);
  return (
    <div className="mt-3">
      <ul className="list-group">
        <div>TASKS</div>
        {/* {tasks.map(({ id, text }) => (
          <li key={id} className="list-group-item d-flex">
            <span className="mr-auto">{text}</span>
            <button
              type="button"
              data-test="task-remove"
              className="close"
              onClick={handleRemoveTask(id)}
            >
              <span>&times;</span>
            </button>
          </li>
        ))} */}
      </ul>
    </div>
  );
};
export default connect(mapStateToProps, actionCreators)(Tasks);
