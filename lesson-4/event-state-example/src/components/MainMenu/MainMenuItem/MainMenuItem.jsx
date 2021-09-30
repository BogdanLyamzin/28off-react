import styles from "./MainMenuItem.module.scss";

const MainMenuItem = ({ link, name, active, onClick }) => {
    const linkClassName = active ? styles.linkActive : styles.link;
    return (
        <li className={styles.item}>
            <a
                href={link}
                className={linkClassName}
                onClick={onClick}>
                    {name}
            </a>
        </li>
    )
};

export default MainMenuItem;