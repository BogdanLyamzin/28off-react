import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PageContainer from "../../shared/containers/PageContainer"

import { getPostById } from "../../shared/services/posts"

const SinglePostPage = ({title})=> {
    const [post, setPost] = useState(null);
    const {id} = useParams();
    useEffect(()=> {
        const fetchPost = async()=> {
            const {data} = await getPostById(id);
            setPost(data);
        }
        fetchPost()
    }, []);

    return (
        <PageContainer title={title}>
            {!post && <p>Loading...</p>}
            {post && (
                <>
                    <h4>{post.title}</h4>
                    <p>Author: {post.author}</p>
                    <p>{post.content}</p>
                </>
                )
            }
        </PageContainer>
    )
}

export default SinglePostPage