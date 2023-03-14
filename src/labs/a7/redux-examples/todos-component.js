import React, { useState } from "react";
import {useDispatch,  useSelector} from "react-redux";
import { addTodo, deleteTodo, todoDoneToggle } from "./reducers/todos-reducer";

const Todos = () => {
  const dispatch = useDispatch();
 const todos
       = useSelector(state => state.todos);
  const [todo, setTodo] = useState({do: ''});
  const onChange = (e) => {
    setTodo({
      do: e.target.value
    })
  }
  const createTodoClickHandler = () => {
    dispatch(addTodo(todo))
  }
  const deleteTodoClickHandler = (index) => {
    dispatch(deleteTodo(index))
   }

   const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo))
  }
 
   
 
 return(
   <>
     <h3>Todos</h3>
     <ul className="list-group">
      <li className="list-group-item d-flex">
      
        <input
          onChange={onChange}
          value={todo.do}
          className="form-control"/>
          <button onClick={createTodoClickHandler}
               className="btn btn-primary w-25">
         Create</button>
      </li>

       {
         todos.map((todo, index) =>
           <li className="list-group-item d-flex">
           <button onClick={() => 
           deleteTodoClickHandler(index)}
           className="btn btn-danger 
                      float-end ms-2">
           Delete
          </button>
          <input type="checkbox"
            checked={todo.done}
            onChange={() => 
             toggleTodoDone(todo)}
            className="me-2"/>
            {todo.do}
           </li>
         )
       }
     </ul>
   </>
 );
};
export default Todos;
