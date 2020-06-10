import React from "react";
import BookList from "../book-list";

export const HomePage = () => {
    return (
        < BookList books={[
            {
                id: 1,
                title: 'Грокаем Алгоритмы',
                author: 'Адитья Бхаргава'
            },
            {
                id: 2,
                title: 'Расска',
                author: 'Адитья Бхаргава'
            },
        ]} />
    )
}

export default HomePage;