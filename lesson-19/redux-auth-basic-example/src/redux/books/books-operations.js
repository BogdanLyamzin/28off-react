
import api from "../../shared/services/books";
import actions from "./books-actions";

export const getBooks = ()=> {
    const actionFunc = async(dispatch) => {
        dispatch(actions.getBooksRequest());

        try {
            const data = await api.fetchAllBooks();
            dispatch(actions.getBooksSuccess(data));
        } catch (error) {
            dispatch(actions.getBooksError(error))
        }
    };

    return actionFunc;
}

export const addBook = (data)=> {
    const actionFunc = async(dispatch, getStore) => {
        const {books} = getStore();
        const result = books.items.find(item => item.title === data.title);
        if(result){

        }
        dispatch(actions.addBookRequest());
        try {
            const newBook = await api.fetchAddBook(data);
            dispatch(actions.addBookSuccess(newBook));
        } catch (error) {
            dispatch(actions.addBookError(error));
        }
    };

    return actionFunc;
}

export const removeBook = (id) => {
    const actionFunc = async(dispatch) => {
        dispatch(actions.removeBookRequest());
        try {
            const removeBook = await api.fetchRemoveBook(id);
            dispatch(actions.removeBookSuccess(id));
        } catch (error) {
            dispatch(actions.removeBookError(error));
        }
    }

    return actionFunc;
}

export default {
    getBooks,
    addBook,
    removeBook
}