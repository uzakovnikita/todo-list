export const urlRegister = () =>
  `https://api-nodejs-todolist.herokuapp.com/user/register`;
export const urlLogIn = () =>
  `https://api-nodejs-todolist.herokuapp.com/user/login`;
export const urlTasks = (id?: any) =>
  `https://api-nodejs-todolist.herokuapp.com/task${id || ''}`;
