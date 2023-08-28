

var openmenu = document.getElementById("boxmenu");


document.getElementById('menu').addEventListener('click', () => {
  openmenu.classList.toggle("openmenu");
}) 


document.getElementById("logout").addEventListener('click', () => {
  alert("nso")
  firebase.auth().signOut().then(() => {
    window.location.href = "../../../index.html"
  }).catch((error) => {
    console.log(error.message)
  });
})

