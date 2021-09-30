import { Component } from "react";

import MainMenuItem from "./MainMenuItem";

import styles from "./MainMenu.module.scss";

class MainMenu extends Component {
    state = {
        activeIndex: 0
    }

    handleClick = (e, idx) => {
        e.preventDefault();
        this.setState({activeIndex: idx})
    }

    render() {
        const { items } = this.props;
        const { activeIndex } = this.state;
        const { handleClick } = this;

        const menuElements = items.map((item, index) => {
            const active = activeIndex === index;
            return (
                <MainMenuItem
                    key={item.id}
                    {...item}
                    active={active}
                    onClick={(e) => handleClick(e, index)} />
            )
        });
        
        return (
            <ul className={styles.menu}>
                {menuElements}
            </ul>
        )
    }
}

export default MainMenu;