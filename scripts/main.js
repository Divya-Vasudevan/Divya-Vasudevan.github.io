// JavaScript to handle active states based on scroll position
document.addEventListener('DOMContentLoaded', function() {
  const homeLink = document.querySelector('nav a[href="index.html"]');
  if (homeLink) homeLink.classList.add('active');

  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(function(section) {
      const top = section.offsetTop - 150; // Adjust offset as needed
      const id = section.getAttribute('id');
      
      if (window.scrollY >= top && id) {
        navLinks.forEach(function(navLink) {
          navLink.classList.remove('active');
          // Check if the link's href contains the current section id
          if (navLink.getAttribute('href').includes(id)) {
            navLink.classList.add('active');
          }
        });
      }
    });

    // Handle home section (top of page)
    if (window.scrollY < 100) {
      navLinks.forEach(link => link.classList.remove('active'));
      if (homeLink) homeLink.classList.add('active');
    }
  });
});