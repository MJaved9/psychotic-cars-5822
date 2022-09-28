import React from "react";
import {Route,Routes} from 'react-router-dom'
import Login from '../pages/Login'
import Error from '../pages/Error'

export const Allroutes = () => {
  return  <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<Error />} />
</Routes>
};
