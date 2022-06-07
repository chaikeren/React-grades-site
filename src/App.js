import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './FuncComps/Home';
import React from 'react';
import UserInfo from './FuncComps/UserInfo';
import Privacy from './FuncComps/Privacy';
import Login from './FuncComps/Login';
import ToStudy from './FuncComps/ToStudy';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/UserInfo" element={<UserInfo/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Privacy" element={<Privacy/>}/>
          <Route path='/ToStudy' element={<ToStudy/>}/>
        </Routes>
    </div>
  );
}

export default App;
