import {useState, useEffect} from "react";
import {Link, useHistory, useLocation} from "react-router-dom";

import PostSearchForm from "./PostSearchForm/PostSearchForm";

import { searchPosts } from "../../shared/services/posts";

import styles from "./PostList.module.scss";

import { initialState } from "./initialState";

const PostList = ()=> {
    const [state, setState] = useState(initialState);
    const history = useHistory();
    const location = useLocation();

    useEffect(()=>{
        const fetchPosts = async()=>{
            try {
                const searchParams = new URLSearchParams(location.search)
                const searchText = searchParams.get("searchText")
                const {data} = await searchPosts(searchText);
                console.log(data);
                setState(prevState => ({
                    ...prevState, 
                    list: data, 
                    error: null, 
                    loading: false,
                }))
            }
            catch(error){
                setState(prevState => ({
                    ...prevState,
                    error, 
                    loading: false
                }));
            }
        }
        if(location.search){
            setState(prevState => ({...prevState, loading: true}));
            fetchPosts()
        }

    }, [location.search]);

    const onSubmit = ({searchText})=> {
        history.push({
            pathname: location.pathname,
            search: `searchText=${searchText}`
        });
    }

    const {list, loading, error} = state;

    if(error) {
        return <p>Загрузка постов не удалась.</p>
    }
    if(loading) {
        return <p>Загрузка постов....</p>
    }

    const listElements = list.map(({id, title, author}) => (
        <Link to={{
            pathname: `/post-list/${id}`,
            state: {
                from: location
            }
        }}>
            <li key={id} className={styles.item}>
                <h4>{title}</h4>
                <p>{author}</p>
            </li>            
        </Link>
    ));

    return (
        <>
        <PostSearchForm onSubmit={onSubmit} />
        <ul className={styles.list}>
            {listElements}
        </ul>
        
        </>
    )
}


export default PostList;