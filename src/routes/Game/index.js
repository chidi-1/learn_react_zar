import {useState, useEffect} from "react";
import PokemonCard from "../../components/PokemonCard";

import Header from "../../components/Header";
import Layout from "../../components/Layout";

import database from "../../service/firebase";
import POKEMONS from "../../assets/data/pokemons.json";

const GamePage = ({onChangePage}) => {
    const [isActive, setActive] = useState(POKEMONS);
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').on('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, [])

    let id = Math.floor(Math.random() * (30 - 40)) + 30;

    const handleClickCard = (id) => {
        /*
        МОЕ РЕШЕНИЕ
        setActive(prevState => {
            return [...prevState].map(POKEMONS => {
                if (POKEMONS.id === id) {
                    POKEMONS.isActive = !POKEMONS.isActive;
                }

                return POKEMONS;
            })
        })*/

        /*
        МОЕ РЕШЕНИЕ ИСПРАВЛЕННОЕ
        const newPOKEMONS = POKEMONS.map(pokemon => {
            if (pokemon.id === id) {
                pokemon.isActive = !pokemon.isActive;
            }
        })
        setActive([newPOKEMONS]);*/

        setPokemons(prevState => {

            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};

                if (pokemon.id === id) {
                    database.ref('pokemons/' + item[0]).set({
                        ...pokemon,
                        active: !pokemon.active
                    });
                    pokemon.active = !pokemon.active;
                };

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    }

    const handleAddPokemon = () => {
        id++;

        let data = {
            "abilities" : [ "keen-eye", "tangled-feet", "big-pecks" ],
            "base_experience" : 122,
            "height" : 11,
            "id" : id,
            "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
            "name" : "pidgeotto",
            "stats" : {
                "attack" : 60,
                "defense" : 55,
                "hp" : 63,
                "special-attack" : 50,
                "special-defense" : 50,
                "speed" : 71
            },
            "type" : "flying",
            "values" : {
                "bottom" : 7,
                "left" : 5,
                "right" : 2,
                "top" : "A"
            }
        }

        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(data);
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
                <button onClick={handleAddPokemon}>
                    Add new pokemon
                </button>
                <div className="flex">
                    {
                        Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) =>

                            <PokemonCard
                                key={key}
                                name={name}
                                img={img}
                                id={id}
                                type={type}
                                values={values}
                                isActive={active}
                                onClickCard={handleClickCard}
                            />)
                    }
                </div>
            </Layout>
        </>
    )
};

export default GamePage;