// import { ReactComponent as UniversityIcon } from './icons/university-icon.svg';
// import { ReactComponent as FacultyIcon } from './icons/faculte-icon.svg';
import PropTypes from 'prop-types';

import MainMenuItem from './MainMenuItem';

import "./MainMenu.css";

const MainMenu = ({items}) => {
    const menuItems = items.map(item => ({ ...item, active: false }));
    menuItems[0].active = true;
    const menuElements = menuItems.map(({id, ...props}) => <MainMenuItem key={id} {...props} />);

    return (
        <ul className="main-menu">
            {menuElements}
        </ul>
    )
};

export default MainMenu;

MainMenu.defaultProps = {
    items: []
}

MainMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        link: PropTypes.string
    }))
}