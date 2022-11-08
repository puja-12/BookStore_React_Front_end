import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OrderLogin from '../Dashboard/dashboard';
import Home from '../Home/home';



function RouterComponent() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route  path="/" element={ <OrderLogin/>}/> 
              <Route  path="Home" element={ <Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterComponent