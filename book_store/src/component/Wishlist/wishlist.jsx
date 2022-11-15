import React, { useEffect, useState } from 'react'
import './wishlist.css'


import WishListMain from '../Wishlistpage/wishlistPage'
import Header from '../Header/header'
import { displayBooksFromWishlists } from '../../services/dataservice'
import Footer from '../Footer/footer'
import { useNavigate } from 'react-router-dom'

function Wishlist() {
    const Navigate = useNavigate()

    const onCheckout = () => {
        Navigate('/home')
      }

    const [wish, setwish] = useState([])

    const getWishlist = () => {
        displayBooksFromWishlists().then((response) =>
         { console.log(response); 
            setwish(response.data.result) })
            .catch((error) =>
             { console.log(error) })
    }
    useEffect(() => {
        getWishlist()
    }, [])

    const wisharray = wish.map((item) => (
        <WishListMain item={item} id={item._id} />
    ))


    return (

        <div>
            <Header />
            <div className='wishtext'>
                <h5 onClick={onCheckout}>Home /</h5> <h4> My Wishlist</h4>
            </div>
            <div className="mywishlist">
                <div className="mywish">
                    <h3>My Wishlist</h3>
                </div>
                <div className="wisharray">
                    {wisharray}
                </div>
            </div>
          

            

        </div>
    )
}

export default Wishlist