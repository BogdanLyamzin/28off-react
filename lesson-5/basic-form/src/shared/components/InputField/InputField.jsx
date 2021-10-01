import { generate } from "shortid";

import styles from "./InputField.module.scss";

const InputField = (props) => {
    const data = { ...props, id: generate() };
    return (
        <div className={styles.formGroup}>
            {data.label && <label htmlFor={data.id} className={styles.label}>{data.label }</label>}
            <input {...data} />
        </div>        
    )
};

export default InputField;