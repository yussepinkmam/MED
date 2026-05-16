// 1. Создаем все секции и добавляем в body
$(function() {

  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };
  const img = (src, alt) => { const e = el("img"); e.src = src; e.alt = alt; return e; };
  const a = (href, cls, text) => { const e = el("a", cls, text); e.href = href; return e; };
  const section = (cls) => el("section", cls);

  // header
  const header = section("header");
  const hi = el("div", "container header__top-inner");
  hi.append(a("#", "logo", "VALMADI"));

  const nav = el("nav", "nav");
  [["Курсы обучения","courses.html"],["Вебинары","webinars.html"],["Видео-уроки","#"],["Блог","blog.html"],["О нас","about.html"],["Приём","#"],["Расписание","#"],["Акции","#"],["Магазин","price.html"]].forEach(d => nav.append(a(d[1], "nav__link", d[0])));
  hi.append(nav);

  const ham = el("button", "hamburger");
  ham.onclick = () => document.querySelector('.nav').classList.toggle('nav--open');
  [1,2,3].forEach(() => ham.append(el("span")));
  hi.append(ham);

  const contacts = el("div", "header__contacts");
  contacts.append(a("tel:+78005080622", "header__phone", "8 (800) 508-622"));
  const soc = el("div", "header__social");
  const vk = a("#"); vk.title = "VK"; vk.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.5h-1.6c-.6 0-.79-.48-1.87-1.57-.94-.93-1.35-.93-1.35 0v1.28c0 .43-.14.57-1.28.57-1.9 0-4-.11-5.47-1.65C5.2 12.48 4.5 10.5 4.5 10.5s-.07-.17.07-.26l1.6-.01c.43 0 .6.2.76.64.84 2.42 2.24 4.54 2.81 4.54.22 0 .32-.1.32-.65V12.5c-.07-1.17-.68-1.27-.68-1.69 0-.22.18-.44.47-.44h2.52c.36 0 .48.19.48.6v3.22c0 .36.16.48.26.48.22 0 .4-.12.8-.53 1.24-1.39 2.12-3.52 2.12-3.52.12-.26.32-.5.75-.5h1.6c.48 0 .59.25.48.59-.2.93-2.16 3.7-2.16 3.7-.17.28-.24.4 0 .71.17.24.74.74 1.12 1.18.69.79 1.22 1.45 1.36 1.91.14.45-.09.68-.54.68z"/></svg>';
  const ig = a("#"); ig.title = "Instagram"; ig.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>';
  soc.append(vk, ig);
  contacts.append(soc, el("div", "header__lang", "RU"));
  hi.append(contacts);
  header.append(hi);

  // hero
  const hero = section("hero");
  const heroInner = el("div", "container hero__inner");
  const heroContent = el("div", "hero__content");
  heroContent.innerHTML = '<p class="hero__label">Бесплатный вебинар</p><h1 class="hero__title">ПРОФЕССИЯ КОСМЕТОЛОГ</h1><p class="hero__subtitle">Подготовьтесь к будущей профессии прямо из дома. Задайте вопросы практикующим специалистам и интересующие вас профессиональные вопросы.</p><div class="hero__buttons"><a href="#" class="btn btn--green">Зарегистрироваться</a><a href="#" class="btn btn--outline">Подробнее</a></div>';
  const heroImgDiv = el("div", "hero__image");
  heroImgDiv.append(img("images/hero-doctors.png", "Косметологи"));
  heroInner.append(heroContent, heroImgDiv);
  hero.append(heroInner);

  // stats
  const stats = section("stats");
  const sc = el("div", "container");
  sc.append(el("h2", "visually-hidden", "Статистика учебного центра"));
  const si = el("div", "stats__inner");
  [["4000+","Довольных клиентов"],["3500+","Часов в учебе базе"],["1500+","Отзывов об обучении"],["5500+","Студентов и клиник"]].forEach(d => {
    const s = el("div", "stat"); s.append(el("span","stat__num",d[0]), el("span","stat__text",d[1])); si.append(s);
  });
  sc.append(si); stats.append(sc);

  // courses
  const courses = section("courses");
  const cc = el("div", "container");
  cc.append(el("h2", "section-title", "Курсы обучения"));
  const cg = el("div", "courses__grid");
  [["course-1.jpg","Косметические техники","Курс для новичков","6 - 8 часов"],["course-2.jpg","Мезотерапия и биоревитализация","Курс для новичков","16 - 20 часов"],["course-3.jpg","Нитевой лифтинг — APTOS в косметологии","2 курса","8 - 12 часов"]].forEach(d => {
    const card = el("div", "course-card");
    const ci = el("div", "course-card__image"); ci.append(img("images/"+d[0], d[1]));
    const cb = el("div", "course-card__body");
    cb.innerHTML = `<span class="course-card__badge">${d[2]}</span><h3 class="course-card__title">${d[1]}</h3><p class="course-card__duration">${d[3]}</p><p class="course-card__price">от ... грн</p><div class="course-card__buttons"><a href="#" class="btn btn--green btn--sm">Зарегистрироваться</a><a href="#" class="btn btn--outline btn--sm">Подробнее</a></div>`;
    card.append(ci, cb); cg.append(card);
  });
  cc.append(cg); courses.append(cc);

  // about
  const about = section("about");
  const ai = el("div", "container about__inner");
  const aimg = el("div", "about__image"); aimg.append(img("images/about-procedure.jpg","Процедура"));
  const ac = el("div", "about__content");
  ac.innerHTML = '<p class="about__brand">VALMADI</p><h2 class="about__title">ВЕДУЩИЙ УЧЕБНЫЙ ЦЕНТР ЭСТЕТИЧЕСКОЙ КОСМЕТОЛОГИИ</h2><p class="about__text">Обязанность может быть любой. Ведущий учебный центр эстетической косметологии. Более 5 лет мы проводим курсы сертификационные курсы профессионального обучения и повышения квалификации, курсы эстетической медицины, педиатрии и молодости.</p><a href="#" class="btn btn--green">Подробнее</a>';
  ai.append(aimg, ac); about.append(ai);

  // education
  const edu = section("education");
  const ec = el("div", "container");
  ec.append(el("h2", "section-title", "Обучение косметологов"));
  const eg = el("div", "education__grid");
  [["edu-courses.jpg","Курсы косметологии"," edu-card--wide"],["edu-online.jpg","ОНЛАЙН ОБУЧЕНИЕ",""],["edu-schedule.jpg","РАСПИСАНИЕ",""],["edu-masterclass.jpg","МАСТЕР-КЛАССЫ",""],["edu-actions.jpg","АКЦИИ",""]].forEach(d => {
    const l = a("#", "edu-card" + d[2]); l.append(img("images/"+d[0],d[1]), el("div","edu-card__label",d[1])); eg.append(l);
  });
  ec.append(eg); edu.append(ec);

  // models
  const models = section("models");
  const mi = el("div", "container models__inner");
  const mc2 = el("div", "models__content");
  mc2.innerHTML = '<h2 class="models__title">ВЕДЕМ НАБОР МОДЕЛЕЙ</h2><p class="models__text">Мы предлагаем свои услуги для моделей. Выберите процедуру или несколько процедур и наш косметолог произведет все необходимые манипуляции, которые позволят вам получить эту процедуру.</p><a href="#" class="btn btn--green">Стать моделью</a>';
  const mimg = el("div", "models__image"); mimg.append(img("images/models-procedure.jpg","Модель на процедуре"));
  mi.append(mc2, mimg); models.append(mi);

  // masterclass
  const mc = section("masterclass");
  const mcc = el("div", "container");
  mcc.append(el("h2","section-title","Мастер-классы"), el("p","section-subtitle","Мероприятия для повышения квалификации косметологов"));
  const mg = el("div","masterclass__grid");
  [["mc-1.jpg","12 мая, пятница","Базовая косметология. Базовая косметология, удаление папиллом.","3000 грн"],["mc-2.jpg","18 мая, четверг","Контурная пластика лица — инъекции филлеров","4500 грн"],["mc-3.jpg","25 мая, пятница","Вискосил, нитевой лифтинг","Бесплатно"]].forEach(d => {
    const card = el("div","mc-card"); const ci2 = el("div","mc-card__image"); ci2.append(img("images/"+d[0], d[0]));
    card.append(ci2);
    card.innerHTML += `<div class="mc-card__body"><p class="mc-card__date">${d[1]}</p><h3 class="mc-card__title">${d[2]}</h3><p class="mc-card__price">${d[3]}</p><a href="#" class="btn btn--green btn--sm">→</a></div>`;
    mg.append(card);
  });
  mcc.append(mg); mc.append(mcc);

  // why
  const why = section("why");
  const wc = el("div", "container");
  wc.append(el("h2","section-title","Почему мы"));
  const wg = el("div","why__grid");
  [["🎓","Преподаватели","Наши специалисты — практикующие косметологи с более чем 10-летним опытом работы."],["📜","Сертификаты","По окончании курса каждый студент получает официальный сертификат."],["⭐","Повышение квалификации","Ежеквартально более 500 специалистов повышают квалификацию в нашем центре."]].forEach(d => {
    const card = el("div","why-card");
    card.innerHTML = `<div class="why-card__icon">${d[0]}</div><h3 class="why-card__title">${d[1]}</h3><p class="why-card__text">${d[2]}</p>`;
    wg.append(card);
  });
  wc.append(wg); why.append(wc);

  // special
  const special = section("special");
  const spc = el("div", "container");
  spc.append(el("h2","section-title","Специальные предложения"));
  const sl = el("div","special__slider");
  sl.append(el("button","slider-btn slider-btn--prev","‹"));
  const st = el("div","special__track");
  [["special-card__badge--purple","special-1.jpg",'АКЦИЯ!<br><span>-15%</span><br>от 3 услуги'],["special-card__badge--green","special-2.jpg",'-10%<br>от 2 услуги<br>-15%<br>от 3 услуги'],["special-card__badge--blue","special-3.jpg",'АКЦИЯ МЕСЯЦА!<br><span>-25%</span>']].forEach(d => {
    const sc2 = el("div","special-card");
    sc2.innerHTML = `<div class="special-card__badge ${d[0]}">${d[2]}</div>`;
    sc2.append(img("images/"+d[1], d[1])); st.append(sc2);
  });
  sl.append(st, el("button","slider-btn slider-btn--next","›"));
  spc.append(sl); special.append(spc);

  // callback
  const cb = section("callback");
  const cbi = el("div","container callback__inner");
  cbi.innerHTML = '<h2 class="callback__title">Закажите обратный звонок</h2><p class="callback__subtitle">Оставьте заявку и форму ниже и менеджер свяжется с вами</p><div class="callback__form"><input type="text" class="callback__input" placeholder="Имя"><input type="tel" class="callback__input" placeholder="Телефон"><input type="email" class="callback__input" placeholder="Email"><button class="btn btn--green">Отправить</button></div>';
  cb.append(cbi);

  // footer
  const footer = section("footer");
  const fm = el("div","footer__map"); fm.append(img("images/map.jpg","Карта"));
  footer.append(fm);
  const fi = el("div","footer__info");
  const fii = el("div","container footer__inner");
  const fc = el("div","footer__contacts");
  fc.innerHTML = '<p class="footer__phone">0 (800) 508-622</p><p class="footer__address">Харьков, Клочковская, д. 3</p><div class="footer__social"><a href="#" title="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a><a href="#" title="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a></div>';
  fii.append(fc);
  const fn = el("div","footer__nav"); const fcol = el("div","footer__col");
  ["Курсы обучения","Расписание","Блог","Акции","Мастер-классы","Мобиле"].forEach(t => fcol.append(a("#", "", t)));
  fn.append(fcol); fii.append(fn); fi.append(fii); footer.append(fi);
  const fb = el("div","footer__bottom"); const fbc = el("div","container"); fbc.append(el("p","","Все права сохранены")); fb.append(fbc); footer.append(fb);

  // Сборка
  document.body.append(header, hero, stats, courses, about, edu, models, mc, why, special, cb, footer);

  // Обработчик навигации
  document.querySelector('.nav')?.addEventListener('click', function(){this.classList.remove('nav--open')});

  // Инициализация плагинов jQuery
  // Валидация формы
  $('.callback__form').validate({
    rules: {
      name: "required",
      phone: "required",
      email: { required: true, email: true }
    },
    messages: {
      name: "Введите имя",
      phone: "Введите телефон",
      email: { required: "Введите email", email: "Неверный формат email" }
    },
    submitHandler: function(form) {
      alert('Форма отправлена!');
    }
  });

  // Ленивая загрузка изображений
  $("img").lazyload({ threshold: 200 });

  // Таймер обратного отсчёта для акций
  if ($('.countdown').length) {
    $('.countdown').countdown('2026/06/01', function(event) {
      $(this).html(event.strftime('%D дней %H:%M:%S'));
    });
  }

});
