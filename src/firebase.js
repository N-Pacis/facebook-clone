import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyACi1-9qSjqhtC2u8Y74Sfqqf5AAx8YSBc",
    authDomain: "facebook-clone-pacis.firebaseapp.com",
    projectId: "facebook-clone-pacis",
    storageBucket: "facebook-clone-pacis.appspot.com",
    messagingSenderId: "211144924620",
    appId: "1:211144924620:web:8c32453c991548ce87d169",
    measurementId: "G-43BLPWRB3S"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;