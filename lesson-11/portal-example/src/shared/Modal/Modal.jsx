import { Component } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

const modalRoot = document.getElementById("modal-root");

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
            createPortal(
                <div className={styles.overlay} onClick={closeModal}>
                    <div className={styles.modal}>
                        <span className={styles.close} onClick={closeModal}>X</span>
                        {children}
                    </div>
                </div>,
                modalRoot
            )
            
        )        
    }
};

export default Modal;