import React from 'react'
import './signup.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const fullNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex =/^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex =/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileRegex =/^(\+\d{1,3}[- ]?)?\d{10}$/;

function Signup() {
    const [SignUpObj, setSignUpObj] = React.useState({ fullName:"", email: "", password: "", mobile:"" });
    const [regexObj, setRegExObj] = React.useState({
        fullNameBorder: false,
        emailBorder: false,
        passwordBorder: false,
        mobileBorder: false,
        fullNameHelper: "",
        emailHelper: "",
        passwordHelper: "",
        mobileHelper: "",
      });

      const takeFullName = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, fullName: event.target.value }));
    };
    const takeEmail = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, email: event.target.value }));
    };
    const takePassword = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, password: event.target.value }));
    };
    const takeMobile = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, mobile: event.target.value }));
    };

    const OnSubmit = () => {
        let fullNameTest = fullNameRegex.test(SignUpObj.fullName);
        let emailTest = emailRegex.test(SignUpObj.email);
        let passwordTest = passwordRegex.test(SignUpObj.password);
        let mobileTest = mobileRegex.test(SignUpObj.mobile);

        if (fullNameTest === false) {
            setRegExObj((prevState) => ({
              ...prevState,
              fullNameBorder: true,
              fullNameHelper: "enter correct Name",
            }));
          } else if (fullNameTest === true) {
            setRegExObj((prevState) => ({
              ...prevState,
              fullNameBorder: false,
              fullNameHelper: "",
            }));
          }

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

        if (mobileTest === false) {
            setRegExObj((prevState) => ({
              ...prevState,
              mobileBorder: true,
              mobileHelper: "Enter correct Mobile Number",
            }));
          } else if (mobileTest === true) {
            setRegExObj((prevState) => ({
              ...prevState,
              mobileBorder: false,
              mobileHelper: "",
            }));
          }
    
        if (fullNameTest === true && emailTest === true && passwordTest === true && mobileTest === true) {
            console.log("hitt the server");
        }
      };
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
                            <TextField id="outlined-basic" 
                                       variant="outlined" 
                                       size='small'
                                       placeholder=" Full Name "
                                       onChange={takeFullName} 
                                       error={regexObj.fullNameBorder} 
                                       helperText={regexObj.fullNameHelper}/>
                            <label className="detail">Email Id</label>
                            <TextField id="outlined-basic" 
                                        variant="outlined"
                                        size="small"
                                        placeholder=" Email Id " 
                                        onChange={takeEmail} 
                                        error={regexObj.emailBorder} 
                                        helperText={regexObj.emailHelper} />
                            <label className="detail">Password</label>
                            <TextField id="outlined-basic"
                                        variant="outlined" 
                                        size="small"
                                        placeholder=" Password "
                                        onChange={takePassword} 
                                        error={regexObj.passwordBorder} 
                                        helperText={regexObj.passwordHelper} />
                            <label className="detail">Mobile Number</label>
                            <TextField id="outlined-basic"
                                        variant="outlined" 
                                        size="small"
                                        placeholder=" Mobile Number "
                                        onChange={takeMobile} 
                                        error={regexObj.mobileBorder} 
                                        helperText={regexObj.mobileHelper} />
                            {/* <button >Signup</button> */}
                            <Button variant="contained" onClick= {OnSubmit}>Signup</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
