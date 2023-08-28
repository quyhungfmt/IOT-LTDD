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
  const database = firebase.database();
  
  

  var loact = firebase.database().ref('IOT/01/data1');
  loact.on('value', (snapshot) => {
    const data1 = snapshot.val();
    document.getElementById('value1').innerHTML = data1
  });
  var loact2 = firebase.database().ref('IOT/01/data2');
  loact2.on('value', (snapshot) => {
    const data2 = snapshot.val();
    document.getElementById('value2').innerHTML = data2
  });
  
  document.getElementById("btnvl1").addEventListener('click', () => {
    writeUserData();
  })

  function writeUserData() {
    firebase.database().ref('IOT/01' ).set({
      data1: "0",
      data2: "1",
    });
  }
