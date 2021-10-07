import {useState, useEffect} from "react";

import {getPosts} from "../../shared/services/posts";

import styles from "./PostList.module.scss";

import { initialState } from "./initialState";

const PostList = ()=>{
    const [state, setState] = useState(initialState);

    useEffect(()=> {
        const fetchPosts = async () => {
            try {
                const {data} = await getPosts(state.page, 3);
                setState({...state, loading: false, page: page + 1,  list: [...list, ...data]})
            }
            catch(error) {
                setState({...state, error, loading: false});
            }
        }
        
        const {list, page, loading} = state;
        if(loading || page === 1) {
            fetchPosts()
        }
    }, [state.loading]);

    const loadMore = ()=> setState({...state, loading: true})

    const {list, loading, error} = state;
    
    if(error) {
        return <p>Загрузка постов не удалась.</p>
    }

    const listElements = list.map(({id, title, author}) => (
        <li key={id} className={styles.item}>
            <h4>{title}</h4>
            <p>{author}</p>
        </li>
    ));

    return (
        <>
        <ul className={styles.list}>
            {listElements}
        </ul>
        {loading && <p>Loading</p>}
        <button onClick={loadMore} className={styles.loadMore}>Load more</button>
        </>
    )
}

// class PostList extends Component {

//     state = {
//         list: [],
//         page: 1,
//         loading: false,
//         error: null
//     }

//     async componentDidMount(){
//         this.setState({loading: true});
//         this.getPosts()
//     }


//     async componentDidUpdate(){
        
//         const {loading, page} = this.state;
//         if(loading && page > 1) {
//             this.getPosts()
//         }
//     }

//     getPosts = async() => {
//         try {
//             const {page} = this.state;
//             const {data} = await getPosts(page, 6);
//             this.setState(prevState => {
//                 return {
//                     list: [...prevState.list, ...data], 
//                     error: null, 
//                     loading: false,
//                     page: page + 1
//                 }
//             })
//         }
//         catch(error){
//             this.setState({error, loading: false});
//         }
//     }

//     loadMore = () => {
//         this.setState({loading: true})
//     }

//     render(){
//         const {list, loading, error} = this.state;
//         const {loadMore, hidePosts, postListRef, buttonRef} = this;
        
//         if(error) {
//             return <p>Загрузка постов не удалась.</p>
//         }

//         const listElements = list.map(({id, title, author}) => (
//             <li key={id} className={styles.item}>
//                 <h4>{title}</h4>
//                 <p>{author}</p>
//             </li>
//         ));

//         return (

//         )
//     }
// }

export default PostList;