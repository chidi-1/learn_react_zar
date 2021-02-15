import {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import cn from 'classnames';

import {FireBaseContext} from "../../../../context/FirebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";
import Layout from "../../../../components/Layout";
import PokemonCard from "../../../../components/PokemonCard";

import page_style from "../Start/style.module.css";
import s from './style.module.css';

const FinishPage =  () => {
    const firebase = useContext(FireBaseContext);
    const history = useHistory();
    // const [board, setBoard] = useState([]);
    const [selectedPokemon,changePokemon] = useState([]);
    const ctx = useContext(PokemonContext);

    const player2Pokemons = PokemonContext.player2Pokemons;
    const winner = PokemonContext.winner;
    useEffect(() => {
        if(!player2Pokemons){
            history.push('/game/');
            return;
        }
    }, [])

    return (
        <>
            <Layout
                title="Finish"
                colorBg="palegoldenrod"
            >
                <div className={s.flex}>SELECTED: {selectedPokemon}
                    {
                        Object.entries(ctx.pokemons).map(
                            ([key, {name, img, id, type, values}]) =>
                                <PokemonCard
                                    className={cn(s.card, s.disabled)}
                                    key={key}
                                    name={name}
                                    img={img}
                                    id={id}
                                    type={type}
                                    values={values}
                                    isActive={true}
                                />
                        )
                    }
                </div>
                <div className={s.text_center}>
                    <button
                        onClick={() => {
                            // const newKey = firebase.ref().child('pokemons').push().key;
                            const addedPokemon = player2Pokemons.filter(item => item.id === selectedPokemon)[0];

                            console.log(addedPokemon);
                            firebase.addPokemon(addedPokemon, () => {
                                ctx.pokemons=[];
                                history.push('/game')}
                                );
                        }}
                    >
                        New Game
                    </button>
                </div>

                <div className={s.flex}>
                    {
                        player2Pokemons.map((pokemonParams) =>
                            <PokemonCard
                                className={cn(s.card, {
                                     [s.disabled]: winner !== 1
                                })}
                                name={pokemonParams.name}
                                img={pokemonParams.img}
                                id={pokemonParams.id}
                                type={pokemonParams.type}
                                values={pokemonParams.values}
                                isActive={true}
                                isSelected={pokemonParams.id == selectedPokemon}
                                onClickCard={(selectedPokemonId) => {
                                    changePokemon(selectedPokemonId);
                                }}
                            />)
                    }
                </div>

            </Layout>
        </>
    )
};

export default FinishPage;