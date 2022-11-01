import React from 'react'
import './signin.css'
import Button from '@mui/material/Button';


import TextField from '@mui/material/TextField';

function Signin() {
    return (
        <div>
            <div class="signinContainer">
                <div class="Block">
                    <div class="box1">
                        <img src='images/shopping.png' style={{width: "40%", height: "60%", borderRadius: "50%",position:'relative',top:'35px',right:'130px' }} />
                        <h3 style={{position:'relative',top:'50px',right:'130px' }} >ONLINE BOOK SHOPPING</h3>
                    </div>
                    <div class="box2">
                        <div className="buttons">
                           
                             <Button variant="text">Login</Button>
                            <Button variant="text">Signup</Button>
                        </div>
                        <div className="Data">
                            <div className="inputdetails">
                                <label className="emailid">Email Id</label>
                                <TextField id="outlined-basic" variant="outlined" size="small" placeholder=" Email Id " style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "50px" }} />
                                <label className="emailid">Password</label>
                                <TextField id="outlined-basic" variant="outlined" size="small" placeholder=" Password " style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "50px" }} />
                                <label className="forgotpass" >Forgot Password?</label>
                                <button >Login</button>
                                <text>OR</text>
                            </div>
                            <div className="FBGgl" >
                                
                                <Button variant="contained">FaceBook</Button>
                                <Button variant="outlined">Google</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin