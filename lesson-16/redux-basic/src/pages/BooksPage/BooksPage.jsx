import {useState} from "react";
import {nanoid} from "nanoid";

import FormAddBook from "../../client/FormAddBook";
import BookList from "../../client/BooktList";

import styles from "./BooksPage.module.scss";

const BooksPage = ()=> {
    const [books, setBooks] = useState([]);

    const addBook = (data)=> {
        const newBook = {...data, id: nanoid()};
        setBooks([...books, newBook]);
    }

    return (
        <div className={styles.container}>
            <div>
                <h3>Добавить книгу</h3>
                <FormAddBook onSubmit={addBook} />
            </div>
            <div>
                <BookList list={books} title="Список книг" />
            </div>
        </div>
    )
};

export default BooksPage;
