import React from "react";
import {Route,Routes} from 'react-router-dom'
import Login from '../pages/Login'
import Error from '../pages/Error'
import Solution from '../pages/Solutions'
import { Home } from "../pages/Home";
export default function Allroutes(){
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Error />} />
    <Route path="/solution" element={<Solution/>}/>
    </Routes>
    </div>
)
};
