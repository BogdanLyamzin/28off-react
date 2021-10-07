import {useState} from "react";

const LoginForm = ()=> {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeLogin = ({target})=>{
        setLogin(target.value);
    }

    const handleChangePassword = ({target}) => setPassword(target.value)

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(login);
        console.log(password)
    }

    return (
        <form onSubmit={handleSubmit} action="">
            <div>
                <label>Логин</label>
                <input onChange={handleChangeLogin} value={login} name="login" type="text" placeholder="Login" />
            </div>
            <div>
                <label>Пароль</label>
                <input onChange={handleChangePassword} value={password} name="password" type="password" placeholder="Password" />
            </div>     
            <div>
                <button type="submit">Login</button>
            </div>       
        </form>
    )
};

export default LoginForm;