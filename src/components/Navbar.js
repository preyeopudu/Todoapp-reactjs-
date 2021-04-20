import {useContext} from 'react'
import { BookContext } from './BookContext'

export const Navbar=()=>{
   const {books}= useContext(BookContext)
    return(
        <div className="navbar">
            <h1>Ninja Reading list</h1>
            <p>Currently you have {books.length} books to get though</p>
        </div>
    )
}