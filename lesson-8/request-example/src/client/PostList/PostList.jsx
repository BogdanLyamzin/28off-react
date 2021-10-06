import {Component} from "react";
import axios from "axios";

import styles from "./PostList.module.scss";

class PostList extends Component {

    state = {
        list: [],
        loading: false,
        error: null
    }

    componentDidMount(){
        this.setState({loading: true})
        setTimeout(()=> {
            axios.get("http://localhost:4000/posts")
            .then(({data}) => {
                this.setState({list: data, error: null, loading: false})
            })
            .catch(error => this.setState({error, loading: false}))
            // .finally(()=> this.setState({loading: false}))  
        }, 3000)
    }

    render(){
        const {list, loading, error} = this.state;
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
            <ul className={styles.list}>
                {listElements}
            </ul>
        )
    }
}

export default PostList;