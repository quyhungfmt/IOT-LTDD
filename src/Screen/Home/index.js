openmenu = document.getElementById("boxmenu");

function menu () {
  openmenu.classList.toggle("openmenu");
}

function logout() {
  firebase.auth().signOut().then(() => {
    console.log("out");
    window.location.href = "../Login/login.html"
  }).catch((error) => {
    console.log(error.message)
  });
}

