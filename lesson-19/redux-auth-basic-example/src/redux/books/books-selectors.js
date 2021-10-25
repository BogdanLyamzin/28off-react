export const getAllBooks = store => store.books;

export const getFavoriteBooks = ({books}) => {
    const favoriteBooks = books.items.filter(({favorite}) =>
        favorite);
    return favoriteBooks;
}