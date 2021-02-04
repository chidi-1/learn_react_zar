import {useState} from "react";

import Header from "../../components/Header";
import Layout from "../../components/Layout";

import POKEMONS from "../../assets/data/pokemons.json";
import PokemonCard from "../../components/PokemonCard";

const GamePage = ({onChangePage}) => {

    const [isActive, setActive] = useState(POKEMONS);

    const handleClickCard = (id) => {

        setActive(prevState => {
            return [...prevState].map(POKEMONS => {
                if (POKEMONS.id === id) {
                    POKEMONS.isActive = !POKEMONS.isActive;
                }

                return POKEMONS;
            })
        })
    }

    return(
        <>
            <Header
                title="This is GamePage"
            />

            <Layout
                title="This is title"
                colorBg="palegoldenrod"
            >
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
                                isActive={item.isActive}
                                onClickCard={handleClickCard}
                            />)
                    }
                </div>
            </Layout>
        </>
    )
};

export default GamePage;