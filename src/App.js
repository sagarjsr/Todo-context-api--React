import React from 'react'
import './App.css';
import ThemeContextProvider from './contexts/ThemeContext'
import NavBar from './components/layouts/NavBar'
import TodoList from './components/views/TodoList'
import AuthContextProvider from './contexts/AuthContext';
import TodosContextProvider from './contexts/TodosContext';



function App() {
  return (
    <div className='App'>
      <div className='ui raised very padded text container segment'>
        <AuthContextProvider>
        <TodosContextProvider>
          <ThemeContextProvider>
            <NavBar />
              <TodoList />
          </ThemeContextProvider>
          </TodosContextProvider>
        </AuthContextProvider>
      </div>

    </div>
  );
}

export default App;
