import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
      <div 
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index} 
      >
        
        <div className="text">
        <div className="check">

            <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
          onClick={() => completeTodo(todo.id)}
          />
            <span className="checkmark"></span>
            </label>
          <>
        </>
        </div>
          <div className="text" key={todo.id} >
            {todo.text}        
        </div>
        </div>
        <div className="icons">
            <RiCloseCircleLine 
            onClick={() => removeTodo(todo.id)}
            className='delete-icon' id='delete-icon'
            />
            <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text})}
            className='edit-icon' id='edit-icon'
            />
        </div>

        </div>
    ));
}

export default Todo
