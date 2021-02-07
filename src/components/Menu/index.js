import cn from "classnames";
import {Link} from "react-router-dom";

import page_style from './style.module.css';

const MENU = [
    {
        "title": "HOME",
        "to": "/"
    },
    {
        "title": "GAME",
        "to": "/game"
    },
    {
        "title": "ABOUT",
        "to": "/about"
    },
    {
        "title": "CONTACT  ",
        "to": "/contact"
    },
]

const Menu = ({stateMenu, onChangeHamburger}) => {
    const handleClick = () => {
        onChangeHamburger && onChangeHamburger();
    }

    return (
        <>
            <div className={
                cn(page_style.menuContainer,
                    {
                        [page_style.active]: stateMenu === true,
                        [page_style.deactive]: stateMenu === false,
                    })
            }>
                <div className={page_style.overlay}/>
                <div className={page_style.menuItems}>
                    <ul>
                        {
                            MENU.map(({title, to}, index) => (
                                    <li key={index}>
                                        <Link to={to} onClick={handleClick}>
                                            {title}
                                        </Link>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Menu;