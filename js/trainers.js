/* =========================================================
   Окно «Подробнее» у тренеров

   ВАЖНО: кроме образования Марины Орловой (оно взято из макета)
   все данные ниже — ЗАГЛУШКИ. Замените их реальной информацией.

   Как устроены данные:
   - L(ru, kk, en) — текст на трёх языках;
   - вверху лежит «каталог» (вузы, программы, места работы, награды),
     ниже у каждого тренера просто ссылки на записи каталога + даты;
   - период — [год, месяц]; end: null означает «по настоящее время».
   ========================================================= */
(function () {
  'use strict';

  function L(ru, kk, en) { return { ru: ru, kk: kk, en: en }; }

  /* ----------------------------- каталог ----------------------------- */
  var INST = {
    polytech: L('Санкт-Петербургский политехнический университет Петра Великого',
                'Ұлы Петр атындағы Санкт-Петербург политехникалық университеті',
                'Peter the Great St. Petersburg Polytechnic University'),
    msu:      L('Московский государственный университет имени М. В. Ломоносова',
                'М. В. Ломоносов атындағы Мәскеу мемлекеттік университеті',
                'Lomonosov Moscow State University'),
    hse:      L('Национальный исследовательский университет «Высшая школа экономики»',
                '«Жоғары экономика мектебі» ұлттық зерттеу университеті',
                'HSE University'),
    pedu:     L('Московский педагогический государственный университет',
                'Мәскеу педагогикалық мемлекеттік университеті',
                'Moscow State Pedagogical University')
  };

  var FACULTY = {
    cs:    L('Компьютерных наук и технологий', 'Компьютерлік ғылымдар және технологиялар', 'Computer Science and Technology'),
    robo:  L('Информатики и робототехники', 'Информатика және робототехника', 'Informatics and Robotics'),
    ped:   L('Педагогического образования', 'Педагогикалық білім', 'Pedagogical Education')
  };

  var SPECIALITY = {
    math:  L('Математика и компьютерные науки', 'Математика және компьютерлік ғылымдар', 'Mathematics and Computer Science'),
    mech:  L('Мехатроника и робототехника', 'Мехатроника және робототехника', 'Mechatronics and Robotics'),
    soft:  L('Программная инженерия', 'Бағдарламалық инженерия', 'Software Engineering'),
    edu:   L('Педагогическое образование (информатика)', 'Педагогикалық білім (информатика)', 'Pedagogical Education (Informatics)')
  };

  var STUDY_FORM = {
    full:  L('Очная', 'Күндізгі', 'Full-time')
  };

  var PROGRAM = {
    model3d: L('Программа дополнительного образования «3D Моделирование»',
               '«3D Модельдеу» қосымша білім беру бағдарламасы',
               'Continuing education programme “3D Modelling”'),
    robo:    L('Программа повышения квалификации «Основы робототехники»',
               '«Робототехника негіздері» біліктілікті арттыру бағдарламасы',
               'Professional development programme “Fundamentals of Robotics”'),
    python:  L('Курс «Python для преподавателей»',
               '«Мұғалімдерге арналған Python» курсы',
               'Course “Python for Teachers”'),
    stem:    L('Курс «Методика преподавания STEM»',
               '«STEM оқыту әдістемесі» курсы',
               'Course “STEM Teaching Methodology”')
  };

  var VENUE = {
    polytech: L('Институт дополнительного образования «Политех»',
                '«Политех» қосымша білім беру институты',
                '“Polytech” Institute of Continuing Education'),
    online:   L('Онлайн-формат', 'Онлайн форматта', 'Online')
  };

  var JOB = {
    school:  { org: L('Общеобразовательная школа', 'Жалпы білім беретін мектеп', 'Secondary school'),
               role: L('Учитель информатики', 'Информатика мұғалімі', 'Computer science teacher') },
    redlab:  { org: L('R:ED LAB', 'R:ED LAB', 'R:ED LAB'),
               role: L('Преподаватель робототехники', 'Робототехника оқытушысы', 'Robotics teacher') },
    centre:  { org: L('Центр дополнительного образования', 'Қосымша білім беру орталығы', 'Centre for continuing education'),
               role: L('Преподаватель программирования', 'Бағдарламалау оқытушысы', 'Programming teacher') },
    trainer: { org: L('ROBO SCHOOL', 'ROBO SCHOOL', 'ROBO SCHOOL'),
               role: L('Тренер курсов повышения квалификации', 'Біліктілікті арттыру курстарының тренері', 'Trainer, professional development courses') }
  };

  var AWARD = {
    fest: { title: L('Диплом победителя регионального конкурса «РобоФест»',
                     '«РобоФест» өңірлік байқауы жеңімпазының дипломы',
                     'Winner’s diploma, regional “RoboFest” competition'),
            org:   L('Оргкомитет конкурса', 'Байқаудың ұйымдастыру комитеті', 'Competition organising committee') },
    stem: { title: L('Благодарность за вклад в развитие STEM-образования',
                     'STEM-білімді дамытуға қосқан үлесі үшін алғыс хат',
                     'Letter of appreciation for contribution to STEM education'),
            org:   L('Управление образования', 'Білім басқармасы', 'Department of Education') },
    best: { title: L('Лучший преподаватель года', 'Жылдың үздік оқытушысы', 'Teacher of the Year'),
            org:   L('ROBO SCHOOL', 'ROBO SCHOOL', 'ROBO SCHOOL') }
  };

  /* ----------------------------- тренеры ----------------------------- */
  var TRAINERS = {
    irina: {
      photo: 'img/trainers/irina.jpg', role: 'role.robo',
      education: { start: [2005, 9], end: [2010, 6], inst: 'polytech', faculty: 'robo', speciality: 'mech', form: 'full' },
      courses: [{ start: [2019, 3], end: [2019, 6], program: 'robo', venue: 'polytech' }],
      work: [
        { start: [2012, 9], end: [2018, 6], job: 'school' },
        { start: [2018, 9], end: null, job: 'redlab' }
      ],
      awards: [{ year: 2021, award: 'fest' }]
    },
    marina: {
      photo: 'img/trainers/marina.jpg', role: 'role.robo',
      /* из макета */
      education: { start: [1995, 9], end: [2000, 6], inst: 'polytech', faculty: 'cs', speciality: 'math', form: 'full' },
      courses: [
        { start: [2020, 11], end: [2021, 2], program: 'model3d', venue: 'polytech' },
        { start: [2021, 3], end: [2021, 6], program: 'robo', venue: 'polytech' }
      ],
      work: [
        { start: [2001, 9], end: [2015, 6], job: 'school' },
        { start: [2015, 9], end: null, job: 'trainer' }
      ],
      awards: [{ year: 2020, award: 'stem' }, { year: 2022, award: 'best' }]
    },
    maxim: {
      photo: 'img/trainers/maxim.jpg', role: 'role.prog',
      education: { start: [2008, 9], end: [2013, 6], inst: 'hse', faculty: 'cs', speciality: 'soft', form: 'full' },
      courses: [{ start: [2021, 2], end: [2021, 5], program: 'python', venue: 'online' }],
      work: [
        { start: [2013, 9], end: [2019, 8], job: 'centre' },
        { start: [2019, 9], end: null, job: 'redlab' }
      ],
      awards: [{ year: 2022, award: 'fest' }]
    },
    konstantin: {
      photo: 'img/trainers/konstantin.jpg', role: 'role.robo',
      education: { start: [2002, 9], end: [2007, 6], inst: 'msu', faculty: 'cs', speciality: 'math', form: 'full' },
      courses: [{ start: [2018, 9], end: [2018, 12], program: 'stem', venue: 'polytech' }],
      work: [
        { start: [2008, 9], end: [2016, 6], job: 'school' },
        { start: [2016, 9], end: null, job: 'trainer' }
      ],
      awards: [{ year: 2019, award: 'best' }]
    },
    anna: {
      photo: 'img/trainers/anna.jpg', role: 'role.prog',
      education: { start: [2012, 9], end: [2017, 6], inst: 'pedu', faculty: 'ped', speciality: 'edu', form: 'full' },
      courses: [{ start: [2020, 9], end: [2020, 12], program: 'python', venue: 'online' }],
      work: [
        { start: [2017, 9], end: [2021, 6], job: 'school' },
        { start: [2021, 9], end: null, job: 'centre' }
      ],
      awards: [{ year: 2023, award: 'stem' }]
    }
  };

  /* ----------------------------- помощники ----------------------------- */
  var i18n = window.RoboI18n;
  function tr(key) { return i18n.t(key); }
  function pick(obj) { return obj[i18n.lang] || obj.ru; }

  /* названия месяцев заданы вручную — так они одинаково работают во всех браузерах */
  var MONTHS = {
    ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    kk: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };

  function monthYear(ym) {
    return (MONTHS[i18n.lang] || MONTHS.ru)[ym[1] - 1] + ' ' + ym[0];
  }

  function period(start, end) {
    return monthYear(start) + ' — ' + (end ? monthYear(end) : tr('tm.present'));
  }

  function line(text, cls) {
    var p = document.createElement('p');
    p.textContent = text;
    if (cls) p.className = cls;
    return p;
  }

  function entry(lines) {
    var box = document.createElement('div');
    box.className = 'tm__entry';
    lines.forEach(function (l) { box.appendChild(line(l)); });
    return box;
  }

  function heading(text) {
    var h = document.createElement('h4');
    h.textContent = text;
    return h;
  }

  /* ----------------------------- вкладки ----------------------------- */
  var TABS = {
    edu: function (tn, frag) {
      var e = tn.education;
      frag.appendChild(entry([
        period(e.start, e.end),
        pick(INST[e.inst]),
        tr('tm.faculty') + ': ' + pick(FACULTY[e.faculty]),
        tr('tm.speciality') + ': ' + pick(SPECIALITY[e.speciality]),
        tr('tm.form') + ': ' + pick(STUDY_FORM[e.form])
      ]));

      if (tn.courses && tn.courses.length) {
        frag.appendChild(heading(tr('tm.courses')));
        tn.courses.forEach(function (c) {
          frag.appendChild(entry([
            period(c.start, c.end),
            pick(PROGRAM[c.program]),
            tr('tm.venue') + ': ' + pick(VENUE[c.venue])
          ]));
        });
      }
    },

    work: function (tn, frag) {
      (tn.work || []).forEach(function (w) {
        var job = JOB[w.job];
        frag.appendChild(entry([
          period(w.start, w.end),
          pick(job.org),
          tr('tm.position') + ': ' + pick(job.role)
        ]));
      });
    },

    awards: function (tn, frag) {
      (tn.awards || []).forEach(function (a) {
        var award = AWARD[a.award];
        frag.appendChild(entry([
          String(a.year),
          pick(award.title),
          tr('tm.organizer') + ': ' + pick(award.org)
        ]));
      });
    }
  };

  /* ----------------------------- модальное окно ----------------------------- */
  var modal = document.getElementById('trainer-modal');
  if (!modal) return;

  var dialog = modal.querySelector('.modal__dialog');
  var photo = document.getElementById('tm-photo');
  var nameEl = document.getElementById('tm-name');
  var roleEl = document.getElementById('tm-role');
  var body = document.getElementById('tm-body');
  var tabs = Array.prototype.slice.call(modal.querySelectorAll('[data-tab]'));

  var state = { id: null, tab: 'edu', opener: null };

  function updateScrollHint() {
    var scrollable = body.scrollHeight > body.clientHeight + 2;
    var atEnd = body.scrollTop + body.clientHeight >= body.scrollHeight - 2;
    body.classList.toggle('has-more', scrollable && !atEnd);
  }

  function renderBody() {
    var tn = TRAINERS[state.id];
    var frag = document.createDocumentFragment();
    TABS[state.tab](tn, frag);
    if (!frag.childNodes.length) frag.appendChild(line(tr('tm.empty')));
    body.textContent = '';
    body.appendChild(frag);
    body.scrollTop = 0;
    body.setAttribute('aria-labelledby', 'tab-' + state.tab);
    updateScrollHint();
  }

  function renderHead() {
    var tn = TRAINERS[state.id];
    var name = tr('trainer.' + state.id + '.name');
    photo.src = tn.photo;
    photo.alt = name;
    nameEl.textContent = name;
    roleEl.textContent = tr(tn.role);
  }

  function selectTab(tab, focus) {
    state.tab = tab;
    tabs.forEach(function (btn) {
      var on = btn.dataset.tab === tab;
      btn.setAttribute('aria-selected', String(on));
      btn.tabIndex = on ? 0 : -1;
      if (on && focus) btn.focus();
    });
    renderBody();
  }

  function scrollbarWidth() { return window.innerWidth - document.documentElement.clientWidth; }

  function open(id, opener) {
    if (!TRAINERS[id]) return;
    state.id = id;
    state.opener = opener || null;

    renderHead();
    selectTab('edu', false);

    var sw = scrollbarWidth();
    if (sw > 0) document.body.style.paddingRight = sw + 'px';
    document.body.classList.add('modal-open');

    modal.hidden = false;
    /* следующий кадр — чтобы сработала анимация появления */
    requestAnimationFrame(function () {
      modal.classList.add('is-open');
      modal.querySelector('.modal__close').focus({ preventScroll: true });
      updateScrollHint();
    });
  }

  function close() {
    if (modal.hidden) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '';
    setTimeout(function () { modal.hidden = true; }, 200);
    if (state.opener) state.opener.focus({ preventScroll: true });
    state.id = null;
  }

  /* открыть */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-trainer]');
    if (btn) open(btn.dataset.trainer, btn);
  });

  /* закрыть: крестик/оверлей */
  modal.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]')) close();
  });

  /* вкладки */
  tabs.forEach(function (btn, i) {
    btn.addEventListener('click', function () { selectTab(btn.dataset.tab, false); });
    btn.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      selectTab(tabs[(i + d + tabs.length) % tabs.length].dataset.tab, true);
    });
  });

  body.addEventListener('scroll', updateScrollHint, { passive: true });
  window.addEventListener('resize', function () { if (!modal.hidden) updateScrollHint(); });

  /* Esc и удержание фокуса внутри окна */
  document.addEventListener('keydown', function (e) {
    if (modal.hidden) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;

    var focusable = dialog.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  /* смена языка при открытом окне */
  document.addEventListener('langchange', function () {
    if (modal.hidden || !state.id) return;
    renderHead();
    renderBody();
  });
})();
