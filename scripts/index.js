const app = new PIXI.Application({
  width: 300,
  height: 300
});
const picDiv = document.getElementById("avatar");
picDiv.appendChild(app.view);
const myFilter = new PIXI.filters.CRTFilter();
myFilter.noise = 0.4;
myFilter.lineContrast = 0.75
myFilter.seed = Math.random();
myFilter.vignetting = 0.4;
myFilter.vignettingAlpha = 0.9;
myFilter.vignettingBlur = 0.5;

const avatar = PIXI.Sprite.from("../assets/avatar.jpg");
avatar.filters = [myFilter];
avatar.width = app.screen.width;
avatar.height = app.screen.height;
app.stage.addChild(avatar);

app.ticker.add(() => {
    myFilter.seed = Math.random();
    myFilter.time = 1.0
})
// while (true) {
//   myFilter.seed = Math.random();
//   myFilter.time = 0.5
// }
