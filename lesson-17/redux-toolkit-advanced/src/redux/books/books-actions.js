import { createAction } from "@reduxjs/toolkit";

export const addToBooks = createAction("books/add");
export const removeFromBooks = createAction("books/remove");
