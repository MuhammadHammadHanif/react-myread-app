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
      console.log(this.state.searchBook);
      
      return(
        <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() =>this.props.showSearchPage(false)}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
                   <Book title={book.title} 
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