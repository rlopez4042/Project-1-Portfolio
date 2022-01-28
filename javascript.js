// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations

var goldenCenter = new Image();
var darkGrayCircle = new Image();

function init() {
  goldenCenter.src = '/Users/robertlopez/Desktop/Project 1/project-1-portfolio/GoldCircle.png';
  darkGrayCircle.src = '/Users/robertlopez/Desktop/Project 1/project-1-portfolio/GoldCircle.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(105, 0);
  ctx.fillRect(0, 10, 4, 2); // Shadow
  ctx.drawImage(darkGrayCircle, -17, -17, 30, 30);

  ctx.restore();

  ctx.beginPath();
  ctx.stroke();

  ctx.drawImage(goldenCenter, 110, 110, 80, 80);

  window.requestAnimationFrame(draw);
}

init();
