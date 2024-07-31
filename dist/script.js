

var hamburger = document.querySelector('#hamburger');
var navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });

window.onscroll = function ()
{

}


