import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import List from './components/List';

function App() {
  const[input,setinput]=useState("");

  const[Task,setTask]=useState([
    {
      id:0,
      task:`Learn React`,
      check:false
    },
  ]);
 
  return (
    <div className="App">
      <Header Task={Task} set={setTask} input={input} setinput={setinput} />
     <List Task={Task} set={setTask} input={input} setinput={setinput}/>
    </div>
  );
}

export default App;
