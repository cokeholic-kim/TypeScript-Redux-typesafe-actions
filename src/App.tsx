import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './container/CounterContainer';
import TodosContainer from './container/TodosContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <TodosContainer/>
    </div>
  );
}

export default App;
