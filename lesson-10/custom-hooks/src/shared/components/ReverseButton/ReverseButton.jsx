import {useState} from "react";

import styles from "./ReverseButton.module.css"

const ReverseButton = ({firstText, secondText})=> {
    const [text, setText] = useState(firstText);
    const [active, setActive] = useState(false);

    const toggleText = ()=> {
        const newText = (text === firstText) ? secondText : firstText;
        setText(newText);
        setActive(prevState => {
            return !prevState
        })

    }
    const className = active ? styles.btnActive : styles.btn;

    return <button onClick={toggleText} className={className}>{text}</button>
}

export default ReverseButton;