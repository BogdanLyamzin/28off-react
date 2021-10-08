import {useForm} from "../../shared/hooks";

import { initialState } from "./intialState";

const RegisterForm = ()=> {
    const [data, handleChange, handleSubmit] = useForm(initialState)

    return(
        <form action="" onSubmit={handleSubmit}>
            <h2>Register form</h2>
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