import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onBookShelfChange: PropTypes.func.isRequired
    };
    changebookShelf = e =>
        this.props.onBookShelfChange(this.props.book, e.target.value);
    render() {
        //Error handling if author or thumbnail returned is empty or null
        const { book} = this.props;
        // add fallbacks for missing cover images and title
        const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : '';
        const title = book.title ? book.title : 'No title available';
        return (
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})`  }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={this.changebookShelf} value={book.shelf}>
                                <option value="none" disabled>Move to...</option>
                                 <option value="currentlyReading">Currently Reading</option>
                                 <option value="wantToRead">need to Read</option>
                                 <option value="read">Readed</option>
								  <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">
                        {book.authors}
                    </div>
                </div>
        );
    }
}

export default Book;
