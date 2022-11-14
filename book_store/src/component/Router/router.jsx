import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from '../cart/cart';
import OrderLogin from '../Dashboard/dashboard';
import Home from '../Home/home';
import OrderSuccessfull from '../orderSuccessfull/orderSuccessfil';
import Wishlist from '../Wishlist/wishlist';
import WishListMain from '../Wishlistpage/wishlistPage';



function RouterComponent() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route  path="/" element={ <OrderLogin/>}/> 
              <Route  path="/home" element={ <Home/>}/>
              <Route path="/cart" element ={<Cart />}/>
              <Route  path = "/OrderSuccessfull" element={<OrderSuccessfull/>} />  
              <Route  path = "/wishlist" element={<Wishlist/>} />  
              <Route  path = "wishlistPage" element={<WishListMain/>} />  

          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterComponent