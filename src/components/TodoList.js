import React, { useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import Tools from './Tools';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    //clean todo-row
    const removeAll = div => {
        const removeTodo = [...todos].filter(todo => todo.div !== div);

        setTodos(removeTodo);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    return (
        <div>
            <Tools removeAll={removeAll} />
            <h1>Lista de tarefas</h1>

            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} 
            removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    );
}

export default TodoList;