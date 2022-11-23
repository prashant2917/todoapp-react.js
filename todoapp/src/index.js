import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router> <App /> 
   <Routes>
         <Route exact path="/" element = {<TodosList />} />
          <Route path="/edit/:id" element={<EditTodo/>} />
          <Route path="/create" element={<CreateTodo />} />
          </Routes>
   
   </Router>
    
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
