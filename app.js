//YENİ YIl------------------------------------------
let sec = document.querySelector(".saniye");
let min = document.querySelector(".dakika");
let hour = document.querySelector(".saat");
let day = document.querySelector(".gun");
let yeniYil = new Date(`01/01/2024`);

setInterval(() => {
  let şimdi = new Date().getTime();

  let yeniYilKalan = yeniYil - şimdi;

  var gun = Math.floor(yeniYilKalan / (1000 * 60 * 60 * 24));
  var saat = Math.floor(
    (yeniYilKalan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var dakika = Math.floor((yeniYilKalan % (1000 * 60 * 60)) / (1000 * 60));
  var saniye = Math.floor((yeniYilKalan % (1000 * 60)) / 1000);

  sec.innerHTML = saniye;
  min.innerHTML = dakika;
  hour.innerHTML = saat;
  day.innerHTML = gun;
}, 1000);

//LGS----------------------------------------------
let lgs = new Date(`06/04/2023`);

let lgsSec = document.querySelector(".lgs-saniye");
let lgsMin = document.querySelector(".lgs-dakika");
let lgsHour = document.querySelector(".lgs-saat");
let lgsDay = document.querySelector(".lgs-gun");

setInterval(() => {
  let now = new Date().getTime();
  let lgsKalan = lgs - now;

  let lgsGun = Math.floor(lgsKalan / (1000 * 60 * 60 * 24));
  let lgsSaat = Math.floor(
    (lgsKalan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let lgsDakika = Math.floor((lgsKalan % (1000 * 60 * 60)) / (1000 * 60));
  let lgsSaniye = Math.floor((lgsKalan % (1000 * 60)) / 1000);

  lgsDay.innerHTML = lgsGun;
  lgsHour.innerHTML = lgsSaat;
  lgsMin.innerHTML = lgsDakika;
  lgsSec.innerHTML = lgsSaniye;
}, 1000);


