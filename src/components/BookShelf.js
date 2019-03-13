import React from 'react'
import BookLists from './BookLists'

const BookShelf = (props) => {
    return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.title}</h2>
                <div className="bookshelf-books">
                {/* For showing data on dashboard based on their categories */}
                <ol className="books-grid">
                {
                    props.Books.filter(book => book.shelf === props.category).length > 0 
                    ? props.Books.filter(book => book.shelf === props.category).map(data =>  
                        <BookLists 
                            id={data.id}
                            key={data.id}
                            bookTitle={data.title} 
                            author={data.authors} 
                            image={data.imageLinks.thumbnail}
                            category={data.shelf}
                            {...props}
                        />
                        ) 
                    : <p>No Books</p>
                }
                </ol>
                </div>
            </div>
    )
}

export default BookShelf