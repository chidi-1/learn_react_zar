import {useState, useEffect, useContext} from "react";
import {useHistory} from "react-router-dom";
import PokemonCard from "../../../../components/PokemonCard";

import Header from "../../../../components/Header";
import Layout from "../../../../components/Layout";

import page_style from './style.module.css';
import {FireBaseContext} from "../../../../context/FirebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";

const StartPage = ({onChangePage}) => {

    const firebase = useContext(FireBaseContext);
    const pokemonContext = useContext(PokemonContext);
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    const getPokemons = async () => {
        const response = await firebase.getPokemonsOnce();
        setPokemons(response);
    }

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons);
        })

        return () => firebase.ofPokemonSoket();
    }, [])

    const handleChangeSelected = (key) => {
        const pokemon = {...pokemons[key]};
        pokemonContext.onSelectedPokemons(key, pokemon);

        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected
            }
        }))
    }

    const handleStartGameClick = () => {
        history.push('/game/board');
    }

    return (
        <>
            <Header
                title="This is GamePage"
            />

            <Layout
                title="This is title"
                colorBg="palegoldenrod"
            >
                <button
                    onClick={handleStartGameClick}
                    disabled={Object.keys(pokemonContext.pokemons).length < 5}
                >
                    Start Game
                </button>
                <div className={page_style.flex}>
                    {
                        Object.entries(pokemons).map(([key, {name, img, id, type, values, selected}]) =>

                            <PokemonCard
                                className={page_style.card}
                                key={key}
                                name={name}
                                img={img}
                                id={id}
                                type={type}
                                values={values}
                                isActive={true}
                                isSelected={selected}
                                onClickCard={() => {
                                    if(Object.keys(pokemonContext.pokemons).length < 5 || selected){
                                        handleChangeSelected(key)
                                    }
                                }}
                            />)
                    }
                </div>
            </Layout>
        </>
    )
};

export default StartPage;