  localStorage.setItem('user', 'admin');
  localStorage.setItem('email', 'admin123@gmail.com');
  localStorage.setItem('password', 'admin123')
  
  const btnLogin = document.getElementById('btn-login');
  btnLogin.addEventListener('click', function(event){
  event.preventDefault();

  const user = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const userCorrect = localStorage.getItem('user');
  const emailCorrect = localStorage.getItem('email');
  const passwordCorrect = localStorage.getItem('password');

  if(user === userCorrect && email === emailCorrect && password === passwordCorrect){
    localStorage.setItem('logado', 'true');
    window.location.href = 'finango.html';
  } else{
      alert(`Login attempt failed. 
        Try again!`);
  }
})

/*password visibility*/ 
function passwordVisibility(){
  const passwordNotVisible = document.getElementById('password');
  const eyeIcon = document.getElementById('togglePassword');

  if(passwordNotVisible.type === "password"){
    passwordNotVisible.type = "text";
    eyeIcon.innerHTML = "👁";
  } else{
    passwordNotVisible.type = "password";
    eyeIcon.innerHTML = "🕶️"
  }
}