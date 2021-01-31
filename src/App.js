import HeaderBlock from "./components/HeaderBlock";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import LayoutBg from "./assets/img/bg1.jpg";
import PokemonCard from "./components/PokemonCard";
import POKEMONS from "./assets/data/pokemons.json";

const App = () => {
    return (
        <>
            <Header
                title="This is title"
                descr="This is Description!"
            />
            <Layout
                title="This is title"
                urlBg={LayoutBg}
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
                <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>

            </Layout>
            <Layout
                title="This is title"
                colorBg="palegoldenrod"
            >
                <p>Some text</p>
                <p>Some text</p>
                <div className="flex">
                    {
                        POKEMONS.map((item) =>
                            <PokemonCard
                                key={item.id}
                                name={item.name}
                                img={item.img}
                                id={item.id}
                                type={item.type}
                                values={item.values}
                            />)
                    }
                </div>
            </Layout>
            <Layout
                title="This is title"
                urlBg={LayoutBg}
            >
            </Layout>
            <Footer/>
        </>
    )
}

export default App;