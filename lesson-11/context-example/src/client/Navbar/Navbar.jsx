import { useContext } from "react";

import { langContext } from "../../context";

const Navbar = ()=> {
    const {lang, switchLang} = useContext(langContext);

    return (
        <select onChange={({target})=> switchLang(target.value)} name="" id="" defaultValue={lang}>
            <option value="ru">RU</option>
            <option value="en">EN</option>
        </select>
    )
};

export default Navbar;