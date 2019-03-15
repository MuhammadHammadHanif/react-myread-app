import React from 'react'
import BookLists from './BookLists'

const BookShelf = (props) => {
    // destructing from props object
    const {title, Books, category} = props;
    // storing query for book filter
    const booksFilter = Books.filter(book => book.shelf === category)
    return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                {/* For showing data on dashboard based on their categories */}
                <ol className="books-grid">
                {
                    booksFilter.length > 0 
                    ? booksFilter.map(({id, title, authors, imageLinks, shelf}) =>  
                        <BookLists 
                            id={id}
                            key={id}
                            bookTitle={title ? title : ''} 
                            author={authors ? authors : ''} 
                            image={imageLinks ? imageLinks.thumbnail : ''}
                            category={shelf}
                            {...props}
                        />
                        ) 
                    : <p>No Books Found</p>
                }
                </ol>
                </div>
            </div>
    )
}

export default BookShelf