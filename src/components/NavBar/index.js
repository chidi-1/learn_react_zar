import  cn from 'classnames';

import page_style from "./style.module.css";

const NavBar  = ({stateMenu, onChangeHamburger}) => {
    const handleClick = () => {
        //onClickButton && onClickButton('game');
        onChangeHamburger && onChangeHamburger();
    }

    return(
        <>
            <nav className={page_style.navbar}>
                <div className={page_style.navWrapper}>
                    <p className={page_style.brand}>
                        LOGO
                    </p>
                    {/*<a className={cn(page_style.menuButton, page_style.active)}>*/}
                    <a onClick={handleClick} className={cn(page_style.menuButton, {[page_style.active]: stateMenu})}>
                        <span/>
                    </a>
                </div>
            </nav>
        </>
    )
};

export default NavBar ;