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
                  <BookShelf title="Currently Reading"/>
                  <BookShelf title="Want to Read"/>
                  <BookShelf title="Read"/>
                </div>
              </div>
              <div className="open-search">
                <button onClick={() => props.showSearchPage(true)}>Add a book</button>
              </div>
            </div>
    )
}

export default ShelvesWrapper