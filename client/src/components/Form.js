import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Loading from './Loading'
import Error from './Error'

import { addTodoAsync } from '../redux/todo/todosSlice'


function Form() {
  const [title,setTitle] = useState('')
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.todos.addNewTodoLoading)
  const error = useSelector(state => state.todos.addNewTodoError)

  const handleSubmit = async (e)=>{

    if(!title)  return;
    e.preventDefault();
  
  
      await dispatch(addTodoAsync({

        title
    
     }))

      setTitle("");
   };

  


  return (
 
<form onSubmit={handleSubmit}   style={{display:'flex', alignItems:'center'}} >
        <input 
        disabled={isLoading}
        className="new-todo"
         placeholder="What needs to be done?" 
         autoFocus
         onChange={(e)=>setTitle(e.target.value)}
          value={title} 
         />


   {
    isLoading &&  <Loading style={{paddingRight:10}} /> 
   }
   {error && <Error message={error} /> }
         
        </form>
  )
}

export default Form