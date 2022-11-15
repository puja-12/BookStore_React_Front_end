import React from 'react'
import { removeBookFromWhislist } from '../../services/dataservice'
import './wishlistPage.css'


function WishListMain(props) {

    const removebook = () => {
        let Object ={'product_id' : props.item.product_id._id}
        console.log(Object, "check id passing")

        removeBookFromWhislist( Object).then((response) => {
            console.log(response)

        })
            .catch((error) =>
                console.log(error)
            )
        console.log(props.item,"Book removed from Cart")

    }




    return (
        <div>
            <div className="wishrow" >
                <div className="wishimg">
                    <img src="images/bookimg.png" /* "dontmakemethink.jpg" */ alt="notfound" />
                </div>
                <div className="wishdetails">
                    <h4 className="wishbook"> {props.item.product_id.bookName}{/* Don't Make Me Think */}</h4>
                    <p className="wishauthor">by {props.item.product_id.author} {/* Steve Krug */}</p>
                    <div className="wishprice">
                        <h3 className="wprice">{props.item.product_id.price}{/* Rs.1500 */}</h3>
                        <p className="disprice">Rs.2000</p>
                    </div>
                </div>
                <div className="remove">
                    <button onClick={removebook}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default WishListMain