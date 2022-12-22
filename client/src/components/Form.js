import React,{useState} from 'react'
import { useDispatch } from 'react-redux'


import { addTodo } from '../redux/todo/todosSlice'


function Form() {
  const [title,setTitle] = useState('')
  const dispatch = useDispatch()

  const handleSubmit=(e)=>{

    if(!title)  return;
    e.preventDefault();
  
  
     dispatch(addTodo({

        title
    
     }))

      setTitle("");
   }


  return (
 
<form onSubmit={handleSubmit}>
        <input className="new-todo"
         placeholder="What needs to be done?" 
         autoFocus
         onChange={(e)=>setTitle(e.target.value)}
          value={title} 
         />
        </form>
  )
}

export default Form