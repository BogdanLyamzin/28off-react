import { Component } from "react";

import CaseList from "./CaseList";
import FormAddCase from "./FormAddCase";

import { generate } from "shortid";

import styles from "./ToDoList.module.scss";

import { initialList } from "./initialList";

class ToDoList extends Component {
    state = {
        list: []
    }

    addCase = (data) => {
        this.setState(({ list }) => {
            const newCase = { ...data, id: generate() };
            // const { removeCase } = this;
            // newCase.onDelete = () => removeCase(newCase.id);
            const newList = [...list, newCase];
            return {
                list: newList
            }
        })
    }

    removeCase = (idx) => {
        this.setState(({ list }) => {
            const newList = list.map(item => ({ ...item }));
            newList.splice(idx, 1);
            return {
                list: newList
            }
        })
    }

    // removeCase = (id) => {
    //     this.setState(({ list }) => {
    //         const newList = list.map(item => ({ ...item }));
    //         const idx = newList.findIndex(item => item.id === id);
    //         newList.splice(idx, 1);
    //         const data = newList.filter(item => item.id !== id);
    //         return {
    //             list: newList
    //             list: data
    //         }
    //     })
    // }    

    render() {
        const { list } = this.state;
        const { addCase, removeCase } = this;
        const items = list.map((item, index) => ({ ...item, onDelete: () => removeCase(index) }));

        return (
            <>
                <CaseList items={items} />
                <FormAddCase onSubmit={addCase} />
            </>
        )        
    }
};

export default ToDoList;