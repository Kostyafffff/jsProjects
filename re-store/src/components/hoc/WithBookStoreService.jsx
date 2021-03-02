import React from 'react';
import { BookStoreServiceConsumer } from '../book-store-service-context';

export const WithBookStoreService = () => (Wrapped) => {
    return (props) => {
        return (
        <BookStoreServiceConsumer>
            {
                (bookStoreService) => {
                    return (<Wrapped {...props}
                                     bookStoreService={bookStoreService} />)
                }
            }
        </BookStoreServiceConsumer>
        );
    }
}
