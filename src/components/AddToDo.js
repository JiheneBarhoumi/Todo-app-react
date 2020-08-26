import React ,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../assets/addtodo.css';
const AddToDo=({myAddfun})=>{
        const [todo,setTodo]=useState({id:'',content:''});
        const changetodo=val=>{
          setTodo(
            {id:uuidv4(),content:val}
          )

        }

        const buttonClick=()=>{
          if(todo.content!==""){
           myAddfun(todo);
           setTodo(
            {id:'',content:''}
          )
        } else
        alert('please fill in your to-do before submitting');
      }
     return(
         <div>
           <center>
        <form onSubmit={(e)=>e.preventDefault()}>
        
          <button type='submit' onClick={()=>buttonClick()} className="btn"><img src="https://img.icons8.com/flat_round/64/000000/plus.png"/></button> <br/>
          <input autoComplete="off" id="last_name"  type='text' onChange={(e)=>changetodo(e.target.value)} value={todo.content} placeholder="Fill out your to-do " />
          
        </form>
         </center>
         </div>
     )
}

export default AddToDo;