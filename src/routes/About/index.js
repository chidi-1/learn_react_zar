import Header from "../../components/Header";
import MenuHeader from "../../components/MenuHeader";

//import {useContext} from 'react';
//import {TestContext} from "../../context";

const AboutPage = ({onChangePage}) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page);
    }

    /*const themeContext  = useContext(TestContext);
    console.log(themeContext);
    const handleClick = () => {
        themeContext.onChangeTheme(themeContext.theme === 'light' ? 'dark' : 'light')
    }*/

    return(
        <>
            <Header
                title="This is AboutPage"
                onClickButton = {handleClickButton}
                pageTarget="app"
            />
            {/*<button onClick={handleClick}> Change theme</button>*/}
        </>
    )
};

export default AboutPage;