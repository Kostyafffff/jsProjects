import React, { Component } from "react";
import BookListItem from "../book-list-item";
import './BookListCss.css';
import { connect } from 'react-redux';

class BookList extends Component  {

    render() {
       const { books } = this.props;

       return(
           <ul>
               {
                   books.map((book => {
                       return (
                           <li key={book.id}>
                               <BookListItem books={ book } />
                           </li>
                       )
                   }))
               }
           </ul>
       )
    }
}

const mapStateToProps = ( { books }) => {
    return { books };
}

export default connect()(BookList);