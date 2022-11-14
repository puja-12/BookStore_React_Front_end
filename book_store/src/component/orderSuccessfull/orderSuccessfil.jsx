import React from 'react'
import './orderSuccessful.css'

import Header from '../Header/header';
import Footer from '../Footer/footer';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



function OrderSuccessfull() {

    const Navigate = useNavigate()

    const onContinueShopping = () => {
        Navigate('/home')
    }

    return (
        <div className="Home1">
            
            <Header/>
          
            <div className="ordersuccess">
                <div className="orderplaced">
                    {/* <img src="" alt="not found" /> */}
                    <h3>Order Placed Successfully</h3>

                </div>
                <p className="orderpara">
                    hurray!!! your order is confirmed <br></br>the order id is #123456 save the order id for<br></br> further communication..
                </p>
            </div>
            <div className="tabledata">
                <table>
                    <tbody>
                        <tr>
                            <th colSpan="1">Email Us</th>
                            <th colSpan="1">Contact Us</th>
                            <th colSpan="3">Address</th>
                        </tr>
                        <tr>
                            <td>admin@bookstore.com</td>
                            <td>+91 8163475881</td>
                            <td>42, 14th Main, 15th Cross,Bangalore 560034</td>
                        </tr>
                    </tbody>
                </table>
              
                <Button variant="contained" style={{position:'relative',top:'60px'}}    onClick={onContinueShopping} >Continue Shopping</Button>
                 {/* onClick={onContinueShopping} */}
            </div>
            <Footer />
        </div>
    )
}

export default OrderSuccessfull