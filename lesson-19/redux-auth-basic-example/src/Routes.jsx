import {Switch, Route} from "react-router-dom"

import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import ContactsPage from "./pages/FavoriteBooksPage";

const Routes = ()=> {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/books">
                <BooksPage />
            </Route>
            <Route exact path="/favorite-books">
                <ContactsPage />
            </Route>
        </Switch>
    )
};

export default Routes;
