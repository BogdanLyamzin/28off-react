import {useState} from "react"

import { initialState } from "./intialState";

const RegisterForm = ()=> {
    const [data, setData] = useState(initialState);

    const handleChange = ({target}) => {
        const {name, value} = target;
        setData({
            ...data,
            [name]: value
        });
        // {email: "", password: "", email: "bogdan@gmail.com"}
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setData({...initialState})
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Email</label>
                <input onChange={handleChange} value={data.email} name="email" type="email" placeholder="Enter email" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input onChange={handleChange} value={data.password} name="password" type="password" placeholder="Enter password" />
            </div>
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm