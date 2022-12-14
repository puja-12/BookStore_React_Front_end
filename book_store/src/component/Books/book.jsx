import React from 'react'
import './book.css'



function Books(props) {
    const Showbookdata = (data) => {
        console.log("singlebook", data)
        props.ListenToBookList()
        props.listenToEachBook(data)
    }
    console.log(props.book,"book is getting")

return (

    <div>
        <div className="bookContainer"
      onClick={() => Showbookdata(props.book)}>
            <div className="bookimg1">
                <div className="images1">
                    <img style={{ height: '100%', width: '100%' }} src='images/bookimg.png' alt="book" />
                </div>
            </div>
            <div className="information1">
                <div className='BA'>
                    <p className="name">{props.book.bookName}</p>
                    <p className="author">by 
                    {props.book.author}
                    </p>
                </div>
                <div className='RQ'>
                    <button className="ratingbtn">****</button>
                    <p className="quantity">
                        ({props.book.quantity})
                        </p>
                </div>
                <div className='PD'>
                    <h2 className="price">
                        Rs.{props.book.price}
                        </h2>
                    <p className="discountprice">
                    {props.book.discountPrice}
                    </p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Books
