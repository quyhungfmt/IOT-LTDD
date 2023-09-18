 const onAuth = () => {
  if(localStorage.getItem('islogin') == 'true')
    window.location.href = "./src/Screen/Home/home.html"
  else
  {
    window.location.href = "./src/Screen/Login/login.html"
    
  }
 }

 