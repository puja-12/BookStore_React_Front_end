import React, { useState } from "react";
import Signin from "../../pages/signin/signin";
import Signup from "../../pages/signup";




function OrderLogin() {

    const [switchloginsignup, setswitchloginsignup] = useState(false)

    const ListenToSignup = (data) => {
        if (data == true) {
            setswitchloginsignup(true)
        } else if (data == false) {
            setswitchloginsignup(false)
        }
    }
    return (
        <div className="main-container">
            {
                switchloginsignup ? <Signup ListenToSignup={ListenToSignup} /> : <Signin ListenToSignup={ListenToSignup} />
            }
        </div>
    )
}

export default OrderLogin