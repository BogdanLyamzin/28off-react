import {Component, createRef} from "react";

import { getPosts } from "../../shared/services/posts";

import styles from "./PostList.module.scss";

class PostList extends Component {

    state = {
        list: [],
        page: 1,
        loading: false,
        error: null
    }

    postListRef = createRef()

    async componentDidMount(){
        this.setState({loading: true});
        this.getPosts()
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        if(prevState.list.length < this.state.list.length) {
            // const current = document.getElementById("post-list")
            // return current.scrollHeight
            const {current} = this.postListRef;
            return current.scrollHeight;
        }
        return null;
    }

    async componentDidUpdate(_, __, snapshot){
        
        const {loading, page} = this.state;
        if(loading && page > 1) {
            this.getPosts()
        }
        if(snapshot){
            window.scrollTo({
                top: snapshot,
                behavior: "smooth"
            });
        }
    }

    getPosts = async() => {
        try {
            const {page} = this.state;
            const {data} = await getPosts(page, 6);
            this.setState(prevState => {
                return {
                    list: [...prevState.list, ...data], 
                    error: null, 
                    loading: false,
                    page: page + 1
                }
            })
        }
        catch(error){
            this.setState({error, loading: false});
        }
    }

    loadMore = () => {
        this.setState({loading: true})
    }

    render(){
        const {list, loading, error} = this.state;
        const {loadMore, hidePosts, postListRef, buttonRef} = this;
        
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
            <ul ref={postListRef} id="post-list" className={styles.list}>
                {listElements}
            </ul>
            {loading && <p>Load more</p>}
            <button onClick={loadMore} className={styles.loadMore}>Load more</button>
            </>
        )
    }
}

export default PostList;