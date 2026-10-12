/* =========================================================
   Переключение языка: RU / KZ / EN
   Тексты в HTML помечены атрибутами:
     data-i18n="ключ"              — textContent
     data-i18n-html="ключ"         — innerHTML (для <br>, <strong>)
     data-i18n-placeholder="ключ"  — placeholder
     data-i18n-alt="ключ"          — alt
     data-i18n-aria="ключ"         — aria-label
   Чтобы поправить перевод — меняйте строки ниже.
   ========================================================= */
(function () {
  'use strict';

  var STORAGE_KEY = 'robo-school-lang';
  var LOCALES = { ru: 'ru-RU', kk: 'kk-KZ', en: 'en-GB' };

  /* Цены и валюта для каждого языка. Меняйте числа здесь.
     kk и en — ориентировочный пересчёт из рублей, поставьте свои цены. */
  var PRICES = {
    ru: { pro: 20000, robo: 15000, prog: 10000, symbol: '₽', after: true },
    kk: { pro: 120000, robo: 90000, prog: 60000, symbol: '₸', after: true },
    en: { pro: 250, robo: 190, prog: 125, symbol: '$', after: false }
  };

  function formatPrice(key) {
    var p = PRICES[current];
    var n = String(p[key]).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return p.after ? n + '\u00A0' + p.symbol : p.symbol + n;
  }

  var DICT = {
    /* ---------------------------- Русский ---------------------------- */
    ru: {
      'meta.title': 'ROBO SCHOOL — курсы повышения квалификации по робототехнике',
      'meta.description': 'Курсы повышения квалификации по робототехнике для педагогов начальной школы.',

      'nav.about': 'О школе',
      'nav.trainers': 'Тренеры',
      'nav.pricing': 'Стоимость',

      'aria.nav': 'Основное меню',
      'aria.lang': 'Язык',
      'aria.call': 'Позвонить',
      'aria.menu': 'Открыть меню',
      'aria.menuClose': 'Закрыть меню',
      'aria.trainers': 'Список тренеров',
      'aria.prev': 'Назад',
      'aria.next': 'Вперёд',
      'aria.top': 'Наверх',

      'hero.text': 'Курсы повышения квалификации по робототехнике <br>для педагогов начальной школы',
      'hero.cta': 'Записаться на курс',
      'hero.alt': 'Улыбающаяся девушка с блокнотами',

      'about.lead': '<strong>Robo School</strong> — учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования',
      'stats.1': 'УМК по различным направлениям по робототехнике',
      'stats.2': 'Школ, в которых запущена робототехника',
      'stats.3': 'Педагогов прошедших курсы повышения квалификации',
      'stats.4': 'Обученных детей на базе собственных центров',

      'benefits.title': 'Что вы получите после курса',
      'benefits.1.title': 'Удостоверение',
      'benefits.1.text': 'Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях',
      'benefits.2.title': 'Знания',
      'benefits.2.text': 'По основам разработки учебно-методических комплексов по робототехнике и программированию',
      'benefits.3.title': 'Практику',
      'benefits.3.tip': 'При наличии свободных мест',
      'benefits.3.text': 'Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)',

      'trainers.title': 'Профессиональные тренеры',
      'trainer.more': 'Подробнее',
      'trainer.irina.name': 'Ирина Лайм',
      'trainer.marina.name': 'Марина Орлова',
      'trainer.maxim.name': 'Максим Петров',
      'trainer.konstantin.name': 'Константин Назаров',
      'trainer.anna.name': 'Анна Соколова',
      'role.robo': 'преподаватель по робототехнике',
      'role.prog': 'преподаватель по программированию',

      'pricing.title': 'Выберите нужный пакет',
      'pricing.pro': 'УМК по робототехнике<br>и программированию',
      'pricing.robo': 'УМК по робототехнике',
      'pricing.prog': 'УМК по программированию',
      'pricing.cta': 'Оставить заявку',

      'apply.title': 'Запишитесь на курс<br>со скидкой 10%',
      'apply.note': 'Акция действительна до 10 марта 2022 года',
      'form.name': 'Имя',
      'form.phone': 'Телефон',
      'form.submit': 'Оформить заявку',
      'form.error': 'Проверьте, пожалуйста, выделенные поля.',
      'form.success': 'Спасибо! Заявка принята, мы свяжемся с вами.',

      'modal.close': 'Закрыть',
      'tm.tab.edu': 'Образование',
      'tm.tab.work': 'Опыт работы',
      'tm.tab.awards': 'Награды',
      'tm.faculty': 'Факультет',
      'tm.speciality': 'Специальность',
      'tm.form': 'Форма обучения',
      'tm.courses': 'Курсы и тренинги',
      'tm.venue': 'Место проведения',
      'tm.position': 'Должность',
      'tm.organizer': 'Организатор',
      'tm.present': 'по настоящее время',
      'tm.empty': 'Информация скоро появится'
    },

    /* ----------------------------- Қазақша ----------------------------- */
    kk: {
      'meta.title': 'ROBO SCHOOL — робототехника бойынша біліктілікті арттыру курстары',
      'meta.description': 'Бастауыш сынып мұғалімдеріне арналған робототехника бойынша біліктілікті арттыру курстары.',

      'nav.about': 'Мектеп туралы',
      'nav.trainers': 'Тренерлер',
      'nav.pricing': 'Құны',

      'aria.nav': 'Негізгі мәзір',
      'aria.lang': 'Тіл',
      'aria.call': 'Қоңырау шалу',
      'aria.menu': 'Мәзірді ашу',
      'aria.menuClose': 'Мәзірді жабу',
      'aria.trainers': 'Тренерлер тізімі',
      'aria.prev': 'Артқа',
      'aria.next': 'Алға',
      'aria.top': 'Жоғарыға',

      'hero.text': 'Бастауыш сынып мұғалімдеріне арналған <br>робототехника бойынша біліктілікті арттыру курстары',
      'hero.cta': 'Курсқа жазылу',
      'hero.alt': 'Блокноттарды құшақтаған күлімдеген қыз',

      'about.lead': '<strong>Robo School</strong> — робототехника және бағдарламалау саласында педагогикалық кадр резервін қалыптастыруға арналған мекеме',
      'stats.1': 'Робототехника бойынша әртүрлі бағыттағы ОӘК',
      'stats.2': 'Робототехника іске қосылған мектептер',
      'stats.3': 'Біліктілікті арттыру курстарынан өткен педагогтер',
      'stats.4': 'Өз орталықтарымыздың базасында оқытылған балалар',

      'benefits.title': 'Курстан кейін сіз не аласыз',
      'benefits.1.title': 'Куәлік',
      'benefits.1.text': 'Білім беру мекемелерінде 6-12 жас аралығындағы балаларға робототехниканы оқытуға құқық беретін',
      'benefits.2.title': 'Білім',
      'benefits.2.text': 'Робототехника және бағдарламалау бойынша оқу-әдістемелік кешендерді әзірлеу негіздері бойынша',
      'benefits.3.title': 'Тәжірибе',
      'benefits.3.tip': 'Бос орын болған жағдайда',
      'benefits.3.text': 'R:ED LAB базасында робототехниканы оқыту бойынша тәжірибеден өту мүмкіндігі (офлайн немесе онлайн форматта)',

      'trainers.title': 'Кәсіби тренерлер',
      'trainer.more': 'Толығырақ',
      'trainer.irina.name': 'Ирина Лайм',
      'trainer.marina.name': 'Марина Орлова',
      'trainer.maxim.name': 'Максим Петров',
      'trainer.konstantin.name': 'Константин Назаров',
      'trainer.anna.name': 'Анна Соколова',
      'role.robo': 'робототехника пәнінің оқытушысы',
      'role.prog': 'бағдарламалау пәнінің оқытушысы',

      'pricing.title': 'Қажетті пакетті таңдаңыз',
      'pricing.pro': 'Робототехника және<br>бағдарламалау бойынша ОӘК',
      'pricing.robo': 'Робототехника бойынша ОӘК',
      'pricing.prog': 'Бағдарламалау бойынша ОӘК',
      'pricing.cta': 'Өтінім қалдыру',

      'apply.title': 'Курсқа 10% жеңілдікпен<br>жазылыңыз',
      'apply.note': 'Акция 2022 жылғы 10 наурызға дейін жарамды',
      'form.name': 'Аты-жөніңіз',
      'form.phone': 'Телефон',
      'form.submit': 'Өтінімді рәсімдеу',
      'form.error': 'Белгіленген өрістерді тексеріңіз.',
      'form.success': 'Рақмет! Өтінім қабылданды, біз сізбен байланысамыз.',

      'modal.close': 'Жабу',
      'tm.tab.edu': 'Білімі',
      'tm.tab.work': 'Жұмыс тәжірибесі',
      'tm.tab.awards': 'Марапаттар',
      'tm.faculty': 'Факультет',
      'tm.speciality': 'Мамандығы',
      'tm.form': 'Оқу нысаны',
      'tm.courses': 'Курстар мен тренингтер',
      'tm.venue': 'Өткізілген орны',
      'tm.position': 'Лауазымы',
      'tm.organizer': 'Ұйымдастырушы',
      'tm.present': 'қазіргі уақытқа дейін',
      'tm.empty': 'Ақпарат жақында қосылады'
    },

    /* ---------------------------- English ---------------------------- */
    en: {
      'meta.title': 'ROBO SCHOOL — professional development courses in robotics',
      'meta.description': 'Professional development courses in robotics for primary school teachers.',

      'nav.about': 'About',
      'nav.trainers': 'Trainers',
      'nav.pricing': 'Pricing',

      'aria.nav': 'Main menu',
      'aria.lang': 'Language',
      'aria.call': 'Call us',
      'aria.menu': 'Open menu',
      'aria.menuClose': 'Close menu',
      'aria.trainers': 'List of trainers',
      'aria.prev': 'Previous',
      'aria.next': 'Next',
      'aria.top': 'Back to top',

      'hero.text': 'Professional development courses in robotics <br>for primary school teachers',
      'hero.cta': 'Enrol in the course',
      'hero.alt': 'Smiling young woman holding notebooks',

      'about.lead': '<strong>Robo School</strong> is an institution that builds a talent pool of teachers in robotics and programming',
      'stats.1': 'Teaching kits across different robotics areas',
      'stats.2': 'Schools where robotics has been launched',
      'stats.3': 'Teachers who completed our courses',
      'stats.4': 'Children taught at our own centres',

      'benefits.title': 'What you will get after the course',
      'benefits.1.title': 'Certificate',
      'benefits.1.text': 'Entitling you to teach robotics to children aged 6–12 in educational institutions',
      'benefits.2.title': 'Knowledge',
      'benefits.2.text': 'Of the basics of developing teaching kits for robotics and programming',
      'benefits.3.title': 'Practice',
      'benefits.3.tip': 'Subject to availability',
      'benefits.3.text': 'A chance to practise teaching robotics at R:ED LAB (offline or online)',

      'trainers.title': 'Professional trainers',
      'trainer.more': 'Read more',
      'trainer.irina.name': 'Irina Laim',
      'trainer.marina.name': 'Marina Orlova',
      'trainer.maxim.name': 'Maxim Petrov',
      'trainer.konstantin.name': 'Konstantin Nazarov',
      'trainer.anna.name': 'Anna Sokolova',
      'role.robo': 'robotics teacher',
      'role.prog': 'programming teacher',

      'pricing.title': 'Choose your package',
      'pricing.pro': 'Teaching kits for robotics<br>and programming',
      'pricing.robo': 'Teaching kit for robotics',
      'pricing.prog': 'Teaching kit for programming',
      'pricing.cta': 'Apply now',

      'apply.title': 'Enrol in the course<br>with a 10% discount',
      'apply.note': 'Offer valid until 10 March 2022',
      'form.name': 'Name',
      'form.phone': 'Phone',
      'form.submit': 'Submit application',
      'form.error': 'Please check the highlighted fields.',
      'form.success': 'Thank you! Your application has been received, we will contact you.',

      'modal.close': 'Close',
      'tm.tab.edu': 'Education',
      'tm.tab.work': 'Work experience',
      'tm.tab.awards': 'Awards',
      'tm.faculty': 'Faculty',
      'tm.speciality': 'Specialty',
      'tm.form': 'Study mode',
      'tm.courses': 'Courses and training',
      'tm.venue': 'Venue',
      'tm.position': 'Position',
      'tm.organizer': 'Organiser',
      'tm.present': 'present',
      'tm.empty': 'Information coming soon'
    }
  };

  var current = 'ru';
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && DICT[saved]) current = saved;
  } catch (e) { /* localStorage может быть недоступен */ }

  function t(key) {
    return (DICT[current] && DICT[current][key]) || DICT.ru[key] || key;
  }

  function each(selector, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), fn);
  }

  function apply() {
    document.documentElement.lang = current;
    document.title = t('meta.title');
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('meta.description'));

    each('[data-i18n]', function (el) { el.textContent = t(el.dataset.i18n); });
    each('[data-i18n-html]', function (el) { el.innerHTML = t(el.dataset.i18nHtml); });
    each('[data-i18n-placeholder]', function (el) { el.placeholder = t(el.dataset.i18nPlaceholder); });
    each('[data-i18n-alt]', function (el) { el.alt = t(el.dataset.i18nAlt); });
    each('[data-price]', function (el) { el.textContent = formatPrice(el.dataset.price); });
    each('[data-i18n-aria]', function (el) { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });

    each('[data-lang]', function (btn) {
      var active = btn.dataset.lang === current;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  function setLang(lang) {
    if (!DICT[lang] || lang === current) return;
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    apply();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-lang]');
    if (btn) setLang(btn.dataset.lang);
  });

  window.RoboI18n = {
    t: t,
    setLang: setLang,
    get lang() { return current; },
    get locale() { return LOCALES[current]; }
  };

  apply();
})();
