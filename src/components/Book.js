import React, {Component} from 'react'

class  Book extends Component {
    state= {
        // check if category is undefined then return none
        selectionValue:  this.props.category === undefined ? 'none' : this.props.category
    }
    // componentWillReceiveProps(prevProps,nextProps){
    //     if(prevProps !== nextProps)
    //     {
    //         this.props.storedBooks.filter(storeBook => storeBook.id === this.props.id ?
    //              this.setState({selectionValue:storeBook.shelf})
    //              : this.setState({selectionValue:this.props.category === undefined ? 'none' : this.props.category}) )
    //     }
        
    // }

    render(){
       
        return(
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.image}")` }}></div>
                    <div className="book-shelf-changer">
                    <select 
                        onChange={this.props.onSelectCategory} 
                        value={this.state.selectionValue}
                    >
                        <option value="move">Move to...</option>
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