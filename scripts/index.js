// const app = new PIXI.Application({
//   width: 150,
//   height: 150
// });

// const picDiv = document.getElementById("avatar");
// picDiv.appendChild(app.view);
// const myFilter = new PIXI.filters.CRTFilter();
// myFilter.noise = 0.4;
// myFilter.lineContrast = 0.75
// myFilter.seed = Math.random();
// myFilter.vignetting = 0.4;
// myFilter.vignettingAlpha = 0.9;
// myFilter.vignettingBlur = 0.5;

// const avatar = PIXI.Sprite.from("../assets/profile.png");
// const tv = PIXI.Sprite.from("../assets/television-set-retro.jpg")
// avatar.filters = [myFilter];
// avatar.width = app.screen.width;
// avatar.height = app.screen.height;
// // tv.width = app.screen.width;
// // tv.height = app.screen.height;
// app.stage.addChild(avatar);
// // app.stage.addChild(tv);

// app.ticker.add(() => {
//     myFilter.seed = Math.random();
//     myFilter.time = 1.0
// })
// while (true) {
//   myFilter.seed = Math.random();
//   myFilter.time = 0.5
// }

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
    $navbarBurgers.forEach(el => {
      el.addEventListener("touch", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Dynamic copyright year
const now = new Date();
const thisYear = now.getFullYear();
const copyright = document.getElementById("copyright");
copyright.append(thisYear)