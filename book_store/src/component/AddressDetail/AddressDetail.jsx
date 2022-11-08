
import React from 'react'

import './AddressDetail.css'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import OrderSummary from '../orderSummary/orderSummary';


function AddressDetails() {
    const [view1, setView1] = React.useState(true);

    const OrderClick = () => {
      setView1(false)
    }
    
  return (
    <div>
      <div className='AddressDetailsContainer'>
        <div className='details'>
          <div className='custdetails'>
            <p>Customer Details</p>
          </div>
       
          <div className="fullname">
          <label className="detail">FullName</label>
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" Full Name "
                style={{ width: "100%",position:'relative',right:'38px' }}/>
           
            </div>
            <label className="detail">Mobile </label>
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" Mobile Number "
                style={{  width: "100%",position:'relative',right:'38px'}}/>
                
            </div>
          </div>
         
          <label className="detail1">Address</label>
          <div className="address">
            <TextField id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder=" Address "
              style={{ width: "100%"}}/>
         
          </div>
        
          <div className="fullname">
          <label className="detail">City/town</label>
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" City/town "
                style={{ width: "100%",position:'relative',right:'38px' }}/>
          
            </div>
            <label className="detail">state</label>
            <div className='fname'>
              <TextField id="outlined-basic"
                variant="outlined"
                size="small"
                placeholder=" state "
                 style={{ width: "100%",position:'relative',right:'38px' }}/>
                
            </div>
          </div>
          <label className="type">Type</label>
          <div className="radio1">
            <input type="radio" className="home" value="Home" name="type" /> Home
            <input type="radio" className="work" value="Work" name="type" /> work
            <input type="radio" className="other" value="Other" name="type" /> Other
          </div>
        </div>
        <div className='continue'>
        <Button variant="contained" onClick={OrderClick}>Continue</Button>
        </div>
      </div>
      {view1 ? <div className="ordersummary2">
        <p>Order Summary </p>
      </div>
        : <OrderSummary />}
    </div >
  )
}

export default AddressDetails