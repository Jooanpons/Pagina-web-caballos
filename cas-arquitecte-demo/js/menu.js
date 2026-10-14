/* Ca s'Arquitecte · demo no oficial · navegación por categorías de la carta */
(function () {
  'use strict';

  var nav = document.querySelector('.cat-nav');
  if (!nav) return;

  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var list = nav.querySelector('ul');
  var map = {};
  var sections = [];
  links.forEach(function (a) {
    var sec = document.getElementById(a.getAttribute('href').slice(1));
    if (sec) { map[sec.id] = a; sections.push(sec); }
  });
  if (!sections.length) return;

  function activate(id) {
    links.forEach(function (a) {
      var on = map[id] === a;
      a.classList.toggle('is-active', on);
      if (on) { a.setAttribute('aria-current', 'true'); } else { a.removeAttribute('aria-current'); }
    });
    // Mantiene visible la pestaña activa en la barra horizontal (móvil)
    var a = map[id];
    if (a && list && list.scrollWidth > list.clientWidth) {
      var target = a.offsetLeft - (list.clientWidth - a.offsetWidth) / 2;
      var smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      list.scrollTo({ left: target, behavior: smooth ? 'smooth' : 'auto' });
    }
  }

  /* Scrollspy: la categoría activa es la última cuyo inicio ya pasó la barra fija */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var offset = nav.getBoundingClientRect().bottom + 24;
      var current = sections[0].id;
      sections.forEach(function (s) {
        if (s.getBoundingClientRect().top <= offset) current = s.id;
      });
      var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = sections[sections.length - 1].id;
      if (activate.last !== current) { activate.last = current; activate(current); }
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();
