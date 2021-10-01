import { Component } from "react";

import styles from "./FormAddCase.module.scss";

import {initialState} from "./initialState"

import {createFields} from "./fields"

class FormAddCase extends Component {
    state = {
        ...initialState
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            ...initialState
        });
    }

    handleChange = ({target}) => {
        const { value, name, checked, type } = target;
        const newValue = (type === "checkbox" || type === "radio") ? checked : value;
        this.setState({
            [name]: newValue
        });
    }

    render() {
        const { handleSubmit, handleChange } = this;

        const fields = createFields(handleChange, this.state);
        const { text, description, urgency } = fields;

        return (
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    {text.label && <label htmlFor={text.id} className={styles.label}>{text.label }</label>}
                    <input {...text} />
                </div>
                <div className={styles.formGroup}>
                    {description.label && <label htmlFor={description.id} className={styles.label}>{description.label }</label>}
                    <input {...description} />
                </div>
                <div className={styles.formGroup}>
                    {urgency.label && <label htmlFor={urgency.id} className={styles.inlineLabel}>{urgency.label }</label>}
                    <input {...urgency} />
                </div>       
                <button type="submit">Добавить дело</button>
            </form>
        )
    }
};

export default FormAddCase;