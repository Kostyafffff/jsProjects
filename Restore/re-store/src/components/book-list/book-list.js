import React, { Component } from "react";
import BookListItem from "../book-list-item";
import './BookListCss.css';
import { connect } from 'react-redux';
import withBookStoreService from "../hoc";
import booksLoaded from "../../actions";
import { bindActionCreators } from "redux";

class BookList extends Component  {

    componentDidMount() {
        const { bookStoreService } = this.props;
        const data = bookStoreService.getBooks();

        this.props.booksLoaded(data);
    }

    returnBooks = (books) => {
        books.map((book => {
            return (
                <li key={book.id}>
                    <BookListItem books={ book } />
                </li>
            )
        }))
    }

    render() {
       const { books } = this.props;
       return(
           <ul>
               {
                   this.returnBooks(books)
               }
           </ul>
       )
    }
}

const mapStateToProps = ( { books }) => {
    return { books };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        booksLoaded,
    }, dispatch)
}

export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));