// 1. Создаем базовую структуру
const doc = document.implementation.createHTMLDocument("VALMADI — Учебный центр эстетической косметологии");
const html = doc.documentElement;
html.lang = "ru";

// 2. Создаем <head>
const head = doc.createElement("head");
const metaCharset = doc.createElement("meta");
metaCharset.charset = "UTF-8";
const metaViewport = doc.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1.0";
const title = doc.createElement("title");
title.textContent = "VALMADI — Учебный центр эстетической косметологии";

const linkStyles = doc.createElement("link");
linkStyles.rel = "stylesheet";
linkStyles.href = "css/styles.css";

const linkFonts = doc.createElement("link");
linkFonts.rel = "stylesheet";
linkFonts.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Nunito:wght@300;400;600;700&display=swap";

head.append(metaCharset, metaViewport, title, linkStyles, linkFonts);

// 3. Создаем <body>
const body = doc.createElement("body");

// 4. Создаем <header>
const header = doc.createElement("header");
header.className = "header";

const headerTop = doc.createElement("div");
headerTop.className = "header__top";

const headerInner = doc.createElement("div");
headerInner.className = "container header__top-inner";

const logo = doc.createElement("a");
logo.href = "#";
logo.className = "logo";
logo.textContent = "VALMADI";

const nav = doc.createElement("nav");
nav.className = "nav";

const navLinks = [
  { text: "Курсы обучения", href: "courses.html" },
  { text: "Вебинары", href: "webinars.html" },
  { text: "Видео-уроки", href: "#" },
  { text: "Блог", href: "blog.html" },
  { text: "О нас", href: "about.html" },
  { text: "Приём", href: "#" },
  { text: "Расписание", href: "#" },
  { text: "Акции", href: "#" },
  { text: "Магазин", href: "price.html" }
];

navLinks.forEach(function(linkData) {
  const a = doc.createElement("a");
  a.href = linkData.href;
  a.className = "nav__link";
  a.textContent = linkData.text;
  nav.append(a);
});

const hamburger = doc.createElement("button");
hamburger.className = "hamburger";
hamburger.onclick = function() {
  document.querySelector('.nav').classList.toggle('nav--open');
};
for (let i = 0; i < 3; i++) {
  const span = doc.createElement("span");
  hamburger.append(span);
}

const contacts = doc.createElement("div");
contacts.className = "header__contacts";

const phone = doc.createElement("a");
phone.href = "tel:+78005080622";
phone.className = "header__phone";
phone.textContent = "8 (800) 508-622";

const social = doc.createElement("div");
social.className = "header__social";

const vkLink = doc.createElement("a");
vkLink.href = "#";
vkLink.title = "VK";
vkLink.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.5h-1.6c-.6 0-.79-.48-1.87-1.57-.94-.93-1.35-.93-1.35 0v1.28c0 .43-.14.57-1.28.57-1.9 0-4-.11-5.47-1.65C5.2 12.48 4.5 10.5 4.5 10.5s-.07-.17.07-.26l1.6-.01c.43 0 .6.2.76.64.84 2.42 2.24 4.54 2.81 4.54.22 0 .32-.1.32-.65V12.5c-.07-1.17-.68-1.27-.68-1.69 0-.22.18-.44.47-.44h2.52c.36 0 .48.19.48.6v3.22c0 .36.16.48.26.48.22 0 .4-.12.8-.53 1.24-1.39 2.12-3.52 2.12-3.52.12-.26.32-.5.75-.5h1.6c.48 0 .59.25.48.59-.2.93-2.16 3.7-2.16 3.7-.17.28-.24.4 0 .71.17.24.74.74 1.12 1.18.69.79 1.22 1.45 1.36 1.91.14.45-.09.68-.54.68z"/></svg>';
social.append(vkLink);

const igLink = doc.createElement("a");
igLink.href = "#";
igLink.title = "Instagram";
igLink.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>';
social.append(igLink);

const lang = doc.createElement("div");
lang.className = "header__lang";
lang.textContent = "RU";

contacts.append(phone, social, lang);
headerInner.append(logo, nav, hamburger, contacts);
headerTop.append(headerInner);
header.append(headerTop);

// 5. Создаем hero-секцию
const hero = doc.createElement("section");
hero.className = "hero";

const heroInner = doc.createElement("div");
heroInner.className = "container hero__inner";

const heroContent = doc.createElement("div");
heroContent.className = "hero__content";

const heroLabel = doc.createElement("p");
heroLabel.className = "hero__label";
heroLabel.textContent = "Бесплатный вебинар";

const heroTitle = doc.createElement("h1");
heroTitle.className = "hero__title";
heroTitle.textContent = "ПРОФЕССИЯ КОСМЕТОЛОГ";

const heroSubtitle = doc.createElement("p");
heroSubtitle.className = "hero__subtitle";
heroSubtitle.textContent = "Подготовьтесь к будущей профессии прямо из дома. Задайте вопросы практикующим специалистам и интересующие вас профессиональные вопросы.";

const heroButtons = doc.createElement("div");
heroButtons.className = "hero__buttons";

const btnRegister = doc.createElement("a");
btnRegister.href = "#";
btnRegister.className = "btn btn--green";
btnRegister.textContent = "Зарегистрироваться";

const btnMore = doc.createElement("a");
btnMore.href = "#";
btnMore.className = "btn btn--outline";
btnMore.textContent = "Подробнее";

heroButtons.append(btnRegister, btnMore);
heroContent.append(heroLabel, heroTitle, heroSubtitle, heroButtons);

const heroImage = doc.createElement("div");
heroImage.className = "hero__image";
const heroImg = doc.createElement("img");
heroImg.src = "images/hero-doctors.png";
heroImg.alt = "Косметологи";
heroImage.append(heroImg);

heroInner.append(heroContent, heroImage);
hero.append(heroInner);

// 6. Секция stats
const stats = doc.createElement("section");
stats.className = "stats";

const statsContainer = doc.createElement("div");
statsContainer.className = "container";

const statsHeading = doc.createElement("h2");
statsHeading.className = "visually-hidden";
statsHeading.textContent = "Статистика учебного центра";

const statsInner = doc.createElement("div");
statsInner.className = "stats__inner";

const statsData = [
  { num: "4000+", text: "Довольных клиентов" },
  { num: "3500+", text: "Часов в учебе базе" },
  { num: "1500+", text: "Отзывов об обучении" },
  { num: "5500+", text: "Студентов и клиник" }
];

statsData.forEach(function(item) {
  const stat = doc.createElement("div");
  stat.className = "stat";
  const num = doc.createElement("span");
  num.className = "stat__num";
  num.textContent = item.num;
  const text = doc.createElement("span");
  text.className = "stat__text";
  text.textContent = item.text;
  stat.append(num, text);
  statsInner.append(stat);
});

statsContainer.append(statsHeading, statsInner);
stats.append(statsContainer);

// 7. Секция courses
const courses = doc.createElement("section");
courses.className = "courses";

const coursesContainer = doc.createElement("div");
coursesContainer.className = "container";

const coursesTitle = doc.createElement("h2");
coursesTitle.className = "section-title";
coursesTitle.textContent = "Курсы обучения";

const coursesGrid = doc.createElement("div");
coursesGrid.className = "courses__grid";

const coursesData = [
  { img: "images/course-1.jpg", alt: "Косметические техники", badge: "Курс для новичков", title: "Косметические техники", duration: "6 - 8 часов", price: "от ... грн" },
  { img: "images/course-2.jpg", alt: "Мезотерапия и биоревитализация", badge: "Курс для новичков", title: "Мезотерапия и биоревитализация", duration: "16 - 20 часов", price: "от ... грн" },
  { img: "images/course-3.jpg", alt: "Нитевой лифтинг", badge: "2 курса", title: "Нитевой лифтинг — APTOS в косметологии", duration: "8 - 12 часов", price: "от ... грн" }
];

coursesData.forEach(function(data) {
  const card = doc.createElement("div");
  card.className = "course-card";

  const cardImage = doc.createElement("div");
  cardImage.className = "course-card__image";
  const img = doc.createElement("img");
  img.src = data.img;
  img.alt = data.alt;
  cardImage.append(img);

  const cardBody = doc.createElement("div");
  cardBody.className = "course-card__body";

  const badge = doc.createElement("span");
  badge.className = "course-card__badge";
  badge.textContent = data.badge;

  const cardTitle = doc.createElement("h3");
  cardTitle.className = "course-card__title";
  cardTitle.textContent = data.title;

  const duration = doc.createElement("p");
  duration.className = "course-card__duration";
  duration.textContent = data.duration;

  const price = doc.createElement("p");
  price.className = "course-card__price";
  price.textContent = data.price;

  const cardButtons = doc.createElement("div");
  cardButtons.className = "course-card__buttons";

  const regBtn = doc.createElement("a");
  regBtn.href = "#";
  regBtn.className = "btn btn--green btn--sm";
  regBtn.textContent = "Зарегистрироваться";

  const detBtn = doc.createElement("a");
  detBtn.href = "#";
  detBtn.className = "btn btn--outline btn--sm";
  detBtn.textContent = "Подробнее";

  cardButtons.append(regBtn, detBtn);
  cardBody.append(badge, cardTitle, duration, price, cardButtons);
  card.append(cardImage, cardBody);
  coursesGrid.append(card);
});

coursesContainer.append(coursesTitle, coursesGrid);
courses.append(coursesContainer);

// 8. Секция about
const about = doc.createElement("section");
about.className = "about";

const aboutInner = doc.createElement("div");
aboutInner.className = "container about__inner";

const aboutImage = doc.createElement("div");
aboutImage.className = "about__image";
const aboutImg = doc.createElement("img");
aboutImg.src = "images/about-procedure.jpg";
aboutImg.alt = "Процедура";
aboutImage.append(aboutImg);

const aboutContent = doc.createElement("div");
aboutContent.className = "about__content";

const aboutBrand = doc.createElement("p");
aboutBrand.className = "about__brand";
aboutBrand.textContent = "VALMADI";

const aboutTitle = doc.createElement("h2");
aboutTitle.className = "about__title";
aboutTitle.textContent = "ВЕДУЩИЙ УЧЕБНЫЙ ЦЕНТР ЭСТЕТИЧЕСКОЙ КОСМЕТОЛОГИИ";

const aboutText = doc.createElement("p");
aboutText.className = "about__text";
aboutText.textContent = "Обязанность может быть любой. Ведущий учебный центр эстетической косметологии. Более 5 лет мы проводим курсы сертификационные курсы профессионального обучения и повышения квалификации, курсы эстетической медицины, педиатрии и молодости.";

const aboutBtn = doc.createElement("a");
aboutBtn.href = "#";
aboutBtn.className = "btn btn--green";
aboutBtn.textContent = "Подробнее";

aboutContent.append(aboutBrand, aboutTitle, aboutText, aboutBtn);
aboutInner.append(aboutImage, aboutContent);
about.append(aboutInner);

// 9. Секция education
const education = doc.createElement("section");
education.className = "education";

const eduContainer = doc.createElement("div");
eduContainer.className = "container";

const eduTitle = doc.createElement("h2");
eduTitle.className = "section-title";
eduTitle.textContent = "Обучение косметологов";

const eduGrid = doc.createElement("div");
eduGrid.className = "education__grid";

const eduCards = [
  { img: "images/edu-courses.jpg", alt: "Курсы косметологии", label: "КУРСЫ КОСМЕТОЛОГИИ", wide: true },
  { img: "images/edu-online.jpg", alt: "Онлайн обучение", label: "ОНЛАЙН ОБУЧЕНИЕ", wide: false },
  { img: "images/edu-schedule.jpg", alt: "Расписание", label: "РАСПИСАНИЕ", wide: false },
  { img: "images/edu-masterclass.jpg", alt: "Мастер-классы", label: "МАСТЕР-КЛАССЫ", wide: false },
  { img: "images/edu-actions.jpg", alt: "Акции", label: "АКЦИИ", wide: false }
];

eduCards.forEach(function(data) {
  const link = doc.createElement("a");
  link.href = "#";
  link.className = "edu-card" + (data.wide ? " edu-card--wide" : "");
  const img = doc.createElement("img");
  img.src = data.img;
  img.alt = data.alt;
  const label = doc.createElement("div");
  label.className = "edu-card__label";
  label.textContent = data.label;
  link.append(img, label);
  eduGrid.append(link);
});

eduContainer.append(eduTitle, eduGrid);
education.append(eduContainer);

// 10. Секция models
const models = doc.createElement("section");
models.className = "models";

const modelsInner = doc.createElement("div");
modelsInner.className = "container models__inner";

const modelsContent = doc.createElement("div");
modelsContent.className = "models__content";

const modelsTitle = doc.createElement("h2");
modelsTitle.className = "models__title";
modelsTitle.textContent = "ВЕДЕМ НАБОР МОДЕЛЕЙ";

const modelsText = doc.createElement("p");
modelsText.className = "models__text";
modelsText.textContent = "Мы предлагаем свои услуги для моделей. Выберите процедуру или несколько процедур и наш косметолог произведет все необходимые манипуляции, которые позволят вам получить эту процедуру.";

const modelsBtn = doc.createElement("a");
modelsBtn.href = "#";
modelsBtn.className = "btn btn--green";
modelsBtn.textContent = "Стать моделью";

const modelsImage = doc.createElement("div");
modelsImage.className = "models__image";
const modelsImg = doc.createElement("img");
modelsImg.src = "images/models-procedure.jpg";
modelsImg.alt = "Модель на процедуре";
modelsImage.append(modelsImg);

modelsContent.append(modelsTitle, modelsText, modelsBtn);
modelsInner.append(modelsContent, modelsImage);
models.append(modelsInner);

// 11. Секция masterclass
const masterclass = doc.createElement("section");
masterclass.className = "masterclass";

const mcContainer = doc.createElement("div");
mcContainer.className = "container";

const mcTitle = doc.createElement("h2");
mcTitle.className = "section-title";
mcTitle.textContent = "Мастер-классы";

const mcSubtitle = doc.createElement("p");
mcSubtitle.className = "section-subtitle";
mcSubtitle.textContent = "Мероприятия для повышения квалификации косметологов";

const mcGrid = doc.createElement("div");
mcGrid.className = "masterclass__grid";

const mcData = [
  { img: "images/mc-1.jpg", alt: "Мастер-класс 1", date: "12 мая, пятница", title: "Базовая косметология. Базовая косметология, удаление папиллом.", price: "3000 грн" },
  { img: "images/mc-2.jpg", alt: "Мастер-класс 2", date: "18 мая, четверг", title: "Контурная пластика лица — инъекции филлеров", price: "4500 грн" },
  { img: "images/mc-3.jpg", alt: "Мастер-класс 3", date: "25 мая, пятница", title: "Вискосил, нитевой лифтинг", price: "Бесплатно" }
];

mcData.forEach(function(data) {
  const card = doc.createElement("div");
  card.className = "mc-card";

  const cardImage = doc.createElement("div");
  cardImage.className = "mc-card__image";
  const img = doc.createElement("img");
  img.src = data.img;
  img.alt = data.alt;
  cardImage.append(img);

  const cardBody = doc.createElement("div");
  cardBody.className = "mc-card__body";

  const date = doc.createElement("p");
  date.className = "mc-card__date";
  date.textContent = data.date;

  const cardTitle = doc.createElement("h3");
  cardTitle.className = "mc-card__title";
  cardTitle.textContent = data.title;

  const price = doc.createElement("p");
  price.className = "mc-card__price";
  price.textContent = data.price;

  const btn = doc.createElement("a");
  btn.href = "#";
  btn.className = "btn btn--green btn--sm";
  btn.textContent = "→";

  cardBody.append(date, cardTitle, price, btn);
  card.append(cardImage, cardBody);
  mcGrid.append(card);
});

mcContainer.append(mcTitle, mcSubtitle, mcGrid);
masterclass.append(mcContainer);

// 12. Секция why
const why = doc.createElement("section");
why.className = "why";

const whyContainer = doc.createElement("div");
whyContainer.className = "container";

const whyTitle = doc.createElement("h2");
whyTitle.className = "section-title";
whyTitle.textContent = "Почему мы";

const whyGrid = doc.createElement("div");
whyGrid.className = "why__grid";

const whyData = [
  { icon: "🎓", title: "Преподаватели", text: "Наши специалисты — практикующие косметологи с более чем 10-летним опытом работы." },
  { icon: "📜", title: "Сертификаты", text: "По окончании курса каждый студент получает официальный сертификат о повышении квалификации." },
  { icon: "⭐", title: "Повышение квалификации", text: "Ежеквартально более 500 специалистов повышают квалификацию в нашем центре." }
];

whyData.forEach(function(data) {
  const card = doc.createElement("div");
  card.className = "why-card";

  const icon = doc.createElement("div");
  icon.className = "why-card__icon";
  icon.textContent = data.icon;

  const cardTitle = doc.createElement("h3");
  cardTitle.className = "why-card__title";
  cardTitle.textContent = data.title;

  const text = doc.createElement("p");
  text.className = "why-card__text";
  text.textContent = data.text;

  card.append(icon, cardTitle, text);
  whyGrid.append(card);
});

whyContainer.append(whyTitle, whyGrid);
why.append(whyContainer);

// 13. Секция special
const special = doc.createElement("section");
special.className = "special";

const specialContainer = doc.createElement("div");
specialContainer.className = "container";

const specialTitle = doc.createElement("h2");
specialTitle.className = "section-title";
specialTitle.textContent = "Специальные предложения";

const specialSlider = doc.createElement("div");
specialSlider.className = "special__slider";

const prevBtn = doc.createElement("button");
prevBtn.className = "slider-btn slider-btn--prev";
prevBtn.innerHTML = "&#8249;";

const specialTrack = doc.createElement("div");
specialTrack.className = "special__track";

const specialData = [
  { img: "images/special-1.jpg", alt: "Акция 1", badge: "special-card__badge--purple", html: 'АКЦИЯ!<br><span>-15%</span><br>от 3 услуги' },
  { img: "images/special-2.jpg", alt: "Акция 2", badge: "special-card__badge--green", html: '-10%<br>от 2 услуги<br>-15%<br>от 3 услуги' },
  { img: "images/special-3.jpg", alt: "Акция 3", badge: "special-card__badge--blue", html: 'АКЦИЯ МЕСЯЦА!<br><span>-25%</span>' }
];

specialData.forEach(function(data) {
  const card = doc.createElement("div");
  card.className = "special-card";

  const badge = doc.createElement("div");
  badge.className = "special-card__badge " + data.badge;
  badge.innerHTML = data.html;

  const img = doc.createElement("img");
  img.src = data.img;
  img.alt = data.alt;

  card.append(badge, img);
  specialTrack.append(card);
});

const nextBtn = doc.createElement("button");
nextBtn.className = "slider-btn slider-btn--next";
nextBtn.innerHTML = "&#8250;";

specialSlider.append(prevBtn, specialTrack, nextBtn);
specialContainer.append(specialTitle, specialSlider);
special.append(specialContainer);

// 14. Секция callback
const callback = doc.createElement("section");
callback.className = "callback";

const callbackInner = doc.createElement("div");
callbackInner.className = "container callback__inner";

const callbackTitle = doc.createElement("h2");
callbackTitle.className = "callback__title";
callbackTitle.textContent = "Закажите обратный звонок";

const callbackSubtitle = doc.createElement("p");
callbackSubtitle.className = "callback__subtitle";
callbackSubtitle.textContent = "Оставьте заявку и форму ниже и менеджер свяжется с вами";

const callbackForm = doc.createElement("div");
callbackForm.className = "callback__form";

const inputName = doc.createElement("input");
inputName.type = "text";
inputName.className = "callback__input";
inputName.placeholder = "Имя";

const inputTel = doc.createElement("input");
inputTel.type = "tel";
inputTel.className = "callback__input";
inputTel.placeholder = "Телефон";

const inputEmail = doc.createElement("input");
inputEmail.type = "email";
inputEmail.className = "callback__input";
inputEmail.placeholder = "Email";

const submitBtn = doc.createElement("button");
submitBtn.className = "btn btn--green";
submitBtn.textContent = "Отправить";

callbackForm.append(inputName, inputTel, inputEmail, submitBtn);
callbackInner.append(callbackTitle, callbackSubtitle, callbackForm);
callback.append(callbackInner);

// 15. Создаем footer
const footer = doc.createElement("footer");
footer.className = "footer";

const footerMap = doc.createElement("div");
footerMap.className = "footer__map";
const mapImg = doc.createElement("img");
mapImg.src = "images/map.jpg";
mapImg.alt = "Карта";
footerMap.append(mapImg);

const footerInfo = doc.createElement("div");
footerInfo.className = "footer__info";

const footerInner = doc.createElement("div");
footerInner.className = "container footer__inner";

const footerContacts = doc.createElement("div");
footerContacts.className = "footer__contacts";

const footerPhone = doc.createElement("p");
footerPhone.className = "footer__phone";
footerPhone.textContent = "0 (800) 508-622";

const footerAddress = doc.createElement("p");
footerAddress.className = "footer__address";
footerAddress.textContent = "Харьков, Клочковская, д. 3";

const footerSocial = doc.createElement("div");
footerSocial.className = "footer__social";

const fbLink = doc.createElement("a");
fbLink.href = "#";
fbLink.title = "Facebook";
fbLink.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';
footerSocial.append(fbLink);

const igLink2 = doc.createElement("a");
igLink2.href = "#";
igLink2.title = "Instagram";
igLink2.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>';
footerSocial.append(igLink2);

footerContacts.append(footerPhone, footerAddress, footerSocial);

const footerNav = doc.createElement("div");
footerNav.className = "footer__nav";

const footerCol = doc.createElement("div");
footerCol.className = "footer__col";

const footerLinks = [
  { text: "Курсы обучения", href: "#" },
  { text: "Расписание", href: "#" },
  { text: "Блог", href: "blog.html" },
  { text: "Акции", href: "#" },
  { text: "Мастер-классы", href: "#" },
  { text: "Мобиле", href: "#" }
];

footerLinks.forEach(function(linkData) {
  const a = doc.createElement("a");
  a.href = linkData.href;
  a.textContent = linkData.text;
  footerCol.append(a);
});

footerNav.append(footerCol);
footerInner.append(footerContacts, footerNav);
footerInfo.append(footerInner);

const footerBottom = doc.createElement("div");
footerBottom.className = "footer__bottom";
const footerBottomContainer = doc.createElement("div");
footerBottomContainer.className = "container";
const copyright = doc.createElement("p");
copyright.textContent = "Все права сохранены";
footerBottomContainer.append(copyright);
footerBottom.append(footerBottomContainer);

footer.append(footerMap, footerInfo, footerBottom);

// 16. Собираем всё вместе
body.append(header, hero, stats, courses, about, education, models, masterclass, why, special, callback, footer);

// 17. Добавляем скрипт для навигации
const navScript = doc.createElement("script");
navScript.textContent = "document.querySelector('.nav')?.addEventListener('click', function(){this.classList.remove('nav--open')});";
body.append(navScript);

html.append(head, body);

// 18. Вставляем в текущую страницу
document.open();
document.write('<!DOCTYPE html>\n' + html.outerHTML);
document.close();

// 19. Логика после загрузки
document.addEventListener("DOMContentLoaded", function() {
  console.log("Страница VALMADI создана через DOM-элементы!");
});

// 20. Обработчик для кнопок
const allBtns = document.querySelectorAll('.btn');
allBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    console.log("Клик по кнопке:", this.textContent);
  });
});
