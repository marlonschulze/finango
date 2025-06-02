  document.addEventListener('DOMContentLoaded', function() {
    if(localStorage.getItem('logado') !== 'true'){
      window.location.href = 'index.html';
  }

    document.getElementById('logout').addEventListener('click', function(){
      localStorage.removeItem('logado');
      window.location.href = 'index.html';
    });
  });

  //menu hamburger mobile
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');


  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('show');
  });

  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
      hamburger.classList.remove('active');
    })
  })