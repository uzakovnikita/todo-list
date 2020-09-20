import React, { FunctionComponent } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import './newTaskFormView.scss';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

const actionCreators = {
  addTask: actions.addTask,
  fetchTask: actions.fetchTask
};

const newTaskForm: FunctionComponent<any> = (props: any) => {
  const handleAddTask = async (values: any) => {
    const { addTask, fetchTask } = props;
    const { text } = values;
    const token = sessionStorage.getItem('token');
    await addTask(text, token);
    await fetchTask(token);
    props.reset();
  };
  const { handleSubmit, submitting, pristine, error } = props;
  return (
    <form className="form-inline" onSubmit={handleSubmit(handleAddTask)}>
      <div className="form-group mx-3">
        <Field
          name="text"
          required={true}
          type="text"
          component="input"
          value=""
        />
      </div>
      <input
        type="submit"
        disabled={submitting || pristine}
        className="btn btn-primary btn-sm"
        value="Add"
      />
    </form>
  );
};
const connected = connect(null, actionCreators)(newTaskForm);
export default reduxForm({
  form: 'newTask'
})(connected);
