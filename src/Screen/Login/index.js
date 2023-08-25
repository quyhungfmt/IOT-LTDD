
var ifagree = document.getElementById("ifagree");
var error_email = document.getElementById("lineEmail")
var error_pass = document.getElementById("linePass")
var titleE = document.getElementById("titleE")
var titleP = document.getElementById("titleP")

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
            error_email.style.backgroundColor = "red"
            break;
        case 2:
            // email succsess
            document.getElementById("errorEmail").innerHTML="";
            error_email.style.backgroundColor = "#45f3ff"
            break;
        case 3:
            // pass error
            document.getElementById("errorPass").innerHTML="Vui Lòng Nhập Mật Khẩu" 
            error_pass.style.backgroundColor = "red"
            break;
        case 4:
            // pass error length
            document.getElementById("errorPass").innerHTML="Mật Khẩu Phải Có Hơn 6 Kí Tự"
            error_pass.style.backgroundColor = "red"
            break;
        case 5:
            // pass succsess
            document.getElementById("errorPass").innerHTML="";
            error_pass.style.backgroundColor = "#45f3ff"
            break;
    }
}
const showTitle = (title,ishow) => {
    if(ishow)
    {
        title.style.transform = "translate(-320px,15px)"
        title.style.transition = ".5s"
        title.style.color = "#45f3ff"
    }
    else {
        title.style.transform = "translate(-320px,39px)"
        title.style.transition = ".5s"    
        title.style.color = "transparent"
    }
}
const showtitleE = () => {
    var emailvalue = document.getElementById("inputEmail").value;
    emailvalue != "" ? showTitle(titleE,1) : showTitle(titleE,0)
}
const showtitleP = () => {
    var passvalue = document.getElementById("inputPass").value;
    passvalue != "" ? showTitle(titleP,1) : showTitle(titleP,0)
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
      console.log(errorCode)
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



/*
auth/invalid-email: Địa chỉ email không hợp lệ.
auth/user-disabled: Tài khoản người dùng đã bị vô hiệu hóa.
auth/user-not-found: Không tìm thấy người dùng với địa chỉ email đã cho.
auth/wrong-password: Mật khẩu không đúng.
auth/network-request-failed: Lỗi kết nối mạng1.
*/
