import React from 'react'
import './wishlistPage.css'


function WishListMain(props) {




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
                    <button >Remove</button>
                </div>
            </div>
        </div>
    )
}

export default WishListMain