export const urlRegister = () =>
  `https://api-nodejs-todolist.herokuapp.com/user/register`;
export const urlLogIn = () =>
  `https://api-nodejs-todolist.herokuapp.com/user/login`;
export const urlTasks = (id?: any) => {
  const endPath = id ? '/' + id : false;
  return `https://api-nodejs-todolist.herokuapp.com/task${endPath || ''}`;
};
