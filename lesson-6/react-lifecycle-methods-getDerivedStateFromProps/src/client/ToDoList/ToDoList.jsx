import { Component } from "react";

import CaseList from "./CaseList";
import FormAddCase from "./FormAddCase";

import { generate } from "shortid";

import styles from "./ToDoList.module.scss";

class ToDoList extends Component {
    state = {
        list: []
    }

    static getDerivedStateFromProps({initialItems}, {list}) {
        if (initialItems.length && !list.length) {
            return {
                list: initialItems
            }
        }
        
        return null;
    }

    addCase = (data) => {
        this.setState(({ list }) => {
            const { removeCase } = this;
            const id = generate();
            // const newCase = { ...data, id, onRemove: () => removeCase(id) };
            const idx = list.length;
            console.log(idx)
            const newCase = { ...data, id, onRemove: ()=> removeCase(idx) };
            const newList = list.map(item => ({ ...item }));
            newList.push(newCase);
            // const newList = [...list.map(item => ({ ...item })), newCase];
            return {
                list: newList
                // list: [...list, newCase]
            }
        })
    }

    // removeCase = (id) => {
    //     this.setState(({ list }) => {
    //         // const newList = list.filter(item => item.id !== id);
    //         const newList = list.map(item => ({ ...item }));
    //         const idx = newList.findIndex(item => item.id === id);
    //         newList.splice(idx, 1);
    //         return {
    //             list: newList
    //         }
    //     });
    // }

    removeCase = (idx) => {
        this.setState(({ list }) => {
            const newList = list.map(item => ({ ...item }));
            newList.splice(idx, 1);
            return {
                list: newList
            }
        })
    }

    render() {
        const { addCase, removeCase } = this;
        const { list } = this.state;
        // const items = list.map(item => ({...item, onRemove: ()=> removeCase(item.id)}))
        return (
            <div className={styles.container}>                
                <FormAddCase onSubmit={addCase} />
                <CaseList items={list}  />
            </div>
        )        
    }
};

export default ToDoList;