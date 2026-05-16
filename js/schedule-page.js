$(function() {

  // Header
  var header = $('<header>', { class: 'header' });
  var hi = $('<div>', { class: 'container header__top-inner' });
  hi.append($('<a>', { href: 'index.html', class: 'logo', text: 'VALMADI' }));
  var nav = $('<nav>', { class: 'nav' });
  var links = [
    ['courses.html', 'Курсы обучения'], ['webinars.html', 'Вебинары'],
    ['#', 'Видео-уроки'], ['blog.html', 'Блог'],
    ['about.html', 'О нас'], ['#', 'Приём'],
    ['schedule.html', 'Расписание'], ['#', 'Акции'], ['price.html', 'Магазин']
  ];
  $.each(links, function(i, d) {
    nav.append($('<a>', { href: d[0], class: 'nav__link' + (d[0] === 'schedule.html' ? ' nav__link--active' : ''), text: d[1] }));
  });
  hi.append(nav);
  hi.append($('<button>', { class: 'hamburger', html: '<span></span><span></span><span></span>' }));
  var contacts = $('<div>', { class: 'header__contacts' });
  contacts.append($('<a>', { href: 'tel:+78005080622', class: 'header__phone', text: '8 (800) 508-622' }));
  contacts.append($('<a>', { href: '#', title: 'VK', html: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2z"/></svg>' }));
  contacts.append($('<div>', { class: 'header__lang', text: 'RU' }));
  hi.append(contacts);
  header.append(hi);
  $('body').append(header);

  // Hero
  var hero = $('<section>', { class: 'sc-hero' });
  hero.append($('<div>', { class: 'container', html: '<h1 class="sc-hero__title">РАСПИСАНИЕ КУРСОВ</h1><p class="sc-hero__subtitle">Актуальное расписание на ближайшие месяцы</p>' }));
  $('body').append(hero);

  // Schedule table
  var section = $('<section>', { class: 'sc-page' });
  var container = $('<div>', { class: 'container' });

  var data = [
    { month: 'Май 2026', items: [
      { date: '12 мая', time: '10:00 - 16:00', course: 'Базовая косметология', type: 'Мастер-класс', price: '3000 грн', places: '5' },
      { date: '15-20 мая', time: '10:00 - 17:00', course: 'Мезотерапия и Биоревитализация', type: 'Курс', price: '10 000 грн', places: '3' },
      { date: '18 мая', time: '10:00 - 16:00', course: 'Контурная пластика лица', type: 'Мастер-класс', price: '4500 грн', places: '7' },
      { date: '22 мая', time: '10:00 - 15:00', course: 'Ботулинотерапия', type: 'Вебинар', price: 'Бесплатно', places: '20' },
      { date: '25 мая', time: '10:00 - 16:00', course: 'Вискосил, нитевой лифтинг', type: 'Мастер-класс', price: 'Бесплатно', places: '10' }
    ]},
    { month: 'Июнь 2026', items: [
      { date: '1-6 июня', time: '10:00 - 17:00', course: 'Канюльные техники', type: 'Курс', price: '12 000 грн', places: '2' },
      { date: '5 июня', time: '11:00 - 14:00', course: 'Нитевой лифтинг: новые протоколы', type: 'Вебинар', price: 'Бесплатно', places: '15' },
      { date: '10-12 июня', time: '10:00 - 16:00', course: 'Контурная пластика — филлеры', type: 'Курс', price: '11 000 грн', places: '4' },
      { date: '15 июня', time: '10:00 - 16:00', course: 'Ботулинотерапия для косметологов', type: 'Курс', price: '8 000 грн', places: '6' },
      { date: '25 июня', time: '10:00 - 15:00', course: 'Эстетическая косметология', type: 'Онлайн', price: '5 500 грн', places: '10' }
    ]}
  ];

  $.each(data, function(mi, monthData) {
    container.append($('<h2>', { class: 'sc-month', text: monthData.month }));
    var table = $('<div>', { class: 'sc-table' });
    table.append(
      '<div class="sc-row sc-header">' +
        '<span class="sc-cell sc-date">Дата</span>' +
        '<span class="sc-cell sc-time">Время</span>' +
        '<span class="sc-cell sc-course">Курс</span>' +
        '<span class="sc-cell sc-type">Тип</span>' +
        '<span class="sc-cell sc-price">Цена</span>' +
        '<span class="sc-cell sc-places">Места</span>' +
      '</div>'
    );
    $.each(monthData.items, function(ri, row) {
      var cls = ri % 2 === 0 ? ' sc-row--alt' : '';
      table.append(
        '<div class="sc-row' + cls + '">' +
          '<span class="sc-cell sc-date">' + row.date + '</span>' +
          '<span class="sc-cell sc-time">' + row.time + '</span>' +
          '<span class="sc-cell sc-course">' + row.course + '</span>' +
          '<span class="sc-cell sc-type"><span class="sc-badge sc-badge--' + row.type.replace(' ', '-').toLowerCase() + '">' + row.type + '</span></span>' +
          '<span class="sc-cell sc-price">' + row.price + '</span>' +
          '<span class="sc-cell sc-places">' + row.places + ' мест</span>' +
        '</div>'
      );
    });
    container.append(table);
  });

  // CTA
  container.append(
    '<div class="sc-cta">' +
      '<p class="sc-cta__text">Не нашли подходящую дату? Оставьте заявку — мы подберём удобное время</p>' +
      '<a href="courses.html" class="btn btn--green">Посмотреть все курсы</a>' +
    '</div>'
  );

  section.append(container);
  $('body').append(section);

  // Footer
  var footer = $('<footer>', { class: 'footer' });
  footer.append($('<div>', { class: 'footer__map', html: '<img src="images/map.jpg" alt="Карта">' }));
  var fi = $('<div>', { class: 'footer__info' });
  var fii = $('<div>', { class: 'container footer__inner' });
  fii.append(
    '<div class="footer__contacts">' +
      '<p class="footer__phone">0 (800) 508-622</p>' +
      '<p class="footer__address">Харьков, Клочковская, д. 3</p>' +
    '</div>' +
    '<div class="footer__nav"><div class="footer__col">' +
      '<a href="courses.html">Курсы обучения</a>' +
      '<a href="webinars.html">Вебинары</a>' +
      '<a href="blog.html">Блог</a>' +
      '<a href="about.html">О нас</a>' +
      '<a href="price.html">Магазин</a>' +
    '</div></div>'
  );
  fi.append(fii);
  footer.append(fi);
  var fb = $('<div>', { class: 'footer__bottom', html: '<div class="container"><p>Все права сохранены</p></div>' });
  footer.append(fb);
  $('body').append(footer);

  // Styles
  $('head').append(
    '<style>' +
    '.sc-hero { background:#fff; padding:40px 0; border-bottom:1px solid #e0e0e0; }' +
    '.sc-hero__title { font-family:"Playfair Display",serif; font-size:2.4rem; color:#1a1a2e; text-align:center; }' +
    '.sc-hero__subtitle { text-align:center; color:#666; font-size:0.9rem; margin-top:8px; }' +
    '.sc-page { padding:40px 0 60px; background:#f7f7f7; }' +
    '.sc-month { font-family:"Playfair Display",serif; font-size:1.4rem; color:#1a1a2e; margin:30px 0 16px; }' +
    '.sc-table { background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,0.07); }' +
    '.sc-row { display:flex; padding:12px 16px; border-bottom:1px solid #e0e0e0; align-items:center; gap:8px; }' +
    '.sc-row:last-child { border-bottom:none; }' +
    '.sc-row--alt { background:#f7f7f7; }' +
    '.sc-header { background:#e8f5e9; font-weight:700; font-size:0.8rem; color:#388e3c; letter-spacing:1px; }' +
    '.sc-cell { font-size:0.85rem; color:#333; }' +
    '.sc-date { width:100px; flex-shrink:0; font-weight:600; }' +
    '.sc-time { width:130px; flex-shrink:0; color:#666; }' +
    '.sc-course { flex:1; }' +
    '.sc-type { width:120px; flex-shrink:0; text-align:center; }' +
    '.sc-price { width:100px; flex-shrink:0; text-align:right; font-weight:700; color:#388e3c; }' +
    '.sc-places { width:70px; flex-shrink:0; text-align:right; color:#666; font-size:0.8rem; }' +
    '.sc-badge { display:inline-block; padding:2px 8px; border-radius:12px; font-size:0.7rem; font-weight:700; color:#fff; }' +
    '.sc-badge--мастер-класс { background:#7b1fa2; }' +
    '.sc-badge--курс { background:#388e3c; }' +
    '.sc-badge--вебинар { background:#1565c0; }' +
    '.sc-badge--онлайн { background:#e67e22; }' +
    '.sc-cta { text-align:center; padding:40px 0 0; }' +
    '.sc-cta__text { color:#666; font-size:0.95rem; margin-bottom:16px; }' +
    '.nav__link--active { color:#4caf50; border-bottom:2px solid #4caf50; padding-bottom:2px; }' +
    '@media (max-width:768px) { .sc-row { flex-wrap:wrap; gap:4px; } .sc-date { width:100%; } .sc-time, .sc-type, .sc-price, .sc-places { width:auto; flex:1; } .sc-hero__title { font-size:1.6rem; } }' +
    '</style>'
  );

});
