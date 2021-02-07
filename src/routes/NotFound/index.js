import Header from "../../components/Header";
import MenuHeader from "../../components/MenuHeader";

const GamePage = ({onChangePage}) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page);
    }

    return(
        <>
            <Header
                title="404"
                pageTarget="/"
                pageTargetText="Home"
            />
        </>
    )
};

export default GamePage;