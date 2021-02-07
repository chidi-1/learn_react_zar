import Header from "../../components/Header";
import MenuHeader from "../../components/MenuHeader";

const GamePage = ({onChangePage}) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page);
    }

    return(
        <>
            <Header
                title="This is Contact"
                onClickButton = {handleClickButton}
                pageTarget="app"
            />
        </>
    )
};

export default GamePage;