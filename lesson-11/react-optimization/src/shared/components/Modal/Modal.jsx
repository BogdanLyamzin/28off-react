import { Component } from "react";

import styles from "./Modal.module.scss";

class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.hideModal);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.hideModal);
    }

    hideModal = ({keyCode}) => {
        if (keyCode === 27) {
            this.props.closeModal();
        }
    }

    render() {
        const { closeModal, children } = this.props;
        return (
            <div className={styles.overlay} onClick={closeModal}>
                <div className={styles.modal}>
                    <span className={styles.close} onClick={closeModal}>X</span>
                    {children}
                </div>
            </div>
        )        
    }
};

export default Modal;