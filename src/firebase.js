import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBdZ7-9kpNQlwjiHxc1THKSs-tFSdEf_Uo",
    authDomain: "mangofy-88087.firebaseapp.com",
    databaseURL: "https://mangofy-88087-default-rtdb.firebaseio.com",
    projectId: "mangofy-88087",
    storageBucket: "mangofy-88087.appspot.com",
    messagingSenderId: "200816517909",
    appId: "1:200816517909:web:1e8f17871bdd0fdff1ff1c",
    measurementId: "G-84H6LX45WK"
});

export const auth = app.auth();
export default app;