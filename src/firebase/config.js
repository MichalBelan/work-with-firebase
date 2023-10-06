import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCJHJpaKUk2UfvMKjwDn5DmRjN_4xbw2GE",
    authDomain: "movies-2-36ad3.firebaseapp.com",
    projectId: "movies-2-36ad3",
    storageBucket: "movies-2-36ad3.appspot.com",
    messagingSenderId: "1093524535218",
    appId: "1:1093524535218:web:554d45652d2894e4c256ab"
  };



firebase.initializeApp(firebaseConfig)



const projectFirestore = firebase.firestore()


export { projectFirestore }
