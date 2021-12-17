import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyBUwltziPCaKgrG39VrrhNyOps-7liCK3I",
    authDomain: "esms-d8e3d.firebaseapp.com",
    databaseURL: "https://esms-d8e3d.firebaseio.com",
    projectId: "esms-d8e3d",
    storageBucket: "esms-d8e3d.appspot.com",
    messagingSenderId: "106290903977",
    appId: "1:106290903977:web:8404d19fd4fb19e8b1a2b8",
    measurementId: "G-Y84DNEXKGD"
  };
 
 const fire = firebase.initializeApp(firebaseConfig);
 export default fire;
  