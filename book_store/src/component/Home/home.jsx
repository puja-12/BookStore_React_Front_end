import React, { useEffect, useState } from 'react'

import './home.css'
import { getBooks } from '../../services/dataservice'
import Footer from '../Footer/footer'
import Books from '../Books/book'
import Header from '../Header/header'
import BookView from '../BookView/bookView'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';




function Home() {


  const [books, setbooks] = useState([])
  const [view, setview] = useState(true)
  const [selecbook, setselecbook] = useState("")


  // const [page, setPage] = useState(1)
  
  // const handleChange = (e, p) => {
  //   console.log(e,p)
  //   setPage(p)
  // }


  const ListenToBookList = () => {
    setview(false)
  }

  const listenToEachBook = (data) => {
    setselecbook(data);
    console.log(selecbook, "particular book")
  }


  const booksarray = books.map(book => (<Books book={book} books={books} ListenToBookList={ListenToBookList} listenToEachBook={() => listenToEachBook(book)} />))
  // console.log(books.length)
  useEffect(() => {
    getBooks().then((response) => { console.log(response); setbooks(response.data.result) })
  }, [])
  // console.log(books,"...getting book")

  return (
    <div>
      <Header />
      <div className="box">
        <h2>Books </h2>
        <h5> (128 items)</h5>
      </div>


      <div className='bookarray'>

        {/* {booksarray}  */}
        {
          view ? booksarray : <BookView id={books._id} selecbook={selecbook} />
        }
      </div>
      {/* <Pagination count={8} 
      defaultPage={6} onChange={handleChange} style={{position:'relative',left:'520px'}}
      /> */}
      <Footer />
    </div>
  )
}

export default Home