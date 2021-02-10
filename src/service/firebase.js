import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA3OEzOCEqGXj1KWBuDUlz5qHhjiJnh9H4",
    authDomain: "pokemon-game-4d905.firebaseapp.com",
    databaseURL: "https://pokemon-game-4d905-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-4d905",
    storageBucket: "pokemon-game-4d905.appspot.com",
    messagingSenderId: "63392261336",
    appId: "1:63392261336:web:b74fdfa3fb66b3221323ad"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    // не асинзронный, then бесполезно
    getPokemonSoket = (cb) => {
        this.database.ref(`pokemons`).on('value', (snapshot) => {
            cb(snapshot.val());
        });
    }

    ofPokemonSoket = () => {
        this.database.ref(`pokemons`).off();
    }

    getPokemonsOnce = async () => {
        return  await this.database.ref('pokemons').once('value')
            .then(snapshot => snapshot.val());
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (data, cb)  => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(data).then(() => cb());
    }
}

// export const fire = firebase;
// export const database = fire.database();
//export default database;
export default Firebase;
