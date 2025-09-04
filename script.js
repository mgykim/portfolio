window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.nav-container');
  const scrollThreshold = 100; 

  if (window.scrollY > scrollThreshold) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', function() {
  const navtext = document.querySelector('.nav-right');
  const scrollThreshold = 100; 

  if (window.scrollY > scrollThreshold) {
    navtext.classList.add('scrolled2');
  } else {
    navtext.classList.remove('scrolled2');
  }
});