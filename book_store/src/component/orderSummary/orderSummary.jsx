
import React from 'react'
import './orderSummary.css'
import Button from '@mui/material/Button';



function OrderSummary() {
    
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
            <Button variant="contained" className='checkout'>checkout</Button>
        </div>
    </div>
  )
}

export default OrderSummary