import React, { Component } from "react";
import BookListItem from "../book-list-item";
import './BookListCss.css';
import { connect } from 'react-redux';
import withBookStoreService from "../hoc";

class BookList extends Component  {

    componentDidMount() {

    }

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

export default withBookStoreService(connect(mapStateToProps))(BookList);