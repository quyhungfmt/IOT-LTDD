var lg = document.querySelector(".boxLogin");
var rgt = document.querySelector(".boxRegister");
var bt = document.querySelector(".btHlogin");
var ifagree = document.getElementById("ifagree");
var error_email = document.getElementById("inputEmail")
var error_pass = document.getElementById("inputPass")
var error_email2 = document.getElementById("inputEmail2")
var error_pass2 = document.getElementById("inputPass2")
var error_pass2A = document.getElementById("passAgain")

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


function style_error (x) {
    switch(x){
        case 1:
            // email error
            document.getElementById("errorEmail").innerHTML="Vui Lòng Nhập Email";
            error_email.style.borderBottomColor = "red"
            break;
        case 2:
            // email succsess
            document.getElementById("errorEmail").innerHTML="";
            error_email.style.borderBottomColor = "green"
            break;
        case 3:
            // pass error
            document.getElementById("errorPass").innerHTML="Vui Lòng Nhập Mật Khẩu" 
            error_pass.style.borderBottomColor = "red"
            break;
        case 4:
            // pass error length
            document.getElementById("errorPass").innerHTML="Mật Khẩu Phải Có Hơn 6 Kí Tự"
            error_pass.style.borderBottomColor = "red"
            break;
        case 5:
            // pass succsess
            document.getElementById("errorPass").innerHTML="";
            error_pass.style.borderBottomColor = "green"
            break;
        case 6:
            // email register error
            document.getElementById("errorEmail2").innerHTML="Vui Lòng Nhập Email";
            error_email2.style.borderBottomColor = "red"
            break;
        case 7:
            // email register succsess
            document.getElementById("errorEmail2").innerHTML="";
            error_email2.style.borderBottomColor = "green"
            break;
        case 8:
            // pass register error 
            document.getElementById("errorPass2").innerHTML="Vui Lòng Nhập Mật Khẩu" 
            error_pass2.style.borderBottomColor = "red"
            break;
        case 9:
            // pass register error length
            document.getElementById("errorPass2").innerHTML="Mật Khẩu Phải Có Hơn 6 Kí Tự" 
            error_pass2.style.borderBottomColor = "red"
            break; 
        case 10:
            // pass register succsess
            document.getElementById("errorPass2").innerHTML="";
            error_pass2.style.borderBottomColor = "green"
            break;
        case 11:
            document.getElementById("errorpass2Again").innerHTML="Vui Lòng Nhập Lại Mật Khẩu";
            error_pass2A.style.borderBottomColor ="red"
            break;
        case 12:
            document.getElementById("errorpass2Again").innerHTML="Mật Khẩu Không Khớp";
            error_pass2A.style.borderBottomColor ="red"
            break;
        case 13:
            document.getElementById("errorpass2Again").innerHTML="";
            error_pass2A.style.borderBottomColor ="green"    
            break;
    }
}
function validateEmail () {
    var emailvalue = document.getElementById("inputEmail").value;
    emailvalue == "" ? style_error(1) : style_error(2)
}
function validatePass () {
    var passvalue = document.getElementById("inputPass").value;
    if(passvalue == "") style_error(3)
    else if(passvalue.length <6 && passvalue.length >0) style_error(4)
    else if(passvalue.length >6) style_error(5);
}
const loginse = () => {
    
    var passvalue = document.getElementById("inputPass").value;
    var emailvalue = document.getElementById("inputEmail").value;
    firebase.auth().signInWithEmailAndPassword(emailvalue, passvalue)
    .then((userCredential) => {
      // Signed in
      window.location.href = "../Home/home.html"
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}
function validationLogin () {
    var passvalue = document.getElementById("inputPass").value;
    var emailvalue = document.getElementById("inputEmail").value;
    if(passvalue.length >=6 && emailvalue != "")
        {
            loginse();
            return false
        }
        else if(passvalue.length < 1 && emailvalue != ""){
            style_error(3)
            return false
        }
        else if(passvalue.length < 6 && emailvalue != ""){
            style_error(4)
            return false
        }
        else if(passvalue != "" && emailvalue == ""){
            style_error(1)
            return false
        }
    else if(passvalue.length == 0 && emailvalue == ""){
        style_error(1)
        style_error(3)
        return false
    }
}
function validateEmail2 () {
    var emailvalue2 = document.getElementById("inputEmail2").value;
    emailvalue2 == ""? style_error(6) : style_error(7)
}
function validatePass2 () {
    var passvalue2 = document.getElementById("inputPass2").value;
    if(passvalue2 == "") style_error(8)
    else if(passvalue2.length <6 && passvalue2.length >0) style_error(9)
    else if(passvalue2.length >=6) style_error(10);
}
function validatePassAgain() {
    var passvalue2 = document.getElementById("inputPass2").value;
    var pass2Again2 = document.getElementById("passAgain").value;
    console.log(passvalue2)
    console.log(pass2Again2)
    if(pass2Again2.length == 0)
    style_error(11) 
    else if(pass2Again2 != passvalue2)
    {
    style_error(12)
    }
    else
    style_error(13)
}
const loginss = () => {
    var emailvalue = document.getElementById("inputEmail2").value;
    var passvalue2 = document.getElementById("inputPass2").value;
    firebase.auth().createUserWithEmailAndPassword(emailvalue, passvalue2)
    .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    // ...
    return false
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    console.log(errorCode)
    return false
    // ..
  });
  alert('true')
}

function validationRegister () {
    var emailvalue = document.getElementById("inputEmail2").value;
    var passvalue2 = document.getElementById("inputPass2").value;
    var pass2Again = document.getElementById("passAgain").value;
    let agree = document.getElementById("agree");
    console.log(emailvalue !="" && passvalue2 !="" && pass2Again==passvalue2)
    if(emailvalue == "" && passvalue2 =="" && pass2Again =="")
    {style_error(6)
    style_error(8)
    style_error(11)
    return false}
    else if(emailvalue !="" && passvalue2 !="" && pass2Again==passvalue2 &&agree.checked){
        loginss();
        return false
    }
    else if(agree)
    {
        ifagree.style.color ="red"
        return false
    }
    else {
        return false
    }
    
}













function register() {
    rgt.classList.add('is')
    lg.classList.add('is')
    console.log('add')
    bt.classList.add('register')
}
function login() {
    rgt.classList.remove('is')
    lg.classList.remove('is')
    bt.classList.remove('register')
    console.log('hoehwo')
}