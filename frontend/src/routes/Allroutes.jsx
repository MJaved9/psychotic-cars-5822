import React from "react";
import {Route,Routes} from 'react-router-dom'
import Login from '../pages/Login'
import Error from '../pages/Error'
import Solution from '../pages/Solutions'
import { Home } from "../pages/Home";
import Main from "../pages/MainTask/Main";
export default function Allroutes(){
  return (
    <div style={{width:"100%"}}>
    <Routes>
      <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login />} />
    <Route path="/Task" element={<Main/> } />
    <Route path="/solution" element={<Solution/>}/>
    </Routes>
    </div>
)
};
