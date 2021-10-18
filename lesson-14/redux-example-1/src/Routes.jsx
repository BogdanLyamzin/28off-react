import {Switch, Route} from "react-router-dom"

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactsPage from "./pages/ContactsPage";

const Routes = ()=> {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/products">
                <ProductsPage />
            </Route>
            <Route exact path="/contacts">
                <ContactsPage />
            </Route>
        </Switch>
    )
};

export default Routes;