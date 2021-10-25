import { useSelector } from "react-redux";

import BooksList from "../../client/BookList";

import { getFavoriteBooks } from "../../redux/books/books-selectors";

const FavoriteBooksPage = ()=> {

    const favoriteBooks = useSelector(getFavoriteBooks);

    return (
        <div>
            <h2>Книг: </h2>
            <BooksList list={favoriteBooks} title="Любимые книги" />
        </div>
    )
}

export default FavoriteBooksPage;
