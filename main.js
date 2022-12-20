const select = document.querySelector("select");
const enIcon = document.getElementById("en_icon");
const ruIcon = document.getElementById("ru_icon");
const allLeng = ["en", "ru"];
select.addEventListener("change", changeURLLanguage);

//Пернаправление на url

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);

  if (!allLeng.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  select.value = hash;
  if (hash == "en") {
    enIcon.style.display = "block";
    ruIcon.style.display = "none";
  } else if (hash == "ru") {
    ruIcon.style.display = "block";
    enIcon.style.display = "none";
  }

  document.querySelector(".lang-about").innerHTML = langArr["about"][hash];
  for (let key in langArr) {
    let elem = document.querySelector(".lang-" + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}
changeLanguage();

// swiper
new Swiper(".image-slider", {
  // arrow
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dinamicBullets: true,
    style: "marginTop: 150px",
  },
  slidesPerView: 5,
  loop: true,
  loopedSlides: 5,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  initialSlide: 1,
  autoHeight: true,
});
