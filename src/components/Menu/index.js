import page_style from './style.module.css';

const Menu = ({stateMenu}) => {

    return(
        <>
            <div className={`${page_style.menuContainer} ${stateMenu ? page_style.active : page_style.deactive}`}>
                <div className={page_style.overlay}/>
                <div className={page_style.menuItems}>
                    <ul>
                        <li>
                            <a href="#welcome">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="#game">
                                GAME
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Menu;