import {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import cn from 'classnames';

import {PokemonContext} from "../../../../context/pokemonContext";
import Layout from "../../../../components/Layout";
import PokemonCard from "../../../../components/PokemonCard";

import page_style from "../Start/style.module.css";
import s from './style.module.css';

const FinishPage =  () => {
    const history = useHistory();

    const {pokemons} = useContext(PokemonContext);
    const player2Pokemons = PokemonContext.player2Pokemons;
    const winner = PokemonContext.winner;

    return (
        <>
            <Layout
                title="Finish"
                colorBg="palegoldenrod"
            >
                <div className={s.flex}>
                    {
                        Object.entries(pokemons).map(
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
                            history.push('/game');
                        }}
                    >
                        New Game
                    </button>
                </div>
                <div className={s.flex}>
                    {
                        player2Pokemons.map(({name, img, id, type, values}) =>
                            <PokemonCard
                                className={cn(s.card, {
                                    [s.disabled]: winner !== 1
                                })}
                                name={name}
                                img={img}
                                id={id}
                                type={type}
                                values={values}
                                isActive={true}
                                isSelected={false}
                            />)
                    }
                </div>

            </Layout>
        </>
    )
};

export default FinishPage;