import { Component } from "react";
import styles from "./ReverseButton.module.css";

class ReverseButton extends Component {
    
    state = {
        activeText: "first"
    }

    handleClick = (e) => {
        e.preventDefault();
        
        this.setState(({ activeText }) => {
            const newActiveText = (activeText === "first") ? "second" : "first";
            return {
                activeText: newActiveText
            }
        });
    }

    render() {
        const { firstText, secondText } = this.props;
        const { handleClick } = this;
        const { activeText } = this.state;
        const text = (activeText === "first") ? firstText : secondText;
        return (
            <button className={styles.btn} onClick={handleClick}>{ text }</button>
        )
    }
}

export default ReverseButton;