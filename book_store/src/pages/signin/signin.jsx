import React, { useState } from 'react'
import './signin.css'
import Button from '@mui/material/Button';


import TextField from '@mui/material/TextField';

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function Signin() {
    const [LoginObj, setLoginObj] = useState({ email: "", password: "" });
    const [regexObj, setRegExObj] = useState({
        emailBorder: false,
        passwordBorder: false,
        emailHelper: "",
        passwordHelper: "",
      });

      const takeEmail = (event) => {
        setLoginObj((prevState) => ({ ...prevState, email: event.target.value }));
    };
    const takePassword = (event) => {
        setLoginObj((prevState) => ({ ...prevState, password: event.target.value }));
    };

    const OnSubmit = () => {
        let emailTest = emailRegex.test(LoginObj.email);
        let passwordTest = passwordRegex.test(LoginObj.password);
    
        if (emailTest === false) {
          setRegExObj((prevState) => ({
            ...prevState,
            emailBorder: true,
            emailHelper: "enter correct email",
          }));
        } else if (emailTest === true) {
          setRegExObj((prevState) => ({
            ...prevState,
            emailBorder: false,
            emailHelper: "",
          }));
        }
        if (passwordTest === false) {
          setRegExObj((prevState) => ({
            ...prevState,
            passwordBorder: true,
            passwordHelper: "enter correct password",
          }));
        } else if (passwordTest === true) {
          setRegExObj((prevState) => ({
            ...prevState,
            passwordBorder: false,
            passwordHelper: "",
          }));
        }
    
        if (emailTest === true && passwordTest === true) {
            console.log("hitt the server");
        }
      };

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
                                <TextField id="outlined-basic" 
                                                variant="outlined" 
                                                size="small"
                                                placeholder=" Email Id " 
                                                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "50px" }}
                                                onChange={takeEmail} 
                                                error={regexObj.emailBorder} 
                                                helperText={regexObj.emailHelper}/>
                                <label className="emailid">Password</label>
                                <TextField id="outlined-basic" 
                                                variant="outlined" 
                                                size="small" 
                                                placeholder=" Password "
                                                style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "50px" }} 
                                                onChange={takePassword}  
                                                error={regexObj.passwordBorder} 
                                                helperText={regexObj.passwordHelper}/>
                                <label className="forgotpass" >Forgot Password?</label>
                            
                                <Button variant="contained" onClick={OnSubmit} >Login</Button>
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