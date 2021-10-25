import { createAction } from "@reduxjs/toolkit";

const getBooksRequest = createAction("books/getRequest");
const getBooksSuccess = createAction("books/getSuccess");
const getBooksError = createAction("books/getError");

const addBookRequest = createAction("books/addRequest");
const addBookSuccess = createAction("books/addSuccess");
const addBookError = createAction("books/addError");

const removeBookRequest = createAction("books/removeRequest");
const removeBookSuccess = createAction("books/removeSuccess");
const removeBookError = createAction("books/removeError");

export default {
    getBooksRequest,
    getBooksSuccess,
    getBooksError,
    addBookRequest,
    addBookSuccess,
    addBookError,
    removeBookRequest,
    removeBookSuccess,
    removeBookError
}