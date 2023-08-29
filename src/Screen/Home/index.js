var sw = document.getElementById('sw');
var swv = document.getElementById('swv');
var add = document.getElementById('add');

var input = document.querySelector('.inputModule')
var openmenu = document.getElementById("boxmenu");
var listMd = document.querySelector('.bodyvalue')




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


add.addEventListener('submit', (e) => {
  e.preventDefault();
  let val = input.value.trim();
  if(val) {
    alert(val)
      addmodule({
        text : val,
      })
  }
  else alert('no value')
})

function addmodule (value) {
  var li = document.createElement('li')
  li.innerHTML = `
  <div class="list">
  <li><header>${value.text}</header></li>
  <li><button>zf</button></li>
  </div>
  `
  listMd.appendChild(li)
}
