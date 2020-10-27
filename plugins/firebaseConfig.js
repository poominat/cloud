import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyDKsD4nxWHgB_0g2rgrhDGwlZ-9BlZLZNs",
        authDomain: "cloud-26cb6.firebaseapp.com",
        databaseURL: "https://cloud-26cb6.firebaseio.com",
        projectId: "cloud-26cb6",
        storageBucket: "cloud-26cb6.appspot.com",
        messagingSenderId: "728075322979",
        appId: "1:728075322979:web:f58cc2ce6bad0eb83fda56"

    }
    firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()