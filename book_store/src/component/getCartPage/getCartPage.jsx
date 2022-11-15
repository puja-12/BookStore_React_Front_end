import React, { useState } from 'react'
import { itemQuantityInBeg, removeBookFromCart } from '../../services/dataservice'

import './getCartPage.css'
// import './Cart.css'



function GetCartPage(props) {
    const initialCount = 1
    const [quantity, setQuantity] = useState(initialCount)
    const addbook = () => {
        setQuantity(prevCount => prevCount + 1)
        console.log(quantity)

    
    // let data = { cartItem_id: props.item._id }
    let quantityValue= {"quantityToBuy" : quantity }
    itemQuantityInBeg(props.item._id,quantityValue).then((response) => {
        console.log(response)

    })
        .catch((error) =>
            console.log(error)
        )
}


    const decrement = () => {
        if (quantity > 0) {
            setQuantity(prevCount => prevCount - 1);
            
        }
        // let data = { cartItem_id: props.item._id }
        let quantityValue= {"quantityToBuy" : quantity }
        itemQuantityInBeg(props.item._id,quantityValue).then((response) => {
            console.log(response)
    
        })
            .catch((error) =>
                console.log(error)
            )



    }

    const removebook = () => {
        console.log(props.item,"Book removed from Cart")

        let Object = {  'cartItem_id' : props.item._id }
        // console.log(Object, "check id passing")

        removeBookFromCart(  Object).then((response) => {
            console.log(response)

        })
            .catch((error) =>
                console.log(error)
            )

    }




        return (
            // <h1> hai</h1>
            <div>

                <div className="cartlist">
                    <div className="getcartpage">
                        <div className="aboutbookrow">
                            <div className="cartbookimg">
                                <img src="images/bookimg.png" alt="" />
                            </div>
                            <div className="aboutbook">
                                <h3 className="abookname">{props.item.product_id.bookName}{/* BookName */}</h3>
                                <p className="abkauthor">{props.item.product_id.author}{/* author */}</p>
                                <div className="abookprice">
                                    <h2 className="price">Rs.{props.item.product_id.price}{/* Rs. 500 */}</h2>
                                    <p className="discountprice">{props.item.product_id.discountPrice}</p>
                                </div>
                                <div className="aincrement">
                                    <div className="aminus" onClick={decrement} >-</div>
                                    <div className="aitemss"> {quantity}{props.item.book_quantity}</div>
                                    <div className="aplus" onClick={addbook} >+</div>
                                    <button className="aremove" onClick={removebook} >Remove</button>
                                </div>
                            </div>
                            {/* <div className='PlaceOrderDiv'>
                            <button className="PlaceOrder" onClick={onAddressClick}>Place Order</button>
                        </div> */}
                        </div>
                    </div>



                    {/* <div className="aboutbookrow">
                <div className="cartbookimg">
                    <img src="image1.png" alt="" />
                </div>
                <div className="aboutbook">
                    <h3 className="abookname"> {props.item.product_id.bookName} BookName</h3>
                    <p className="abkauthor"> {props.item.product_id.author} author</p>
                    <div className="abookprice">
                        <h2 className="price">Rs. {props.item.product_id.discountPrice} ori</h2>
                        <p className="discountprice">Rs. {props.item.product_id.originalPrice} 1000</p>
                    </div>
                    !props.switchordersum && 
                    <div className="aincrement">
                        <div className="aminus" id={props.item._id} onClick={decrement} >-</div>
                        <div className="aitemss">{quantity} {props.item.book_quantity}</div>
                        <div className="aplus"  id={props.item._id} onClick={increment} >+</div>
                        <button className="aremove"  id={props.item._id} onClick={remove} >Remove</button>
                    </div>
                       }
                </div>
                <div className='PlaceOrderDiv'>
                    <button className="PlaceOrder" onClick={onAddressClick}>Place Order</button>
                </div>
            </div> */}
                </div>


                {/* {view ?
            <div className="Addressdetais">
                <p className="add" > Address Details </p>
            </div>
            : <div>
                <p className="add" >Address Details</p>
                <AddressDetails />
            </div>} */}
            </div>
        )
    }

    export default GetCartPage