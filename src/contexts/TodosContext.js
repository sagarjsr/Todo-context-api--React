import React, { createContext, useReducer } from 'react'
import {todosReducer }from '../reducer/todosReducer'


export const TodosContext = createContext();



const TodosContextProvider = ({ children }) => {

    const [todos, dispatch] = useReducer(todosReducer, [
        { text: 'javaScript', key: 1 },
        { text: 'Recat', key: 2 },
        { text: 'Node', key: 3 },

    ])

    return (
        <TodosContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodosContext.Provider>
    )
};


export default TodosContextProvider;