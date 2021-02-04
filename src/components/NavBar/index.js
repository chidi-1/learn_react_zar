import  cn from 'classnames';

import page_style from "./style.module.css";

const NavBar  = ({stateMenu, onChangeHamburger, bgActive = false}) => {
    const handleClick = () => {
        //onClickButton && onClickButton('game');
        onChangeHamburger && onChangeHamburger();
    }

    return(
        <>
            <nav id={page_style.navbar} className={cn({
                [page_style.bgActive] : bgActive
            })}>
                <div className={page_style.navWrapper}>
                    <p className={page_style.brand}>
                        LOGO
                    </p>
                    {/*<a className={cn(page_style.menuButton, page_style.active)}>*/}
                    <div onClick={handleClick} className={cn(page_style.menuButton, {[page_style.active]: stateMenu})}>
                        <span/>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavBar ;