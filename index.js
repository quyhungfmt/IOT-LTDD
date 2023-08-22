const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-hS9CcEIy5304p_ZDqk5KPoYdrVnfbB4",
    authDomain: "iot-ltdd.firebaseapp.com",
    databaseURL: "https://iot-ltdd-default-rtdb.firebaseio.com",
    projectId: "iot-ltdd",
    storageBucket: "iot-ltdd.appspot.com",
    messagingSenderId: "810346939081",
    appId: "1:810346939081:web:6bad8f0b4c7c54739bc318",
    measurementId: "G-XL4KWML35Q"    
  });
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

 const onAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          window.location.href = "./src/Screen/Home/home.html"
          // ...
        } else {
          window.location.href = "./src/Screen/Login/login.html"
        }
      });
 }