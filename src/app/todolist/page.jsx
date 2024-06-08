'use client';
import React, { useState } from 'react'

const TodoList = () => {

    const [taskArray, setTaskArray] = useState([]);
    
    const addNewTask =(e)=>{
        console.log(e.code);
        if(e.code==='Enter'){
            
            console.log(e.target.value);
            const newTask={text:e.target.value, completed:false};
            setTaskArray([newTask,...taskArray])
            e.target.value ='';
        }
    }

    const deleteTask= (index)=>{
        console.log(index);

        const temp=taskArray;
        temp.splice(index,1);
        setTaskArray([...temp]);
    }
  return (
    
    <div className='vh-100 bg-primary-subtle'>
        <div className="container py-5">
            <h1 className="display-3 text-center fw-bold">Todo List</h1>
            <div className="card show">
                <div className="card-header">

                    <input type="text"
                    className='form-control border-primary border-3' 
                    placeholder='Press enter to add Task'
                    onKeyDown={addNewTask}
                    />
                </div>
                <div className="card-body">
                {
                    taskArray.map((task, index)=> {
                        return <div key={index} className='d-flex mb-3 justify-content-between'>
                        <p>{task.text}</p>
                        <button onClick={()=>{deleteTask(index)}} className="btn btn-danger">Delete</button>
                        </div>
                    })
                }


                </div>
            </div>
        </div>
    </div>
  )
}

export default TodoList