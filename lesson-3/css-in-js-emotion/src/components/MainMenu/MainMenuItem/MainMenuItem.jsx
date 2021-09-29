import PropTypes from "prop-types";

import { Item, Link } from "./components";

const MainMenuItem = ({link, name, active}) => {
    return (
        <Item>
            <Link href={link} active={active}>
                {name}
            </Link>
        </Item>
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