window.addEventListener("scroll", function(){
    var navbar = document.querySelector('.navbar'); // Fixed the syntax here
    navbar.classList.toggle("sticky", window.scrollY > 0);
});