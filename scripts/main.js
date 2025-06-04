// JavaScript to handle active states based on scroll position
  window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(function(section) {
      var top = section.offsetTop - 150; // Adjust offset as needed
      var id = section.getAttribute('id');
      
      if (window.scrollY >= top) {
        navLinks.forEach(function(navLink) {
          navLink.classList.remove('active');
        });
        document.querySelector('nav a[href="index.html#' + id + '"]').classList.add('active');
      }
    });
  });