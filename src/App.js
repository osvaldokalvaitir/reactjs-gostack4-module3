import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron'; /** Esta linha tem que ser antes de importar o store */
import store from './store';

import TodoList from './TodoList';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
