import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNR1wBzgB3GUOIDLTFpxv0fsPyGSn5naE",
    authDomain: "messanger-clone-f8be2.firebaseapp.com",
    databaseURL: "https://messanger-clone-f8be2-default-rtdb.firebaseio.com",
    projectId: "messanger-clone-f8be2",
    storageBucket: "messanger-clone-f8be2.appspot.com",
    messagingSenderId: "958733512167",
    appId: "1:958733512167:web:c81cd89194298a5e0ca142",
    measurementId: "G-6CXFG1L2MM"
});

const db = firebaseApp.firestore();

export default db;

