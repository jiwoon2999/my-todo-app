import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import { children } from 'react';

function App() {
  return (
    <div>
      <TodoTemplate>TodoApp입니다.</TodoTemplate>
    </div>
  );
}

export default App;
