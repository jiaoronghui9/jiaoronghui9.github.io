'use strict';
(function () {
  document.documentElement.classList.replace('no-js', 'js');
  var toggle = document.querySelector('.mobile-toggle');
  var links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  function setMenu(open) {
    links.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  links.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('nav')) setMenu(false);
  });
  var desktop = window.matchMedia('(min-width: 1025px)');
  desktop.addEventListener('change', function () { setMenu(false); });
}());
