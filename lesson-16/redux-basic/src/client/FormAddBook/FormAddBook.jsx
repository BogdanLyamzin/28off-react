import { useState } from "react";
import { nanoid } from "nanoid";

import styles from "./FormAddBook.module.scss";

import {initialState} from "./initialState";

const FormAddBook = ({onSubmit})=> {
    const [data, setData] = useState(initialState);

    const handleChange = ({target}) => {

        const {type, name, value, checked} = target;
        const newValue = (type === "checkbox") ? checked : value;
        setData({
                ...data,
                [name]: newValue
            });
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        onSubmit(data);
        setData(initialState);
    }

    const nameId = nanoid();
    const authorId = nanoid();
    const favoriteId = nanoid();

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor={nameId} className={styles.label}></label>
                <input name="name" onChange={handleChange} type="text" value={data.name} placeholder="Название книги" id={nameId} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor={authorId} className={styles.label}>Автор</label>
                <input name="author" onChange={handleChange} type="text" value={data.author} placeholder="Автор книги" id={authorId} />
            </div>
            <div className={styles.formGroupInline}>
                <label htmlFor={favoriteId} className={styles.labelInline}>Любимая</label>
                <input name="favorite" onChange={handleChange} type="checkbox" checked={data.favorite} className={styles.checkbox} id={favoriteId} />
            </div>
            <button>Добвить книгу</button>
        </form>
    )
};

export default FormAddBook;
