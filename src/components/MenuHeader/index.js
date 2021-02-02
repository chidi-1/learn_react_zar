import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import {useState} from "react";

const MenuHeader = () => {
    const [isVisible, setMenuVisibility] = useState(false);

    const handleChangeMenuVisibility = () => {
        setMenuVisibility(!isVisible);
    }

    return(
        <>
            <Menu stateMenu={isVisible} onChangeHamburger={handleChangeMenuVisibility} />
            <NavBar stateMenu={isVisible} onChangeHamburger={handleChangeMenuVisibility}/>
        </>
    )
};

export default MenuHeader;