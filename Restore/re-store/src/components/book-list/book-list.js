import React, { Component } from "react";
import BookListItem from "../book-list-item";
import './BookListCss.css';

class BookList extends Component  {

    render() {
       const { books } = this.props;

       return(
           <ul>
               {
                   books.map((book => {
                       return (
                           <li>
                               <BookListItem books={ book } />
                           </li>
                       )
                   }))
               }
           </ul>
       )
    }
}

export default BookList;