import React from 'react'
import { v4 as uuidv4 } from "uuid";

function Header(props) {

    function handleInput(event) {
        props.setinput(event.target.value);
    }
    
    function handleADD(event) {
        if (props.input===``) {
            alert(`Enter a Task`)
        }else if (props.input!==``) {
            
            const newArr = [...props.Task, { id:uuidv4() , task: props.input ,check:false }];
            props.set(newArr);
            props.setinput("");
            
        }
    }

  return (
    <div className='inputBoxs'>
    <h1>TODO LIST</h1>
    
        <header>
        
        <input type='text' placeholder='Enter youe Tasks'
        value={props.input} onChange={handleInput}
        />
        <button type='submit'
        onClick={handleADD}
        className='addBtn'
        >ADD</button>
        </header>
    </div>

  )
}

export default Header

