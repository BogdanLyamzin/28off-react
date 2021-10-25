import { useState } from "react";

import { fields } from "./fields";
import {initialState} from "./initialState";

import styles from "./LoginForm.module.scss";

const LoginForm = ({onSubmit})=> {
    const [data, setData] = useState(initialState);

    const handleChange = ({target}) => {
        const {name, value} = target;
        setData({
            ...data, 
            [name]: value
        });
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        onSubmit(data);
        setData({...initialState})
    }

    return (
        <>
        <h2>Вход</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className="form-group">
                <input {...fields.email}
                    value={data.email}
                    onChange={handleChange}
                    className="form-control" />
            </div>
            <div className="form-group">
                <input {...fields.password} 
                value={data.password}
                onChange={handleChange}
                className="form-control"  />
            </div>
            <button className="btn-primary" type="submit">Вход</button>
        </form>
        </>
    )
};

export default LoginForm;