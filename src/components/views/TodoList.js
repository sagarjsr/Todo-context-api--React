import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { TodosContext } from '../../contexts/TodosContext';

const TodoList = () => {
    const { todos, dispatch } = useContext(TodosContext);
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const [todo, setTodo]= useState('');

    const handleChange = (e) =>{
        setTodo(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', text: todo});
        setTodo(' ');
        console.log("submited")
        
    }

    const handleRemoveTodo = (e) =>{
        console.log("clicked")
        let id = e.target.id;
        dispatch({type:'REMOVE_TODO', id})
    }
    return (
        <div style={{ background: theme.background, color: theme.text, textAlign: 'center' }}>

            {todos.length ? (
                todos.map((todo) => {
                    return(<p  id={todo.id}className='item' onClick={handleRemoveTodo} key={todo.id}>{todo.text}</p>)
                })
            ) :<p>No Todo list found</p>}
            <br></br>
            <form onSubmit={onSubmit}>
                <label> Add Todo </label>
                <input type='text' value={todo} onChange={handleChange}></input>
                <input type='submit' value='Add new Todo' className='ui button primary' ></input>
            </form>
            <button className='ui button primary' onClick={changeTheme}>Change Theme</button>

        </div>
    )
}

export default TodoList;