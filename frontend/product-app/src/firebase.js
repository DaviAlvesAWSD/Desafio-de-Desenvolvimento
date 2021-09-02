import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBQflB8ty56gHKOuBi7xvk_KoUncJHmpzQ",
  authDomain: "desafio-dev-api.firebaseapp.com",
  databaseURL: "https://desafio-dev-api-default-rtdb.firebaseio.com",
  projectId: "desafio-dev-api",
  storageBucket: "desafio-dev-api.appspot.com",
  messagingSenderId: "97807289383",
  appId: "1:97807289383:web:67164d249a8eebfd165202",
  measurementId: "G-7G6XW2BH1S"
};


let firedB = firebase.initializeApp(firebaseConfig);

export default firedB.firestore().collection()