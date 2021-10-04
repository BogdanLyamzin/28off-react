import { generate } from "shortid";

import styles from "./InputField.module.scss";

const InputField = (props) => {
    const data = { ...props, id: generate() };
    const labelClassName = (props.type === "checkbox") ? styles.inlineLabel : styles.label;
    return (
        <div className={styles.formGroup}>
            {data.label && <label htmlFor={data.id} className={labelClassName}>{data.label }</label>}
            <input {...data} className={styles.input} />
        </div>
    )
};

export default InputField;