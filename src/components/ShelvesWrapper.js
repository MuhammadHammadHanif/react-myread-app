import React from "react";
import BookShelf from './BookShelf'

const ShelvesWrapper = (props) => {
    return(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf title="Currently Reading" category='currentlyReading' {...props}/>
                  <BookShelf title="Want to Read" category='wantToRead' {...props}/>
                  <BookShelf title="Read" category='read' {...props}/>
                </div>
              </div>
              <div className="open-search">
                <button onClick={() => props.showSearchPage(true)}>Add a book</button>
              </div>
            </div>
    )
}

export default ShelvesWrapper