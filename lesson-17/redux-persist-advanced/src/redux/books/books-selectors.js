export const getAllBooks = store => store.books;

export const getFavoriteBooks = store => {
    const favoriteBooks = store.books.filter(({favorite}) =>
        favorite);
    return favoriteBooks;
}