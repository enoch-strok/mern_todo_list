import './App.css';
import Input from './components/Input.jsx';
import Task from './components/Task.jsx';
import React, {useState} from 'react';

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App container" style={{width: '800px'}}>
      <Input list={list} setList={setList} />
      {list.map((task, i) => (
        <Task task={task} setList={setList} index={i} list={list} />
      ))}
    </div>
  );
}

export default App;
