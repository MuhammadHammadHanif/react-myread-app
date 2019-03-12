import React from 'react'
import SearchBooks from './components/SearchBooks'
import ShelvesWrapper from './components/ShelvesWrapper'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    allBooks: [],
    showSearchPage: false
  }

  onShowSearchPage = (showSearchPage) => {
    this.setState({ showSearchPage })
  }
  onSelectCategoryAction = (id, category) => {
    let bookData = this.state.allBooks
     bookData.map((book) => {
      if(book.id === id)
      {
       book.shelf=category
       this.setState({
        allBooks:bookData 
      })
      }
    }
    )
  }
  componentDidMount(){
    BooksAPI.getAll().then((allBooks) => {
      this.setState({allBooks})
    })
  }
  render() {
    console.log(this.state.allBooks)
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks showSearchPage={this.onShowSearchPage} />
        ) : (
          <ShelvesWrapper 
            showSearchPage={this.onShowSearchPage} 
            Books={this.state.allBooks} 
            onSelectCategoryAction={this.onSelectCategoryAction} />
        )}
      </div>
    )
  }
}

export default BooksApp
