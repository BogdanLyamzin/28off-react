import { Component } from "react";
import styles from "./ActiveButton.module.css";

class ActiveButton extends Component {

    static defaultProps = {
        text: "Button"
    }

    state = {
        active: false,
        index: 0
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({active: true})
    }

    render() {
        const { text } = this.props;
        const { active } = this.state;
        const { handleClick } = this;
        const className = active ? styles.btnActive : styles.btn;
        // console.log(this.state);
        return (
            <a href="#" className={className} onClick={handleClick}>{ text }</a>
        )
    }
}

export default ActiveButton;

