import {useForm} from "../../shared/hooks";

import {initialState} from "./initialState";

const LoginForm = ()=> {
    const [data, handleChange, handleSubmit] = useForm(initialState)

    return (
        <form onSubmit={handleSubmit} action="">
            <h2>Login form</h2>
            <div>
                <label>Логин</label>
                <input onChange={handleChange} value={data.login} name="login" type="text" placeholder="Login" />
            </div>
            <div>
                <label>Пароль</label>
                <input onChange={handleChange} value={data.password} name="password" type="password" placeholder="Password" />
            </div>     
            <div>
                <button type="submit">Login</button>
            </div>       
        </form>
    )
};

export default LoginForm;