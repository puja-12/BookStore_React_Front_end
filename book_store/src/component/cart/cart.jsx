import React, { useState } from 'react'

import './cart.css'

import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import AddressDetails from '../AddressDetail/AddressDetail';
import Counter from '../counter/counter';
import { displayBooksFromCart } from '../../services/dataservice';
import GetCartPage from '../getCartPage/getCartPage';


function Cart(props) {
    const [view, setView] = useState(true);
    const [addCart, setAddCart] = useState([])

    const onAddressClick = () => {
        setView(false)
    }




    const GetCartItem = () => {
        displayBooksFromCart()
            .then((response) => {
                console.log(response)
                setAddCart(response.data.result)
                console.log("CartItems from Set Cart", addCart)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    React.useEffect(() => {
        GetCartItem()
    }, [])
    const cartArray = addCart.map((item) => (<GetCartPage item={item} />))
    console.log(props.item, "all items")







    return (
        <div>
            <Header />
            <div>
                <div className='carttext'>
                    <h5>Home /</h5> <h3> Cart</h3>
                </div>


                <div className='cartarray'>
                    {cartArray}
                </div>

                <div className='PlaceOrderDiv'>
                    <button className="PlaceOrder" onClick={onAddressClick}>Place Order</button>
                </div>
                {view ?
                    <div className="Addressdetais">
                        <p className="add" >Address Details</p>
                    </div>
                    : <AddressDetails />}

            </div>
            <Footer />

        </div>
    )
}

export default Cart