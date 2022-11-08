import React from 'react'

import './cart.css'

import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import AddressDetails from '../AddressDetail/AddressDetail';
import Counter from '../counter/counter';

function Cart(props) {
    const [view, setView] = React.useState(true);

    const onAddressClick = () => {
        setView(false)
    }
    const initialCount = 0
    const [quantity, setQuantity] = React.useState(initialCount)
    const addbook = () => {
        setQuantity(prevCount => prevCount + 1)

    }

    const removebook = () => {
        setQuantity(prevCount => prevCount - 1)


    }


    return (
        <div className="cartContainer">

            <Header />

            <div className='inputDetails'>
                <div className="CartDetails">
                    <div className="Cart">
                        <h3 style={{ position: "relative", right: "190px" }}>My cart </h3>
                        <div className="bookContainer1" >

                            <div className="images1">
                                <img style={{ height: '100%', width: '100%' }} src='images/bookimg.png' alt="book" />
                            </div>

                            <div className="details1">
                                <div className='BA1'>
                                    <p className="bookname1">Don't Make Me Think</p>
                                    <p className="author1">by Chetan bhagat </p>
                                </div>
                                <div className='PD1'>
                                    <h2 className="price1">Rs.1500</h2>
                                    <p className="discountprice1">Rs.2500</p>
                                </div>
                                <div className="increment">
                                    <div className="minus" onClick={removebook}>-</div>
                                    <div className="itemss"> {quantity}</div>
                                    <div className="plus" onClick={addbook}>+</div>
                                    <button className="remove" onClick={() => setQuantity(initialCount)} >Remove</button>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='LocationandPO1'>
                        <div className='locicon1'>
                            <LocationOnSharpIcon style={{ color: 'grey', fontSize: 'medium' }} />
                            <p >Use Current location</p>
                        </div>
                        <button className="PlaceOrder1" onClick={onAddressClick} >Place Order</button>
                    </div>
                </div>

            </div>
            {view ?
                <div className="Addressdetais1">
                    <p className="add" >Address Details</p>
                </div>
                : <AddressDetails />}
            <Footer />

        </div >
    )
}

export default Cart