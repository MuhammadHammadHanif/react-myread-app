import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SearchBooks from '../components/SearchBooks'
import ShelvesWrapper from '../components/ShelvesWrapper'
import * as BooksAPI from '../BooksAPI'
import '../App.css'

class AppRouter extends Component {
    state = {
        allBooks: [],
        showSearchPage: false
      }

      // for changing shelf type for book on dashboard
      changeBookShelfCategory = (id, category) => {
        const bookData = this.state.allBooks
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

      // deleting duplicate book from main state
      deleteBook = (book) => {
        const bookData = this.state.allBooks 
        // to remove if book is already present
        var newBookData = bookData.filter(data => data.id !== book.id)
        this.setState({
          allBooks:newBookData 
        })
      }
      // for storing book from search page in main state
      storingBook = (book,category) =>{
        // first delete the book if present
        this.deleteBook(book)
        // then set the shelf property on new book object coming from (search book page)
        book.shelf=category
        // then insert into state
        this.setState(prevState => ({
          allBooks: [...prevState.allBooks, book]
        }))
      }

      // to store data in state on component mount from BookApi with getall() method
      componentDidMount(){
        BooksAPI.getAll().then((allBooks) => {
          this.setState({allBooks})
        })
      }
    render(){
        return (
            <BrowserRouter>
                <div>
                <Switch>
                    <Route 
                        path="/" 
                        render={()=><ShelvesWrapper 
                        Books={this.state.allBooks} 
                        changeBookShelfCategory={this.changeBookShelfCategory} />} 
                        exact={true} 
                    />
                    <Route 
                        path="/search-books" 
                        render={() => <SearchBooks 
                        storedBooks = {this.state.allBooks}
                        storingBook={this.storingBook} />}  
                    />
                </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;
