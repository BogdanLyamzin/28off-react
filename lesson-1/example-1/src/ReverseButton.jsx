import { useState } from "react";

const ReverseButton = ({ firstText, secondText }) => {
    const [text, setText] = useState(firstText);
    const handleClick = () => {
        setText(prevText => {
            const newText = (prevText === firstText) ? secondText : firstText;
            return newText;
        })
    };

    return <button onClick={handleClick}>{text}</button>
}

export default ReverseButton;