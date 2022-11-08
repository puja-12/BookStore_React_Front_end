import React from 'react'
import Footer from '../Footer/footer'
import Header from '../Header/header'
import Button from '@mui/material/Button';

import './bookView.css'
import { addBookTocart, addWishList } from '../../services/dataservice';
import Counter from '../counter/counter';


function BookView(props) {
    const [view2, setView2] = React.useState(true);
 
      
    
  
    const addedToWishlist = (id) => {
        let data = {id :'id'} 
        addWishList(data).then((response) => {
            console.log(response)
           
        })
            .catch((error) =>
                console.log(error)
            )
            console.log ("book added to Wishlist")


    }
  
      const AddToBeg = (id) => {
        let Object = { id: 'id'}
        setView2(false)
        addBookTocart(Object).then((response) => {
            console.log(response)
           
        })
            .catch((error) =>
                console.log(error)
            )
            console.log ("book added to beg")
    }
  

    


    
    return (
        <div className="BookViewContainer">
        
            <div className='MiddleOfBookView'>
                <div className="ImageCoumn">
                    <div className="imgborder">
                        <div className="bkimg">
                            <img src="images/bookimg.png" />
                        </div>
                    </div>
                    <div className="CartWishlist">
                        {/* <button className="addtobag" >ADD TO BAG</button> */}
                        {/* <Button variant="contained" style={{backgroundColor:'#A03037',width:'140px'}} >ADD TO BAG</Button> */}
                        {view2 ? <Button variant="contained" style={{backgroundColor:'#A03037',width:'140px'}} onClick={AddToBeg}>ADD TO BAG</Button>: <Counter />}

                        <Button variant="contained" style={{backgroundColor:'black',width:'140px'}} onClick={addedToWishlist} >WISHLIST</Button>
                        {/* <button className="wishlist" >WISHLIST</button> */}
                    </div>
                </div>
                <div className="bkname">
                    <h2 className="bknme">Don't Make Me Think</h2>
                    <p className="athrname"> by {props.selecbook.author}  </p>
                    <div className="rtng">
                        <div className="rtngbtn">4.5*</div>
                        <p className="qnty">({props.selecbook.quantity})</p>
                    </div>
                    <div className="prcediv">
                        <h3>Rs.{props.selecbook.price}</h3>
                        <p >{props.selecbook.discountPrice}</p>
                    </div>
                    <hr />
                    <h4 className="bookdetails">Book Details</h4>
                    <p className="para"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially.
                    </p>
                    <hr />
                    <h4 className="customerfeedback">Customer Feedback</h4>
                    <div className="overallrating">
                        <p >overallrating</p>
                        <div className="star">
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                        </div>
                        <input type="text" class="input1" placeholder="write your review" />
                        <Button variant="contained" style={{width:'70px',position:'relative',left:'450px'}}>SUBMIT</Button>
                    </div>
                    
                </div>
            </div>
           </div>
      
    )
}

export default BookView