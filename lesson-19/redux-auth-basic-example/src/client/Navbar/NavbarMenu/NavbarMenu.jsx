import { NavLink } from "react-router-dom";

import styles from "./NavbarMenu.module.scss";

import { items } from "./items";

const NavbarMenu = ()=> {
    const menuElements = items.map(({id, to, text})=>
            <li key={id}>
                <NavLink 
                    exact
                    activeClassName={styles.activeLink}
                    className={styles.link}
                    to={to}>
                    {text}
                </NavLink>
            </li>
    )

    return (
        <ul className={styles.menu}>
            {menuElements}
        </ul>
    )
};

export default NavbarMenu;