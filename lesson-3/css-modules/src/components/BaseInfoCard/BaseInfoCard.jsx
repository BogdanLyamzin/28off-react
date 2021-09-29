import styles from "./BaseInfoCard.module.scss";

const BaseInfoCard = ({ text }) => {
    return (
        <div className={styles.card}>
            <p className={styles.text}>{text}</p>
        </div>)
};

export default BaseInfoCard;