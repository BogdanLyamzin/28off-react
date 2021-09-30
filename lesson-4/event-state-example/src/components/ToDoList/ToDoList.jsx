import { Component } from "react";

import styles from "./ToDoList.module.scss";

import { toDoListItems } from "../../data";

class ToDoList extends Component {
    static defaultProps = {
        items: []
    }

    state = {
        items: toDoListItems
    }

    handleRemove = (e, idx) => {
        e.preventDefault();
        this.setState(({ items }) => {
            const newItems = items.map(item => ({ ...item }));
            // newItems.splice(idx, 1);
            const result = newItems.filter((_, index) => index !== idx);
            return {
                items: result
                // items: newItems
            }
        })
    }

    render() {
        const { items } = this.state;
        const { handleRemove } = this;

        const itemElements = items.map((item, index) => (
            <li key={item.id}>
                {item.name}
                <span className={styles.close} onClick={(e)=>handleRemove(e, index)}>X</span>
            </li>
        ))
        return (
            <ol>
                {itemElements}
            </ol>
        )
    }
}

export default ToDoList;