import styles from "./Button.module.css";

const types = {
    primary: styles.btnPrimary,
    secondary: styles.btnSecondary,
    success: styles.btnSuccess
}

const Button = ({text, type, className, onClick})=>{
    const additionalClassName = types[type]; // types.primary
return (<button onClick={onClick} className={`${styles.btn} ${additionalClassName} ${className}`}>
            {text}
    </button>)
}

Button.defaultProps = {
    type: "primary",
    className: "",
}

export default Button;