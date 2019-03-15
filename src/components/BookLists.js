import React, {Component} from 'react'
import Book from './Book'
import {update} from '../BooksAPI'

class BookLists extends Component {
    
    // for updateing book shelf category with BOOKAPI update method
    onSelectCategory = (event) => {
        const {value} = event.target;
        this.setState(() => ({selectionValue: value}))
        // updating the dashboard book 
        update(this.props, value)
        // changing main state shelf type as well for the selected book
        this.props.changeBookShelfCategory(this.props.id, value)
    }
    render(){
        return(
            <Book {...this.props} onSelectCategory={this.onSelectCategory}/>
        )
    }
}

export default BookLists