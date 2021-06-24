import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCEQQ6f-Zaic9kjmdYJTWZl3mKdxWzvKGY",
    authDomain: "remake-98ac7.firebaseapp.com",
    projectId: "remake-98ac7",
    storageBucket: "remake-98ac7.appspot.com",
    messagingSenderId: "984046228987",
    appId: "1:984046228987:web:ab382dc8fdf7334a87a75e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };