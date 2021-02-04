import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import {useState} from "react";

const MenuHeader = ({bgActive}) => {
    const [isVisible, setMenuVisibility] = useState(false);

    const handleChangeMenuVisibility = () => {
        //setMenuVisibility(!isVisible);
        setMenuVisibility(prevState => !prevState);
    }

    return(
        <>
            <Menu stateMenu={isVisible} onChangeHamburger={handleChangeMenuVisibility} />
            <NavBar stateMenu={isVisible} bgActive={bgActive} onChangeHamburger={handleChangeMenuVisibility}/>
        </>
    )
};

export default MenuHeader;