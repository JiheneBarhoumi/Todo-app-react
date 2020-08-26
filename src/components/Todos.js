import React,{useState} from 'react';
import AddToDo from './AddToDo.js';
import '../assets/todos.css';

const Todos=()=>{
    const [todos, setTodos]=useState(
        [
            {id:1,content:'go to gym'},
            {id:2,content:'go to Paris'}
        ]
    )

    const deletefun=(elem)=>{

      const todolist=todos.filter(todo=> todo.id !== elem )
      setTodos([...todolist])

       
    }

    const editfun=(elem,id)=>{
       
        const content = prompt("Please enter the to-do you want ", elem);
        
        const todolist=todos.filter(todo=> todo.id !== id )
      
         if(content===null)
         setTodos([...todolist,{id:id,content:elem}])
         else
         setTodos([...todolist,{id:id,content:content}])}


        

    
     
    const todolist =todos.length?(todos.map(
        todo=> 
        {
            return <div key={todo.id} className="collection">
            
           
            <span className="text">{todo.content}</span>
            
            <div className="buttons">
            <span><button  className="btn2" type='submit' onClick={()=>editfun(todo.content,todo.id)}><img src="https://img.icons8.com/color/48/000000/edit.png"/></button></span>
            <span><button className="btn2" type='submit' onClick={()=>deletefun(todo.id)}><img src="https://img.icons8.com/fluent/48/000000/delete-sign.png"/></button></span>
            </div>
            </div>
          
             }

     )):(<div>No to-do available</div>)
      
     const addtodo=(todo)=>{
        setTodos([...todos,todo]);
     }


   return(
     
      <div className="App">
        <h1 className="title">To-do List</h1>
        <AddToDo myAddfun={addtodo}/>
        <div>{todolist}</div>
       
      </div> 
   )





  } 

export default Todos;