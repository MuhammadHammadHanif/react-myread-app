import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
    return(

        <div>
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
            {
                props.Books.filter(book => book.shelf === props.category).map(data =>  
                    
                <Book 
                    id={data.id}
                    key={data.id}
                    bookTitle={data.title} 
                    author={data.authors} 
                    image={data.imageLinks.thumbnail}
                    category={data.shelf}
                    {...props}
                />
                )
            }
            </ol>
            </div>
        </div>
        </div>
    )
}

export default BookShelf