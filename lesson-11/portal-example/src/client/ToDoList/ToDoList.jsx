import { Component, useState, useEffect } from "react";

import Modal from "../../shared/Modal/Modal";
import CaseList from "./CaseList";
import FormAddCase from "./FormAddCase";

import { generate } from "shortid";

import styles from "./ToDoList.module.scss";

const ToDoList = () => {
const [list, setList] = useState([])
const [isModalOpen, setIsModalOpen] = useState(false)
const [removeId, setRemoveId] = useState(null)

useEffect(()=> {
    const listArray = JSON.parse(localStorage.getItem("toDoList"));
    if(listArray?.length && listArray.length) {
       setList(listArray)
    }
    // localStorage.setItem('ToDoList', JSON.stringify(list))
  
}, [])

const addCase = (data) => {
    const id = generate()
    const newData = {...data, id}
    const newList = [...list, newData]
    setList(newList)
}

const removeCase = () => {
    const newList = list.filter(item => item.id !== removeId)
    setList(newList)
}

const showModal = (id) => {
    setIsModalOpen(true)
    setRemoveId(id)
}

const closeModal = () => {
    setIsModalOpen(false)
}

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

export default ToDoList;
