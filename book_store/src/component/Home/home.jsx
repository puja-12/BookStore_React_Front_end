import React, { useEffect, useState } from 'react'

import './home.css'
import { getBooks } from '../../services/dataservice'
import Footer from '../Footer/footer'
import Books from '../Books/book'
import Header from '../Header/header'
import BookView from '../BookView/bookView'

function Home() {


  const [books, setbooks] = useState([])
  const [view, setview] = useState(true)
  const [selecbook, setselecbook] = useState("")

  const ListenToBookList = () => {
    setview(false)
  }

  const listenToEachBook = (data) => {
    setselecbook(data);
  }

  const booksarray = books.map(book => (<Books book={book} books={books} ListenToBookList={ListenToBookList} listenToEachBook={listenToEachBook} />))
  // console.log(books.length)
  useEffect(() => {
    getBooks().then((response) => { console.log(response); setbooks(response.data.result) })
  }, [])

  return (
    <div>
      <Header />
      <div className='bookarray'>

        {/* {booksarray}  */}
        {
          view ? booksarray : <BookView selecbook={selecbook} />
        }
      </div>
      <Footer />
    </div>
  )
}

export default Home