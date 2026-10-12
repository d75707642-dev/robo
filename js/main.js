(function () {
  'use strict';

  /* ---------- мобильное меню ---------- */
  var menu = document.getElementById('mobile-menu');
  var burger = document.querySelector('.burger');
  var closeBtn = document.querySelector('.mobile-menu__close');

  function setMenu(open) {
    if (!menu) return;
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
  }

  if (menu && burger) {
    burger.addEventListener('click', function () { setMenu(true); });
    closeBtn.addEventListener('click', function () { setMenu(false); });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* ---------- подсказка «i» (тап на телефоне) ---------- */
  var tip = document.querySelector('.tip');
  if (tip) {
    tip.querySelector('.tip__btn').addEventListener('click', function (e) {
      e.stopPropagation();
      tip.classList.toggle('is-open');
    });
    document.addEventListener('click', function () { tip.classList.remove('is-open'); });
  }

  /* ---------- слайдер тренеров ---------- */
  var track = document.getElementById('trainers-track');
  var thumb = document.getElementById('trainers-thumb');
  var arrows = document.querySelectorAll('.slider__arrows .arrow');

  function updateSlider() {
    if (!track || !thumb) return;
    var max = track.scrollWidth - track.clientWidth;
    var ratio = track.clientWidth / track.scrollWidth;
    var width = Math.max(ratio * 100, 15);
    var progress = max > 0 ? track.scrollLeft / max : 0;
    thumb.style.width = width + '%';
    thumb.style.transform = 'translateX(' + progress * (100 / width * 100 - 100) + '%)';
    arrows[0].disabled = track.scrollLeft <= 2;
    arrows[1].disabled = track.scrollLeft >= max - 2;
  }

  if (track) {
    arrows.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var card = track.querySelector('.trainer');
        var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        track.scrollBy({ left: Number(btn.dataset.dir) * (card.offsetWidth + gap), behavior: 'smooth' });
      });
    });
    track.addEventListener('scroll', updateSlider, { passive: true });
    window.addEventListener('resize', updateSlider);
    updateSlider();
  }

  /* ---------- кнопка «наверх» ---------- */
  var toTop = document.getElementById('to-top');
  if (toTop) {
    var topTicking = false;
    function updateToTop() {
      var show = window.scrollY > 500;
      if (show) toTop.hidden = false;
      toTop.classList.toggle('is-visible', show);
      topTicking = false;
    }
    window.addEventListener('scroll', function () {
      if (!topTicking) { topTicking = true; requestAnimationFrame(updateToTop); }
    }, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    updateToTop();
  }

  /* ---------- форма заявки ---------- */
  var form = document.getElementById('apply-form');
  var statusEl = document.getElementById('form-status');
  var planField = document.getElementById('plan-field');

  document.querySelectorAll('[data-plan]').forEach(function (link) {
    link.addEventListener('click', function () { planField.value = link.dataset.plan; });
  });

  /* сообщение хранится как ключ перевода — при смене языка оно переведётся само */
  function setStatus(key) {
    statusEl.dataset.i18n = key;
    statusEl.textContent = window.RoboI18n.t(key);
  }

  function valid(input) {
    var v = input.value.trim();
    if (input.name === 'name') return v.length >= 2;
    if (input.name === 'phone') return v.replace(/\D/g, '').length >= 10;
    if (input.name === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    return true;
  }

  if (form) {
    form.addEventListener('input', function (e) { e.target.classList.remove('is-invalid'); });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = Array.prototype.filter.call(
        form.querySelectorAll('input[name=name], input[name=phone], input[name=email]'),
        function (input) {
          var ok = valid(input);
          input.classList.toggle('is-invalid', !ok);
          return !ok;
        }
      );

      if (bad.length) {
        setStatus('form.error');
        bad[0].focus();
        return;
      }

      /* Здесь отправьте данные на ваш сервер, например:
         fetch('/api/apply', { method: 'POST', body: new FormData(form) }) */
      setStatus('form.success');
      form.reset();
      planField.value = '';
    });
  }
})();
