import React, {Component} from 'react'
import {search} from '../BooksAPI'
import Book from './Book'
class  SearchBooks extends Component {
    state= {
        query: '',
        searchBook: []
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
                   <Book key={book.id} title={book.title} 
                      author={book.authors} 
                      image={book.imageLinks.thumbnail}
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