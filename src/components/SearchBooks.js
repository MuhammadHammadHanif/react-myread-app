import React, {Component} from 'react'
import Book from './Book'
import {search, update} from '../BooksAPI'
import {Link} from 'react-router-dom'
class  SearchBooks extends Component {
    state= {
        query: '',
        searchBooks: [],
        error: ''
      }
    
    // activate when value change in textbox 
    onChangeValue = (event) => {
      const {name, value} = event.target
      // setting state to make input controlled component
      this.setState(() => ({
        [name]: value
      }))
      // using method from bookAPI to search book and storing in state
      search(event.target.value).then((searchBooks) => {
        this.setState({searchBooks})
      })
    }

    // used to save books to homepage
    AddBook = (book,category) => {
      // using method from bookAPI to update book and its category 
      update(book,category)
      // method for storing book and category in the main state (method is from parent component)
      this.props.storingBook(book,category)
    }

    render(){
      return(
        <div className="search-books">
            <div className="search-books-bar">

            {/* Link for using routing */}
              <Link to="/">
                  <button className="close-search">Close</button>
              </Link>
              
              <div className="search-books-input-wrapper">
                <input 
                 type="text" 
                 placeholder="Search by title or author"
                 value={this.state.query}
                 name="query"
                 onChange= {this.onChangeValue}
                 autoComplete="off"
                />
              </div>
            </div>
            <div className="search-books-results">
            {/* For showing Error */}
            {this.state.error && <p>{this.state.error}</p>}
              <ol className="books-grid">
               {/* To display the search books */}
               { 
                this.state.searchBooks !== undefined 
                ? this.state.searchBooks.map(searchBook => 
                  <Book 
                    id={searchBook.id}
                    key={searchBook.id}
                    bookTitle={searchBook.title} 
                    author={searchBook.authors} 
                    image={searchBook.imageLinks.thumbnail}
                    category={this.props.storedBooks.map(storeBook => storeBook.id === searchBook.id ? storeBook.shelf : 'none').filter(specificbook => specificbook!=="none")[0]}
                    onSelectCategory={(event) => this.AddBook(searchBook,event.target.value)}
                  />
                ) 
                : 'No Book Found'
               }
              </ol>
            </div>
          </div>
    )
    }
}

export default SearchBooks