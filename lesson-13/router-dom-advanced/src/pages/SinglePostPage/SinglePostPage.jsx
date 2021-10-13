import { useState, useEffect } from "react";
import { Link, Route, useParams, useHistory, useLocation } from "react-router-dom";

import PostTagsPage from "../PostTagsPage";

import PageContainer from "../../shared/containers/PageContainer"

import { getPostById } from "../../shared/services/posts"

const SinglePostPage = ({title})=> {
    const [post, setPost] = useState(null);
    const {id} = useParams();
    const history = useHistory();
    const location = useLocation();

    useEffect(()=> {
        const fetchPost = async()=> {
            const {data} = await getPostById(id);
            setPost(data);
        }
        fetchPost()
    }, []);

    // const handleBack = ()=> history.goBack();
    const handleBack = ()=> {
        if(location?.state?.from) {
            const prevLocation = location.state.from;
            history.push(prevLocation);
        }
        else {
            history.push("/post-list")
        }
    } 
    return (
        <PageContainer title={title}>
            {!post && <p>Loading...</p>}
            {post && (
                <>
                    <h4>{post.title}</h4>
                    <p>Author: {post.author}</p>
                    <p>{post.content}</p>
                    <button onClick={handleBack}>Go Back</button>
                    <Link to={`/post-list/${id}/tags`}>
                        Посмотреть теги
                    </Link>
                </>
                )
            }
            <Route path="/post-list/:id/tags">
                <PostTagsPage />
            </Route>
        </PageContainer>
    )
}

export default SinglePostPage