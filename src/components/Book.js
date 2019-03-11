import React from 'react'

const Book = (props) => {
    return(
        <ol className="books-grid">
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${props.image}")` }}></div>
                    <div className="book-shelf-changer">
                    <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{props.title}</div>
                <div className="book-authors">{props.author}</div>
                </div>
            </li>
        </ol>
    )
}

export default Book