import React, { useEffect, useState } from 'react'

import './home.css'
import { getBooks } from '../../services/dataservice'
import Footer from '../Footer/footer'
import Books from '../Books/book'
import Header from '../Header/header'
import BookView from '../BookView/bookView'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import usePagination from '@mui/material/usePagination/usePagination'



const PER_PAGE = 8;


function Home() {


  const [books, setbooks] = useState([])
  const [view, setview] = useState(true)
  const [selecbook, setselecbook] = useState("")
  const [searchBook, setSearchBook] = React.useState('')

// User is currently on this page
const [currentPage, setCurrentPage] = useState(1);
// No of Records to be displayed on each page   
const [recordsPerPage] = useState(5);

const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

const handleChange = (event, value) => {
  setCurrentPage(value);
};



  const ListenToBookList = () => {
    setview(false)
  }

  const listenToEachBook = (data) => {
    setselecbook(data);
    console.log(selecbook, "particular book")
  }


  const booksarray = books.slice(indexOfFirstRecord, indexOfLastRecord).map(book => (<Books book={book} books={books} ListenToBookList={ListenToBookList} listenToEachBook={() => listenToEachBook(book)} />))
  // console.log(books.length)
  // useEffect(() => {
  //   getBooks().then((response) => { console.log(response); setbooks(response.data.result) })
  // }, [])
  // console.log(books,"...getting book")

  const displayBooks = () => {

    getBooks().then((response) => {
      console.log(response);
      if (searchBook) {
        let filterbooks = response.data.result.filter(books => books.bookName.toLowerCase().includes(searchBook.toLowerCase()))
        setbooks(filterbooks)
      }
      else {
        setbooks(response.data.result)

      }
    }).catch((error) => {
      console.log(error);
    })

    
  }

  useEffect(() => {
    displayBooks();
  }, [searchBook])

  const showSearchedBooks = (input) => {
    setSearchBook(input)
  }

  return (
    <div>
      <Header showSearchedBooks={showSearchedBooks}  />
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
      {/* <Pagination count={11} defaultPage={6} siblingCount={0} />  */}
      <Pagination
        count={6}
        size="large"
        // page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        style={{ position: "relative", left: "500px" }}
      />

      <Footer />
    </div>
  )
}

export default Home