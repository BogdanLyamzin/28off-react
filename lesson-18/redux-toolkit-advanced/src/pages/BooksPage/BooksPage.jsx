import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import FormAddBook from "../../client/FormAddBook";
import BookList from "../../client/BookList";

import operations from "../../redux/books/books-operations";
// import { addToBooks, removeFromBooks } from "../../redux/books/books-actions";
import { getAllBooks } from "../../redux/books/books-selectors";

import styles from "./BooksPage.module.scss";

const BooksPage = ()=> {
    const {items, loading, error} = useSelector(getAllBooks);
    const dispatch = useDispatch();

    useEffect(()=> {
        const actionFunc = operations.getBooks();
        dispatch(actionFunc);
    }, [dispatch]);

    const addBook = (data)=> {
        dispatch(operations.addBook(data))
    }

    const removeBook = (id) => {
        dispatch(operations.removeBook(id));
    }

    return (
        <div className={styles.container}>
            <div>
                <h3>Добавить книгу</h3>
                <FormAddBook onSubmit={addBook} />
            </div>
            <div>
                {loading && <p>Loading ....</p>}
                {error && <p>Sorry, try later</p>}
                {!loading && !error && <BookList list={items} onDelete={removeBook} title="Список книг" />}
            </div>
        </div>
    )
};

export default BooksPage;
