import React from 'react';
import { AnimatedList } from './AnimatedList';
// import { v4 as uuidv4 } from "uuid";

function List(props) {

  function deleteitem (id){
    const newarr=props.Task.filter((event)=>event.id !== id);
    props.set(newarr);
  }
  function editTask(task,id){
    if (props.input===``) {
        props.setinput(task);
   deleteitem(id); 
    }else{
      alert(`Makesure you Added the previous one`);
    }
  }
  function handleCheck(id) {
    const updatedTasks = props.Task.map((task) => {
      if (task.id === id) {
        return { ...task, check: !task.check };
      }
      return task;
    });
    props.set(updatedTasks);
  }
  const listItems = props.Task.filter((event) => !event.check).map((obj) => (
    <AnimatedList >
    <div key={obj.id} className='pendingTasks'>
      <div>
    <h4 id='pending-task'> {obj.task}</h4> 
    </div>
    <div className='pendingTasksBtn'> 
    <input type='checkbox' onClick={() => handleCheck(obj.id)} />
    <button onClick={()=>editTask(obj.task,obj.id)}>Edit</button>
    <button onClick={()=>deleteitem(obj.id)} >Dlete</button>
    </div>
    </div>
    </AnimatedList>
  ));
  const completed = props.Task.filter((event) => event.check).map((event) => (
    <AnimatedList> 
     <div key={event.id} className='completedTasks'>
      <h2>{event.task}</h2>
    </div>
    </AnimatedList>

  ));
  return (
    <div className='List'>
      <div >
      <h1>Pending Tasks</h1>
      {listItems}
      </div>

      <h1>Completed Tasks</h1>
      {completed}
    </div>
  );
}

export default List;
