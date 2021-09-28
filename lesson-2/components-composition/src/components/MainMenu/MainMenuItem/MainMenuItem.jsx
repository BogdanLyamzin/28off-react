import PropTypes from "prop-types";

import "./MainMenuItem.css";

const MainMenuItem = ({link, name}) => {
    return (
        <li className="main-menu-item">
            <a href={link} className="main-menu-link active">
                {name}
            </a>
        </li>
    )
};

export default MainMenuItem;

MainMenuItem.defaultProps = {
    link: "#"
};

MainMenuItem.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string.isRequired
};