import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddCategory from './components/addCategory/AddCategory';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/addcat' element = {<AddCategory/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
