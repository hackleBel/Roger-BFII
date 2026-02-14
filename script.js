const Nmenu = document.querySelector(".nav__menu");
const Nperk = document.querySelector(".nav__perks");
const Nset = document.querySelector(".nav__setting");

const main = document.querySelector(".main");
const perk = document.querySelector(".perk");
const set = document.querySelector(".setting");

Nset.onclick = function () {
  main.style.display = "none";
  perk.style.display = "none";
  set.style.display = "flex";
};

Nperk.onclick = function () {
  main.style.display = "none";
  set.style.display = "none";
  perk.style.display = "flex";
};

Nmenu.onclick = function () {
  set.style.display = "none";
  perk.style.display = "none";
  main.style.display = "flex";
};

const mapsData = {
  left: [
    {
      name: "Kamino X",
      image:
        "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    },
    { name: "Tatooine Mos Eisley", image: "images/img/maps/tatooine_m.png" },
    { name: "Nabo Hangar Real", image: "images/img/maps/nabo_h.png" },
    { name: "Hoth", image: "images/img/maps/hoth.png" },
    { name: "Takodana", image: "images/img/maps/takodana_c.png" },
    { name: "Dearth Star II", image: "images/img/maps/death_star.png" },
    { name: "Yavin 4", image: "images/img/maps/yavin.png" },
    { name: "Base Starkiller", image: "images/img/maps/starkiller.png" },
    { name: "Endor", image: "images/img/maps/endor.png" },
    {
      name: "Kashyyyk X",
      image:
        "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    },
    {
      name: "Jakku Cemeterio X",
      image:
        "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    },
    {
      name: "Bespin X",
      image:
        "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    },
  ],
  right: [
    {
      name: "Palacio de Jabba X",
      image:
        "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    },
    {
      name: "Kessel X",
      image:
        "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    },
    { name: "Geonosis Tripa", image: "images/img/maps/geonosis_t.png" },
    { name: "Ajian Kloss", image: "images/img/maps/ajan_kloss.png" },
    { name: "Geonosis Dreadnought", image: "images/img/maps/geonosis_d.png" },
    {
      name: "Nabo Ship X",
      image:
        "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    },
    { name: "Felucia", image: "images/img/maps/felucia.png" },
    {
      name: "Takidana MC85 X",
      image:
        "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    },
    {
      name: "Jakku Ship X",
      image:
        "https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    },
    { name: "Crait", image: "images/img/maps/crait.png" },
    { name: "Scarif", image: "images/img/maps/scarif.png" },
  ],
};

const container = document.getElementById("mapsContainer");
const mainImage = document.querySelector(".main_img");

function changeImage(imagePath) {
  if (mainImage) {
    mainImage.src = imagePath;
    mainImage.style.opacity = "0.5";
    setTimeout(() => {
      mainImage.style.opacity = "1";
    }, 200);
  }
}

const leftMaps = mapsData.left
  .map(
    (map) =>
      `<div class="main_map" onclick="changeImage('${map.image}')">${map.name}</div>`
  )
  .join("");

// Рендерим правую колонку
const rightMaps = mapsData.right
  .map(
    (map) =>
      `<div class="main_map" onclick="changeImage('${map.image}')">${map.name}</div>`
  )
  .join("");

// Вставляем все в контейнер
container.innerHTML = `
    <div class="maps_left">
        ${leftMaps}
    </div>
    <div class="maps_right">
        ${rightMaps}
    </div>
`;

document.querySelector(".set_dark").onclick = function () {
  document.body.className = "DarkTheme";
};
document.querySelector(".set_light").onclick = function () {
  document.body.className = "LightTheme";
};

document.querySelector(".set_dark").onclick = function () {
  // Добавляем затемнение
  document.body.style.transition = "opacity 0.3s ease";
  document.body.style.opacity = "0.1";

  setTimeout(() => {
    document.body.className = "DarkTheme";
    document.body.style.opacity = "1";
  }, 300);
};

document.querySelector(".set_light").onclick = function () {
  document.body.style.transition = "opacity 0.3s ease";
  document.body.style.opacity = "0.1";

  setTimeout(() => {
    document.body.className = "LightTheme";
    document.body.style.opacity = "1";
  }, 300);
};

document.querySelector(".set_call").onclick = function () {
  const audio = new Audio("audio/call.mp3");
  audio.currentTime = 0;
  audio.play();
};

document.querySelector(".discord").onclick = function () {
  window.open("https://discord.gg/W2JNJMah");
};
document.querySelector(".nexus").onclick = function () {
  window.open(
    "https://www.nexusmods.com/games/starwarsbattlefront22017/mods?timeRange=allTime"
  );
};
