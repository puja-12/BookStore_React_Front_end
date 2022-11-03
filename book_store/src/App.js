import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup';
import Signin from './pages/signin/signin';
import OrderLogin from './component/Dashboard/dashboard';
import Header from './component/Header/header';
import Footer from './component/Footer/footer';

function App() {
  return (
    <div className="App">
     {/* <Signup />   */}
     {/* <Signin /> */}
     {/* <OrderLogin /> */}
     {/* <AppBarOne /> */}
     <Header />
     <Footer/>
    </div>
  );
}

export default App;
