import React from 'react'
import { addBookTocart, itemQuantityInBeg, removeBookFromCart } from '../../services/dataservice';
import './counter.css'

function Counter(props) {


    const [quantity, setQuantity] = React.useState(1)


    const addbook = () => {

        setQuantity(prevCount => prevCount + 1)
    }

    const removebook = () => {
        if (quantity > 0) {
            setQuantity(prevCount => prevCount - 1);
        }
        let data = {product_id: props.selecbook._id}
        itemQuantityInBeg(data).then((response) => {
            console.log(response)

        })
            .catch((error) =>
                console.log(error)
            )
        console.log("book added to Wishlist")


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