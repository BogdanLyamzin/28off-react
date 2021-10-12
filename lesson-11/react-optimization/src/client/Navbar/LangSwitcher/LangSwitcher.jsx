import { useContext, useCallback } from "react";

import { langContext } from "../../../context";

const LangSwitcher = ({className})=> {
    const {lang, switchLang} = useContext(langContext);
    const changeLang = useCallback(({target})=> switchLang(target.value), [switchLang]);
    return (
        <select className={className} onChange={changeLang} name="" id="" defaultValue={lang}>
            <option value="ru">RU</option>
            <option value="en">EN</option>
        </select>
    )
}

export default LangSwitcher;