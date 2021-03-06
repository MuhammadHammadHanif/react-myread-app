import React, {Component} from 'react'
import Book from './Book'
import {search, update} from '../BooksAPI'
import {Link} from 'react-router-dom'
class  SearchBooks extends Component {
    state= {
        query: '',
        searchBooks: [],
        error: 'Search Term Not Present / No Books'
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
        // to check if search keyword is present or if textbox is empty
        value === "" || searchBooks.error ? this.setState({error: 'Search Term Not Present / No Books', searchBooks: ''}) 
        : this.setState({searchBooks, error:''})
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
      // destructing
      const {query, error, searchBooks} = this.state;
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
                 value={query}
                 name="query"
                 onChange= {this.onChangeValue}
                 autoComplete="off"
                />
              </div>
            </div>
            <div className="search-books-results">
            {(searchBooks.length > 0 && query !== "") && <p style={{paddingLeft: "35px"}}>Books Found: <strong>{searchBooks.length}</strong></p>}
            {/* Checking for error or empty if yes showing Error else show search books */}
            {
              error || query === ""
              ? 
              <p style={{textAlign: "center"}}>{this.state.error}</p> 
              :
              <ol className="books-grid">
               { 
                searchBooks.map(searchBook => 
                  <Book 
                    id={searchBook.id}
                    key={searchBook.id}
                    bookTitle={searchBook.title ? searchBook.title : ''} 
                    author={searchBook.authors ? searchBook.authors : ''} 
                    image={searchBook.imageLinks ? searchBook.imageLinks.thumbnail : ''}
                    category={this.props.storedBooks.map(storeBook => storeBook.id === searchBook.id ? storeBook.shelf : 'none').filter(specificbook => specificbook!=="none")[0]}
                    onSelectCategory={(event) => this.AddBook(searchBook,event.target.value)}
                    {...this.props}
                  />
                ) 
               }
              </ol>
            }
              
            </div>
          </div>
    )
    }
}

export default SearchBooks