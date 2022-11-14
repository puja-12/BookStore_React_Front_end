import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup';
import Signin from './pages/signin/signin';
import OrderLogin from './component/Dashboard/dashboard';
import Header from './component/Header/header';
import Footer from './component/Footer/footer';
import Books from './component/Books/book';
import Home from './component/Home/home';
import BookView from './component/BookView/bookView';
import Cart from './component/cart/cart';
import AddressDetails from './component/AddressDetail/AddressDetail';

import OrderSummary from './component/orderSummary/orderSummary';
import { AppBar } from '@mui/material';
// import Decrement from './component/increment/decrement';

import Counter from './component/counter/counter';
import RouterComponent from './component/Router/router';
import OrderSuccessfull from './component/orderSuccessfull/orderSuccessfil';
import Wishlistpage from './component/Wishlist/wishlist';
import GetCartPage from './component/getCartPage/getCartPage';



function App() {
  return (
    <div className="App">
     {/* <Signup />   */}
     {/* <Signin /> */}
     {/* <OrderLogin /> */}
     {/* <AppBar /> */}
      {/* <Header /> */}
     {/* <Footer/>  */}
     {/* <Books /> */}
     {/* <Home /> */}
     {/* <Decrement /> */}
     {/* <Cart /> */}
     {/* <AddressDetails /> */}
    {/* <Counter /> */}
     {/* <OrderSummary /> */}
     <RouterComponent />
     {/* <OrderSuccessfull /> */}
     {/* <Wishlistpage /> */}
{/* <GetCartPage /> */}
     {/* <BookView /> */}
     {/* <Wishlistpage /> */}
     

    </div>
  );
}

export default App;
