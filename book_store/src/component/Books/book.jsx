import React from 'react'
import './book.css'



function Books(props) {
    const Showbookdata = (data) => {
        console.log("singlebook", data)
        props.ListenToBookList()
        props.listenToEachBook(data)
    }

return (

    <div>
        <div className="bookContainer" onClick={() => Showbookdata(props.book)}>
            <div className="bookimg">
                <div className="images">
                    <img style={{ height: '100%', width: '100%' }} src='images/bookimg.png' alt="book" />
                </div>
            </div>
            <div className="details">
                <div className='BA'>
                    <p className="bookname">Don't Make Me Think</p>
                    <p className="author">by {props.book.author}</p>
                </div>
                <div className='RQ'>
                    <button className="ratingbtn">****</button>
                    <p className="quantity">({props.book.quantity})</p>
                </div>
                <div className='PD'>
                    <h2 className="price">Rs.{props.book.price}</h2>
                    <p className="discountprice">Rs.{props.book.discountPrice}</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Books
