import React from 'react'
import './signup.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Signup() {
    return (
        <div>
            <div class="signupContainer">
                <div class="Box">
                    <div class="table1">
                        <img src='images/shopping.png' style={{ width: "40%", height: "60%", borderRadius: "50%",position:'relative',top:'35px',right:'130px' }} />
                        <h3 style={{position:'relative',top:'50px',right:'130px' }}>ONLINE BOOK SHOPPING  </h3>
                    </div>
                    <div class="table2">
                        <div className="buttons">
                        <Button variant="text">Login</Button>
                        <Button variant="text">Signup</Button>
                        </div>
                        <div className="inputdetails">
                            <label className="detail">Full Name</label>
                            <TextField id="outlined-basic" variant="outlined" size='small' placeholder=" Full Name " />
                            <label className="detail">Email Id</label>
                            <TextField id="outlined-basic" variant="outlined" size="small" placeholder=" Email Id " />
                            <label className="detail">Password</label>
                            <TextField id="outlined-basic" variant="outlined" size="small" placeholder=" Password " />
                            <label className="detail">Mobile Number</label>
                            <TextField id="outlined-basic" variant="outlined" size="small" placeholder=" Mobile Number " />
                            <button >Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
