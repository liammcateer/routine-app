import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAkV6lvKQBnlYTyGfxc2wQj40Hf5O0r6uo",
    authDomain: "routine-app-ccd6c.firebaseapp.com",
    databaseURL: "https://routine-app-ccd6c.firebaseio.com",
    projectId: "routine-app-ccd6c",
    storageBucket: "routine-app-ccd6c.appspot.com",
    messagingSenderId: "819306380810",
    appId: "1:819306380810:web:d247df9c07d98e294769f3"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();