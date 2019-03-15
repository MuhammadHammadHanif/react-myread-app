import React from "react";
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

const ShelvesWrapper = (props) => {  
    return(
            <div className="list-books">
              <div className="list-books-title">
                <h1>My Reads App</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {/* 3 instance of BookShelf component for showing 3 categories on dashboard and sending parents props as well */}
                  <BookShelf {...props} title="Currently Reading" category='currentlyReading' />
                  <BookShelf {...props} title="Want to Read" category='wantToRead' />
                  <BookShelf {...props} title="Read" category='read' />
                </div>
              </div>
              <div className="open-search">
                {/* For navigation to Search books page */}
                <Link to="/search-books">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
    )
}

export default ShelvesWrapper