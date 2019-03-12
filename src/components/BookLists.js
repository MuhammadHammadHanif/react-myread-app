import React, {Component} from 'react'
import Book from './Book'
import {update} from '../BooksAPI'

class BookLists extends Component {
    
    onSelectCategory = (event) => {
        const {value} = event.target;
        this.setState(() => ({selectionValue: value}))
        update(this.props, value)
        this.props.onSelectCategoryAction(this.props.id, value)
    }
    render(){
        return(
            <Book {...this.props} onSelectCategory={this.onSelectCategory}/>
        )
    }
}

export default BookLists