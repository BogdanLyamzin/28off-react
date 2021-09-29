import PropTypes from "prop-types";

import styles from "./MainMenuItem.module.scss";

const MainMenuItem = ({ link, name, active }) => {
    const linkClassName = active ? styles.linkActive : styles.link;
    return (
        <li className={styles.item}>
            <a href={link} className={linkClassName}>
                <span className={styles.linkIcon}></span>
                {name}
            </a>
        </li>
    )
};

export default MainMenuItem;

MainMenuItem.defaultProps = {
    link: "#",
    active: false
};

MainMenuItem.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool
};