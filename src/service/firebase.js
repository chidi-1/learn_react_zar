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
export const fire = firebase;
export const database = fire.database();

export default database;
