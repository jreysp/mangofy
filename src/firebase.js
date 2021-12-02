import firebase from "firebase/compat/app";
import "firebase/compat/auth";

require('firebase/compat/firestore')
const fieldValue = firebase.firestore.FieldValue;
const Snapshot = firebase.Snapshot;

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

var db = firebase.firestore();

export const createUser = async (email, password, photoURL) => {
    const userAuth = await auth.createUserWithEmailAndPassword(email, password);
    app.firestore().collection('users').doc(userAuth.user.uid).set({
        Email: email
    });
    var URL_obj = {
        picture_url: photoURL
    }
    console.log("URL_obj", URL_obj);
    const hello = await app.firestore().collection('users').doc(userAuth.user.uid).collection('Photo').add(URL_obj);
    /*var ref = dB.collection('users').doc(currentUserID).collection(playlistName)

    console.log('Adding song')
    console.log(song)
    const res = await ref.add(song)*/
}
export const auth = app.auth();
export const dB = db;
export const FieldValue= fieldValue;
export const snapshot = Snapshot;
export default app;