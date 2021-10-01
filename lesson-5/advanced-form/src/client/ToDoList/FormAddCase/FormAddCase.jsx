import { Component } from "react";

import InputField from "../../../shared/components/InputField";

import styles from "./FormAddCase.module.scss";

import {initialState} from "./initialState"

import {list} from "./fields"

class FormAddCase extends Component {
    state = {
        ...initialState
    }

    handleSubmit = (e) => {
        e.preventDefault();
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

        // const fields = createFields(handleChange, this.state);
        const { text, description, urgency } = this.state;

        return (
            <form onSubmit={handleSubmit}>
                <InputField {...list.tex
                    t} value={text} onChange={handleChange} />
                <InputField {...list.description} value={description} onChange={handleChange} />
                <InputField {...list.urgency} value={urgency} onChange={handleChange} />
                <button type="submit">Добавить дело</button>
            </form>
        )
    }
};

export default FormAddCase;