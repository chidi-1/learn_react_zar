
import Header from "../../components/Header";
import Layout from "../../components/Layout";

import LayoutBg from "../../assets/img/bg1.jpg";
import PokemonCard from "../../components/PokemonCard";
import POKEMONS from "../../assets/data/pokemons.json";

const HomePage = ({onChangePage}) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page);
    }

    return (
        <>
            <Header
                title="This is title"
                descr="This is Description!"
                onClickButton = {handleClickButton}
                pageTarget="game"

            />
            <Layout
                title="This is title"
                urlBg={LayoutBg}
            >
            </Layout>
        </>
    )
}

export default HomePage;