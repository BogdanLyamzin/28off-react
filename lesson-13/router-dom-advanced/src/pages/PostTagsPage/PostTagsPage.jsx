import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { getPostById } from "../../shared/services/posts";

const PostTagsPage = ()=>{
    const [tags, setTags] = useState([]);
    const [error, setError] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        const fetchPost = async()=> {
            try {
                const {data} = await getPostById(id);
                const result = data.tags.split(", ");
                setTags(result)
            }
            catch(error){
                setError(error)
            }
        };
        fetchPost()
    }, [])

    if(error){
        return <p>Не удалось загрузить теги</p>
    }

    const tagElements = tags.map(item => <li>{item}</li>)

    return (
        <ul>
            {tagElements}
        </ul>
    )
};

export default PostTagsPage;