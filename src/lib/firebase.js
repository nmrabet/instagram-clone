// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyASdePLg1U3N3oWhWSsUaZf7bRS2dMuLUs",
    authDomain: "instagram-nm.firebaseapp.com",
    databaseURL: "https://instagram-nm-default-rtdb.firebaseio.com",
    projectId: "instagram-nm",
    storageBucket: "instagram-nm.appspot.com",
    messagingSenderId: "708571123749",
    appId: "1:708571123749:web:cc5e6bd1e7bb92e7baefcc",
    measurementId: "G-X9ZZ0NGJD0"
  };
 
  const firebase = window.firebase.initializeApp(config);
  const { FieldValue } = window.firebase.firestore;
  
// seedDatabase(firebase);

  export { firebase, FieldValue }; 