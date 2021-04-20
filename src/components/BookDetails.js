import {useContext} from 'react'
import { BookContext } from './BookContext'


export const BookDetails=({book})=>{
    const {dispatch}=useContext(BookContext)
       return(
        <div onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}  className='bookdetails'>
            <ul>
                <li className='title'>{book.title}</li>
                <li className='author'>{book.author}</li>
            </ul>
            
        </div>
    )
}