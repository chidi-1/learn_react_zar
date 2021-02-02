import Header from "../../components/Header";

const GamePage = ({onChangePage}) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page);
    }

    return(
        <>
            <Header
                title="This is GamePage"
                onClickButton = {handleClickButton}
                pageTarget="app"
            />
        </>
    )
};

export default GamePage;