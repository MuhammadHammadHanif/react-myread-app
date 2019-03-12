import React, {Component} from 'react'
import Book from './Book'
import {search} from '../BooksAPI'
import {Link} from 'react-router-dom'
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
              <Link to="/">
                  <button className="close-search">Close</button>
              </Link>
              
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
                  <Book 
                    id={book.id}
                    key={book.id}
                    bookTitle={book.title} 
                    author={book.authors} 
                    image={book.imageLinks.thumbnail}
                    category={book.shelf}
                    onSelectCategory={(event) => this.onAddBook(event,book,event.target.value)}
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