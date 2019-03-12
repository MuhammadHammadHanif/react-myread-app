import React, {Component} from 'react'
import {update} from '../BooksAPI'

class Book extends Component {
    state= {
        selectionValue: this.props.category
    }
    onSelectCategory = (event) => {
        const {value} = event.target;
        this.setState(() => ({selectionValue: value}))
        update(this.props, value)
        this.props.onSelectCategoryAction(this.props.id, value)
    }
    render(){
        return(
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.image}")` }}></div>
                    <div className="book-shelf-changer">
                    <select 
                     onChange={this.onSelectCategory} 
                     value={this.state.selectionValue}
                    >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{this.props.bookTitle}</div>
                <div className="book-authors">{this.props.author}</div>
                </div>
            </li>
    )
    }
}

export default Book