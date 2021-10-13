import {lazy, Suspense}  from "react";
import { Switch, Route } from "react-router-dom";

const HomePage = lazy(()=>import("./pages/HomePage"));
const SinglePostPage = lazy(()=>import("./pages/SinglePostPage"));
const PostListPage = lazy(()=>import("./pages/PostListPage"));
const ContactsPage = lazy(()=>import("./pages/ContactsPage"));
const NotFoundPage = lazy(()=>import("./pages/NotFoundPage"));

const Routes = ()=> {
    return (
        <Switch>
            <Suspense fallback={<p>Loading...</p>}>
            <Route path="/" exact>
                <HomePage title="Home Page" />
            </Route>
            <Route path="/post-list" 
                render={
                    ({match})=> <PostListPage title="Post List Page" />
                    } exact />
            <Route path="/post-list/:id">
                <SinglePostPage title="Single Post" />
            </Route>
            <Route path="/contacts" exact>
                <ContactsPage title="Contacts Page" />
            </Route> 
            <Route>
                <NotFoundPage title="Not Found Page" />
            </Route>   
            </Suspense>    
        </Switch>
    )
}

export default Routes;