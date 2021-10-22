import { useSelector, useDispatch } from "react-redux";

import FormAddBook from "../../client/FormAddBook";
import BookList from "../../client/BookList";

import { addToBooks, removeFromBooks } from "../../redux/books/books-actions";
import { getAllBooks } from "../../redux/books/books-selectors";

import styles from "./BooksPage.module.scss";

const BooksPage = ()=> {
    const books = useSelector(getAllBooks);
    const dispatch = useDispatch();

    const addBook = (data)=> {
        const action = addToBooks(data);
        dispatch(action);
    }

    const removeBook = (id) => {
        dispatch(removeFromBooks(id));
    }

    return (
        <div className={styles.container}>
            <div>
                <h3>Добавить книгу</h3>
                <FormAddBook onSubmit={addBook} />
            </div>
            <div>
                <BookList list={books} onDelete={removeBook} title="Список книг" />
            </div>
        </div>
    )
};

export default BooksPage;
