import {generate} from "shortid";

import styles from "./InputField.module.scss";

const InputField = ({label, ...field})=>{
    const id = generate();

    return (
        <div className="form-group">
            {label && <label htmlFor={id}></label>}
            <input 
                {...field}
                id={id}
                />
        </div>
    )
};

export default InputField;