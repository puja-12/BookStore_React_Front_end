
import React from 'react'
import './orderSummary.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



function OrderSummary() {
    const Navigate = useNavigate()

    const onCheckout = () => {
        Navigate('/OrderSuccessfull')
      }
    
  return (
    <div className='orderSummerycontainer'>
        <div className="orderSummerytext">
            <p>Order Summery</p>
        </div>
        <div className="orderSummeryorderData">
            <div className="orderItemimage">
                <img src="images/bookimg.png" alt="" className='orderItem-image-img' />
            </div>
            <div className="orderData">
                <div className="cartItems-title">
                Don't Make Me Think
                </div>
                <div className="cartItems-author"> 
                    by chetan Bhagat
                </div>
                <div className="cartItems-price">
                    Rs. 495
                </div>
            </div>
        </div>
        <div className="checkoutbtn">
            <Button variant="contained" className='checkout' onClick={onCheckout}>checkout</Button>
        </div>
    </div>
  )
}

export default OrderSummary