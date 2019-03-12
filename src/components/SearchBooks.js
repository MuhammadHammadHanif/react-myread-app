import React, {Component} from 'react'
import {search} from '../BooksAPI'
import Book from './Book'
class  SearchBooks extends Component {
    state= {
        query: '',
        searchBook: [],
        selectedCategory: ''
      }
    
    onChange = (event) => {
      const {name, value} = event.target
      this.setState(() => ({
        [name]: value
      }))
      search(this.state.query).then((searchBook) => {
        this.setState({searchBook})
      })
    }
    componentDidMount(){
      search(this.state.query).then((searchBook) => {
        this.setState({searchBook})
      })
    }
    onAddBook = (event,book,category) => {
      const {value}= event.target
      this.setState(() => ({
        selectedCategory: value
      }))
      this.props.onAddBook(book,category)
    }
    render(){
      return(
        <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() =>this.props.showSearchPage(false)}>Close</button>
              <div className="search-books-input-wrapper">
                <input 
                 type="text" 
                 placeholder="Search by title or author"
                 value={this.state.query}
                 name="query"
                 onChange= {this.onChange}
                />
              </div>
            </div>
            <div className="search-books-results">
                
              <ol className="books-grid">
               { 
                this.state.searchBook !== undefined 
                ? this.state.searchBook.map(book => 
                  //  <Book key={book.id} title={book.title} 
                  //     author={book.authors} 
                  //     image={book.imageLinks.thumbnail}
                  //   />
                  <li key={book.id}>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                    <select 
                     value={this.state.selectedCategory}
                     onChange={(event) => this.onAddBook(event,book,event.target.value)} 
                    >
                        <option value="move">Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                </div>
            </li>
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