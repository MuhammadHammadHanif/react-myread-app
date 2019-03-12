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
      onAddBook = (book,category) =>{
        book.shelf=category
        this.setState(prevState => ({
          allBooks: [...prevState.allBooks, book]
        }))
      }
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
                        showSearchPage={this.onShowSearchPage} 
                        Books={this.state.allBooks} 
                        onSelectCategoryAction={this.onSelectCategoryAction} />} 
                        exact={true} 
                    />
                    <Route 
                        path="/search-books" 
                        render={() => <SearchBooks 
                        showSearchPage={this.onShowSearchPage} 
                        books = {this.state.allBooks}
                        onAddBook={this.onAddBook} />}  
                    />
                </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;
