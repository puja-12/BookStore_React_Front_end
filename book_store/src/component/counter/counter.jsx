import React from 'react'
import { addBookTocart, removeBookFromCart } from '../../services/dataservice';
import './counter.css'

function Counter() {

    const initialCount = 0
    const [quantity, setQuantity] = React.useState([initialCount])
    

    const addbook = () => {
      
        setQuantity(prevCount => prevCount+ 1)
    }

    const removebook = () => {
        setQuantity(prevCount => prevCount - 1)
        
    }

    return (
        <div>

            <div className="aincrement">
                <div className="aminus" onClick={removebook}>-</div>
                <div className="aitemss"> {quantity}</div>
                <div className="aplus" onClick={addbook}>+</div>
                {/* <button className="aremove" onClick={removebook} >Remove</button> */}
            </div>


        </div>
           
           
    )
}

export default Counter