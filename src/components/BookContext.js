import {createContext,useEffect,useReducer} from 'react'
import { bookReducer } from '../reducers/bookReducers'


export const BookContext=createContext()

export const BookContextProvider=(props)=>{
        const [books,dispatch]=useReducer(bookReducer,[],()=>{
            const localData=localStorage.getItem('books')
            return localData?JSON.parse(localData):[]
        })


        useEffect(()=>{
            localStorage.setItem('books',JSON.stringify(books))
        },[books])

        
        
        return(
            <BookContext.Provider value={{books,dispatch}}>
                {props.children}
            </BookContext.Provider>
                
            
        )
}