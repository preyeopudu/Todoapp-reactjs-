import {useContext} from 'react'
import {BookContext} from './BookContext'
import { BookDetails } from './BookDetails'

export const BookList=()=>{
    const {books}=useContext(BookContext)
    return books.length?(
        <div className="book-list"> 
            {
                books.map(book=>{
                     return(<BookDetails book={book} key={book.id}/>)
                })
            }
        </div>
    ):(
        <div className='empty'>Hello free time :)</div>
    )
}