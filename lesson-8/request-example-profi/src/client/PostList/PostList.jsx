import {Component} from "react";

import { getPosts } from "../../shared/services/posts";

import styles from "./PostList.module.scss";

class PostList extends Component {

    state = {
        list: [],
        page: 1,
        loading: false,
        error: null
    }

    async componentDidMount(){
        this.setState({loading: true});
        this.getPosts()
    }

    async componentDidUpdate(){
        const {loading, page} = this.state;
        if(loading && page > 1) {
            this.getPosts()
        }
    }

    getPosts = async() => {
        try {
            const {page} = this.state;
            const {data} = await getPosts(page, 3);
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

    hidePosts = ()=> {
        this.setState(({list}) => {
            const {length} = list;
            return {
                list: list.slice(0, length - 3)
            }
        })
    }

    render(){
        const {list, loading, error} = this.state;
        const {loadMore, hidePosts} = this;
        if(error) {
            return <p>Загрузка постов не удалась.</p>
        }
        if(loading) {
            return <p>Загрузка постов....</p>
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
            <button onClick={loadMore} className={styles.loadMore}>Load more</button>
            <button onClick={hidePosts} className={styles.loadMore}>Hide posts</button>
            </>
        )
    }
}

export default PostList;