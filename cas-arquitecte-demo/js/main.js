/* Ca s'Arquitecte · demo no oficial · comportamiento general */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Menú móvil ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var panel = document.getElementById('menu-movil');
  if (toggle && panel) {
    var label = toggle.querySelector('.menu-toggle__label');
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      panel.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      if (label) label.textContent = open ? 'Cerrar' : 'Menú';
      if (open) {
        panel.removeAttribute('inert');
      } else {
        panel.setAttribute('inert', '');
      }
    };
    setOpen(false);
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia('(min-width: 900px)').addEventListener('change', function (e) {
      if (e.matches) setOpen(false);
    });
  }

  /* ---------- Aparición suave al hacer scroll ---------- */
  var items = document.querySelectorAll('.reveal');
  if (items.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      items.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- Estado "abierto / cerrado" según el horario publicado ----------
     Horario publicado (por verificar): martes a sábado, 19:30 a 23:00.
     Se calcula con la hora de Madrid, vea la web desde donde la vea. */
  var OPEN_DAYS = [2, 3, 4, 5, 6]; // 0 = domingo
  var OPEN_FROM = 19 * 60 + 30;
  var OPEN_TO = 23 * 60;

  function madridNow() {
    var parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Madrid', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
    }).formatToParts(new Date());
    var get = function (t) { return parts.filter(function (p) { return p.type === t; })[0].value; };
    var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { day: days[get('weekday')], minutes: (parseInt(get('hour'), 10) % 24) * 60 + parseInt(get('minute'), 10) };
  }

  function updateStatus() {
    var nodes = document.querySelectorAll('[data-open-status]');
    var rows = document.querySelectorAll('[data-day]');
    if (!nodes.length && !rows.length) return;
    var now;
    try { now = madridNow(); } catch (err) { return; }

    var isOpenDay = OPEN_DAYS.indexOf(now.day) !== -1;
    var open = isOpenDay && now.minutes >= OPEN_FROM && now.minutes < OPEN_TO;
    var text;
    if (open) {
      text = 'Abierto ahora · hasta las 23:00';
    } else if (isOpenDay && now.minutes < OPEN_FROM) {
      text = 'Cerrado ahora · abre hoy a las 19:30';
    } else {
      var d = now.day, add = 0;
      do { d = (d + 1) % 7; add++; } while (OPEN_DAYS.indexOf(d) === -1);
      var names = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
      text = 'Cerrado ahora · abre ' + (add === 1 ? 'mañana' : 'el ' + names[d]) + ' a las 19:30';
    }
    nodes.forEach(function (el) {
      el.textContent = text;
      el.dataset.state = open ? 'open' : 'closed';
    });
    rows.forEach(function (row) {
      row.classList.toggle('is-today', parseInt(row.dataset.day, 10) === now.day);
    });
  }
  updateStatus();
  setInterval(updateStatus, 60 * 1000);

  /* ---------- Año del pie ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
