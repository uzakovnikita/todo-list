import React, { FunctionComponent, useEffect } from 'react';
import './TasksView.scss';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

const mapStateToProps = (state: any) => {
  console.log(state.tasks);
  const { byId, allIds } = state.tasks;
  const tasks: any[] = [];
  allIds.forEach((id: number) => {
    tasks.push(byId[id]);
  });
  return {
    tasks: tasks
  };
};
const actionCreators = {
  removeTask: actions.removeTask,
  fetchTask: actions.fetchTask
};

const Tasks: FunctionComponent = (props: any) => {
  const { tasks, removeTask, fetchTask } = props;
  const handleRemoveTask = (id: number) => async () => {
    const token = sessionStorage.getItem('token');
    await removeTask(id, token);
    await fetchTask(token);
  };
  useEffect(() => {
    const getTasks = async () => {
      const token = sessionStorage.getItem('token');
      await fetchTask(token);
    };
    getTasks();
  }, []);
  interface Tasks {
    _id: number;
    description: string;
  }
  return (
    <div className="mt-3">
      <ul className="list-group">
        <h2>TASKS</h2>
        {tasks.map(({ _id, description }: Tasks) => (
          <li key={_id} className="list-group-item d-flex">
            <span className="mr-auto">{description}</span>
            <button
              type="button"
              data-test="task-remove"
              className="close"
              onClick={handleRemoveTask(_id)}
            >
              <span>&times;</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default connect(mapStateToProps, actionCreators)(Tasks);
