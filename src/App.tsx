import React from 'react';
import { useAppDispatch, useAppselector } from './store/hook';
import { add } from './store/userReducer';

const App = () => {
  const todo = useAppselector((state) => state.todo.value);
  const user = useAppselector((state) => state.use);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>hello world</h1>
      <h2>{todo}</h2>

      <button onClick={() => dispatch(add('asuka'))}>change</button>
      {user.map((el) => (
        <h1>{el.name}</h1>
      ))}
    </div>
  );
};
export default App;
