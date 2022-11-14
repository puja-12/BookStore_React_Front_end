import React, { useEffect, useState } from 'react'
import './wishlist.css'


import WishListMain from '../Wishlistpage/wishlistPage'
import Header from '../Header/header'
import { displayBooksFromWishlists } from '../../services/dataservice'
import Footer from '../Footer/footer'

function Wishlist() {

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
        <WishListMain item={item} />
    ))


    return (

        <div>
            <Header />
            <div className='wishtext'>
                <h5>Home /</h5> <h4> My Wishlist</h4>
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