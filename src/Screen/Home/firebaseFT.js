//------------------------------------------------------------------->
//------------------------------------------------------------------->







//------------------------------------------------------------------->
// HAM TRUYEN VAO LOCAL : DUONG DAN REALTIMEDATABASE EX: IOT/USER//..
//KEY : KEY REALTIME IN LOCAL 
// VALUE : VALUE SE TRUYEN VAO KEY
function updateData (path,key,value) {
   var ob = {};
   ob[key] = value;
   firebase.database().ref(path).update(ob)
 }

 
// -------------------------------SIGN OUT FIREBASE----------------------------->

// document.getElementById("logout").addEventListener('click', () => {
//    firebase.auth().signOut().then(() => {
//       alert("out")
//      window.location.href = "../../../index.html"
//    }).catch((error) => {
//      console.log(error.message)
//    });
//  })
 


 function listenData (idsw,idtext,path,message) {
   var dataRealtime = firebase.database().ref("IOT/"+path);
   dataRealtime.on('value' , (listen) => {
      let data = listen.val();
      if(data == 1) 
      {
         document.getElementById(idsw).setAttribute("class", "switch-body on") 
         document.getElementById(idtext).innerHTML = message + ": ON"
      }
      else
      {
         document.getElementById(idsw).setAttribute("class", "switch-body")
         document.getElementById(idtext).innerHTML = message + ": OFF"
      }
   })
}

function listenDataSensor (path,sensorName) {
   var dataSensor = firebase.database().ref("IOT/"+path+"/"+sensorName);
   dataSensor.on('value', (listenVal) => {
      let data = listenVal.val();
      showdata(data,sensorName,path)
   })
}