import PropTypes from "prop-types";

import "./MainMenuItem.scss";

const MainMenuItem = ({ link, name, active }) => {
    const linkClassName = `main-menu-link ${active ? "active" : ""}`;
    return (
        <li className="main-menu-item">
            <a href={link} className={linkClassName}>
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