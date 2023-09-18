const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDi7YuGqfj1AhBW44YiOLjhwZUr8IlFUsI",
  authDomain: "iotnhom2.firebaseapp.com",
  databaseURL: "https://iotnhom2-default-rtdb.firebaseio.com",
  projectId: "iotnhom2",
  storageBucket: "iotnhom2.appspot.com",
  messagingSenderId: "692824710274",
  appId: "1:692824710274:web:8c175981fd1e1effdd289b"
  });
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  // const database = firebase.database();
  

  // var loact = firebase.database().ref('IOT/01/data1');
  // loact.on('value', (snapshot) => {
  //   const data1 = snapshot.val();
  // });
  // var loact2 = firebase.database().ref('IOT/01/data2');
  // loact2.on('value', (snapshot) => {
  //   const data2 = snapshot.val();
  //   document.getElementById('value2').innerHTML = data2

  // });
  
  // document.getElementById("btnvl1").addEventListener('click', () => {
  //   writeUserData();
  // })

  // function writeUserData() {
  //   firebase.database().ref('IOT/01' ).set({
  //     data1: "0",
  //     data2: "1",
  //   });
  // }
