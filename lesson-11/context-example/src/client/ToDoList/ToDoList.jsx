import { Component } from "react";

import Modal from "../../shared/Modal/Modal";
import CaseList from "./CaseList";
import FormAddCase from "./FormAddCase";

import { generate } from "shortid";

import styles from "./ToDoList.module.scss";

class ToDoList extends Component {
    state = {
        list: [],
        isModalOpen: false,
        removeId: null
    }

    componentDidMount() {
        const list = JSON.parse(localStorage.getItem("toDoList"));

        if (list?.length) {
            this.setState({
                list
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevState.list) !== JSON.stringify(this.state.list)) {
            // console.log(JSON.stringify(localStorage.getItem("toDoList")))
            localStorage.setItem("toDoList", JSON.stringify(this.state.list));
            // console.log(JSON.stringify(localStorage.getItem("toDoList")))
        }
    }

    addCase = (data) => {
        this.setState(({ list }) => {
            const { removeCase } = this;
            const id = generate();
            // const newCase = { ...data, id, onRemove: () => removeCase(id) };
            const idx = list.length;
            const newCase = { ...data, id };
            const newList = list.map(item => ({ ...item }));
            newList.push(newCase);
            // const newList = [...list.map(item => ({ ...item })), newCase];
            return {
                list: newList
                // list: [...list, newCase]
            }
        })
    }

    showModal = (id) => {
        this.setState({
            isModalOpen: true,
            removeId: id
        });
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
            removeId: null
        });        
    }

    removeCase = () => {
        this.setState(({ list }) => {
            const { removeId } = this.state;
            const newList = list.map(item => ({ ...item }));
            newList.splice(removeId, 1);
            return {
                list: newList,
                isModalOpen: false
            }
        });
    }

    render() {
        const { addCase, removeCase, showModal, closeModal } = this;
        const { list, isModalOpen } = this.state;
        const items = list.map(item => ({...item, onRemove: ()=>showModal(item.id)}))
        
        return (
            <div className={styles.container}>                
                <FormAddCase onSubmit={addCase} />
                <CaseList items={items} />
                {isModalOpen && (
                    <Modal closeModal={closeModal}>
                        <p>Вы точно хотите удалить дело?</p>
                        <button onClick={removeCase}>Да</button>
                        <button onClick={closeModal}>Нет</button>
                    </Modal>
                )}
            </div>
        )        
    }
};

export default ToDoList;