import { NavLink } from "react-router-dom";

import styles from "./HeaderMenu.module.scss";

import { items } from "./items";

const HeaderMenu = ({onClick})=>{
    const menuElements = items.map(({id, name, href, pageName}) => 
    <li key={id} className={styles.item}>
        <NavLink to={href} exact activeClassName={styles.active} className={styles.link}>
            {name}
        </NavLink>
    </li>);

    return (
        <ul className={styles.menu}>
            {menuElements}
        </ul>
    )
};

export default HeaderMenu;