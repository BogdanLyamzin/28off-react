import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SinglePostPage from "./pages/SinglePostPage";
import PostListPage from "./pages/PostListPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";

const Routes = ()=> {
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage title="Home Page" />
            </Route>
            <Route path="/post-list" 
                render={
                    ({match})=> <PostListPage title="Post List Page" />
                    } exact />
            <Route path="/post-list/:id" exact>
                <SinglePostPage title="Single Post" />
            </Route>
            <Route path="/contacts" exact>
                <ContactsPage title="Contacts Page" />
            </Route> 
            <Route>
                <NotFoundPage title="Not Found Page" />
            </Route>       
        </Switch>
    )
}

export default Routes;