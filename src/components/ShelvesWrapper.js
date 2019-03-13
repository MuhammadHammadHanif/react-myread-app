import React from "react";
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

const ShelvesWrapper = (props) => {  
    return(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {/* 3 instance of BookShelf component for showing 3 categories on dashboard */}
                  <BookShelf title="Currently Reading" category='currentlyReading' {...props}/>
                  <BookShelf title="Want to Read" category='wantToRead' {...props}/>
                  <BookShelf title="Read" category='read' {...props}/>
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